import React, { useCallback, useEffect, useRef, useState } from "react";
import "./music.css";

export default function Play({
  name,
  artist,
  cover,
  id,
  src,
  onNextMusic,
  onPrevMusic,
  shuffleSongs,
}) {
  // const { name, artist, cover, id, src } = props.music;

  const audioRef = useRef();

  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setIsPlaying(false);
  }, [id]);

  const onChangeSlider = useCallback((event) => {
    audioRef.current.currentTime = event.target.value;
  }, []);

  const getTrackLength = () => {
    audioRef.current.addEventListener("loadedmetadata", function () {
      // Thân hàm
      setDuration(audioRef.current.duration);
    });
  }; //đoạn này xử lý thanh input có thể tua bài hát

  useEffect(() => {
    getTrackLength();
  }, []);

  const getDuration = (duration) => {
    const minutes = Math.floor(duration / 60); // Số phút
    const seconds = Math.floor(duration % 60); // Số giây

    const formattedDuration = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    return formattedDuration;
  };

  const onUpdateTimer = useCallback(() => {
    setTimer(audioRef.current.currentTime);
  }, []);

  const onTogglePlayMusic = useCallback(() => {
    if (isPlaying) {
      audioRef.current.pause(); // Tạm dừng bài hát nếu nó đang phát
    } else {
      audioRef.current.play(); //Phát bài hát nếu nó bị tạm dừng
    }

    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  const onReloadMusic = () => {
    audioRef.current.load(); // reset lại bài
  };

  // const onEnMusic = ()  => {

  // }

  return (
    <>
      <div className="music">
        <div
          className={`music-img ${isPlaying ? "play" : ""}`}
          style={{
            backgroundImage: `url(${cover})`,
          }}
        />
        <h3 className="music-name">{name}</h3>
        <p>{artist}</p>
        <div className="music-time">
          <input
            type="range"
            // min="1"
            max={duration}
            value={timer}
            className="song"
            id="myRange"
            onInput={onChangeSlider}
          />
          <div className="timer">
            <span className="current-time">{getDuration(timer)}</span>
            <span className="song-duration">{getDuration(duration)}</span>
          </div>
        </div>
        <div className="controls">
          <span>
            <ion-icon
              name="shuffle"
              className="shuffle"
              onClick={shuffleSongs}
            />
          </span>
          <span>
            <ion-icon
              name="play-back"
              className="play-back"
              onClick={onPrevMusic}
            />
          </span>
          <span className="play-btn pause" onClick={onTogglePlayMusic}>
            {isPlaying ? (
              <ion-icon name="pause" className="pause" />
            ) : (
              <ion-icon name="play-outline" />
            )}
          </span>
          <span>
            <ion-icon
              name="play-forward"
              className="play-forward"
              onClick={onNextMusic}
            />
          </span>
          <span onClick={onReloadMusic}>
            <ion-icon name="repeat" className="repeat" />
          </span>
        </div>

        <audio
          // controls
          src={src}
          id="audioPlay"
          ref={audioRef}
          onTimeUpdate={onUpdateTimer}
          onEnded={onNextMusic} // khi hết bài auto chuyển bài
        />
      </div>
    </>
  );
}
