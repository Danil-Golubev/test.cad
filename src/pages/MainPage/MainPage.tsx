import { CustomButton } from "../../components/CustomButton/CustomButton";
import { VideoPlayer } from "../../components/VideoPlayer/VideoPlayer";
import {
  bannerSemiBlock,
  lessImportantBanner,
  mainBanner,
  mainContent,
  titles,
  titlesBanner,
} from "./style.css";

export const MainPage = () => {
  return (
    <>
      <div className={mainContent}>
        <div className={mainBanner}>
          <div className={bannerSemiBlock}>
            <h1>Most important title on the page</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum ultricies, sem urna convallis metus,
              vel suscipit nibh lacus tincidunt ante
            </p>
          </div>
          <div className={bannerSemiBlock}>
            <VideoPlayer videoId="dQw4w9WgXcQ" />
          </div>
        </div>
        <div className={titlesBanner}>
          <h1>Also very important title</h1>
          <div className={titles}>
            <div>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et condimentum
              </p>
            </div>
            <div>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et condimentum
              </p>
            </div>
            <div>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et condimentum
              </p>
            </div>
            <div>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et condimentum
              </p>
            </div>
            <div>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et condimentum
              </p>
            </div>
            <div>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                mattis, leo et condimentum
              </p>
            </div>
          </div>
          <CustomButton />
        </div>
        <div className={lessImportantBanner}>
          <h1>Less important banner</h1>
          <CustomButton />
        </div>
      </div>
    </>
  );
};
