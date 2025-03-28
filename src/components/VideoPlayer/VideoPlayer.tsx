import { useState } from "react";
import { iframe, playButton, thumbnail, wrapper } from "./style.css";

interface VideoPlayer {
  videoId: string;
}

export const VideoPlayer = ({ videoId }: VideoPlayer) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className={wrapper} onClick={() => setIsPlaying(true)}>
      {isPlaying ? (
        <iframe
          className={iframe}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <div
          className={thumbnail}
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        >
          <button className={playButton}>▶</button>
        </div>
      )}
    </div>
  );
};
