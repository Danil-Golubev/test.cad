import { FormData } from "./pages/Contact/Contact";

export const sendFormData = async (data: FormData) => {
  try {
    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (response.ok) {
      console.log(responseData.message);
      return responseData.message;
    } else {
      console.error(responseData.error);
      return null;
    }
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
    return null;
  }
};
