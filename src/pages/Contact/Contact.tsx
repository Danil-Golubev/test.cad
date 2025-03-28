import { useForm, Controller } from "react-hook-form";
import { Input, Button, Typography } from "antd";
import "@ant-design/v5-patch-for-react-19";

import {
  container,
  content,
  error,
  form,
  inputClass,
  textareaClass,
  buttomSubmit,
  contactTitle,
  responsePage,
} from "./style.css";
import { sendFormData } from "../../fetch";
import { useEffect, useState } from "react";

const { Text } = Typography;

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const savedResponse = localStorage.getItem("formResponse");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const response = await sendFormData(data);
    if (response) {
      localStorage.setItem("formResponse", response);
      setResponseMessage(response);
    }
  };
  useEffect(() => {
    const savedResponse = localStorage.getItem("formResponse");
    if (savedResponse) {
      setResponseMessage(savedResponse);
    }
  }, []);

  if (savedResponse) {
    return (
      <div className={responsePage}>
        <h1>{responseMessage}</h1>
      </div>
    );
  }

  return (
    <div className={container}>
      <div className={content}>
        <h1 className={contactTitle}>Only CTA on the page</h1>
        <form className={form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <Input id="name" className={inputClass} {...field} />
            )}
          />
          {errors.name && <Text className={error}>{errors.name.message}</Text>}

          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <Input
                id="email"
                type="email"
                className={inputClass}
                {...field}
              />
            )}
          />
          {errors.email && (
            <Text className={error}>{errors.email.message}</Text>
          )}

          <label htmlFor="message">Message</label>
          <Controller
            name="message"
            control={control}
            rules={{ required: "Message is required" }}
            render={({ field }) => (
              <Input.TextArea
                id="message"
                className={textareaClass}
                {...field}
              />
            )}
          />
          {errors.message && (
            <Text className={error}>{errors.message.message}</Text>
          )}

          <Button className={buttomSubmit} type="primary" htmlType="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};
