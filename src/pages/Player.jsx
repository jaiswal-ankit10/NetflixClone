import React, { useEffect, useState } from "react";
import back_arrow from "../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setVideo(res.results[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="w-full h-screen px-15">
      <img
        src={back_arrow}
        alt=""
        className="absolute top-5 left-0 "
        width={60}
        onClick={() => navigate("/")}
      />
      <iframe
        src={`https://www.youtube.com/embed/${video.key}`}
        frameborder="0"
        allowFullScreen
        className="w-full h-[90vh]"
      ></iframe>
      <div className="player-info flex justify-between pt-5">
        <p>{video.published_at.slice(0, 10)}</p>
        <p>{video.name}</p>
        <p>{video.type}</p>
      </div>
    </div>
  );
};

export default Player;
