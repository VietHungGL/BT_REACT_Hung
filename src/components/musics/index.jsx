import React, { useState } from "react";
import List from "./list";
import Play from "./play";

const music = [
  {
    id: 1,
    name: "Độ Tộc 2",
    cover: require("assets/music/1.jpg"),
    src: require("assets/music/DoToc2-MasewDoMixiPhucDuPhao-7064730.mp3"),
    artist: "NF Real music",
    isLiked: false,
  },
  {
    id: 2,
    name: "À lôi",
    cover: require("assets/music/2.jpg"),
    src: require("assets/music/ALoi-Double2TMasew-10119691.mp3"),
    artist: "NF Real 2",
    isLiked: false,
  },
  {
    id: 3,
    name: "DontCoi",
    cover: require("assets/music/3.jpg"),
    src: require("assets/music/DontCoi-RPTOrijinnRonboogz-8345160.mp3"),
    artist: "NF Real 3",
    isLiked: true,
  },
  {
    id: 4,
    name: "KiaBongDangAi",
    cover: require("assets/music/4.jpg"),
    src: require("assets/music/KiaBongDangAi-Phao-8544353.mp3"),
    artist: "NF Real 4",
    isLiked: true,
  },
  {
    id: 5,
    name: "LuonYeuDoi",
    cover: require("assets/music/5.jpg"),
    src: require("assets/music/LuonYeuDoi-Den-8692742.mp3"),
    artist: "NF Real 5",
    isLiked: false,
  },
  {
    id: 6,
    name: "YeuAnhDiMeAnhBanBanhMi",
    cover: require("assets/music/6.jpg"),
    src: require("assets/music/YeuAnhDiMeAnhBanBanhMi-PhucDu-8698703.mp3"),
    artist: "NF Real 6",
    isLiked: false,
  },
];
function PlayMusic(props) {
  const [selectedMusic, setSelectedMusic] = useState(music[0]);

  const onSelectMusic = (selectedId) => {
    // nhận selectedId
    const selected = music.find((item) => item.id === selectedId);
    setSelectedMusic(selected);
  };

  const onNextMusic = () => {
    const currentIndexMusic = music.findIndex(
      (item) => item.id === selectedMusic.id
    );
    if (currentIndexMusic === music.length - 1) {
      setSelectedMusic(music[0]);
    } else {
      setSelectedMusic(music[currentIndexMusic + 1]);
    }
  };

  const onPrevMusic = () => {
    const currentIndexMusic = music.findIndex(
      (item) => item.id === selectedMusic.id
    );
    if (currentIndexMusic === 0) {
      setSelectedMusic(music[music.length - 1]);
    } else {
      setSelectedMusic(music[currentIndexMusic - 1]);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="mucsic-list">
          <h3 className="music-name">Most Popular</h3>
          <p className="list-song">92 Songs</p>
          <List
            listMusic={music}
            onSelectMusic={onSelectMusic}
            selectedId={selectedMusic.id}
          />
        </div>
        <div className="pause">
          <h2>Nowplaying</h2>
          <Play
            // music={selectedMusic}
            name={selectedMusic.name}
            artist={selectedMusic.artist}
            cover={selectedMusic.cover}
            id={selectedMusic.id}
            src={selectedMusic.src}
            onNextMusic={onNextMusic}
            onPrevMusic={onPrevMusic}
          />
        </div>
      </div>
    </div>
  );
}

export default PlayMusic;
