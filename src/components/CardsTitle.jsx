import React, { use, useEffect, useRef, useState } from "react";
import cards_data from "../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const CardsTitle = ({ title, category }) => {
  const [data, setData] = useState([]);
  const cardRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => console.error(err));
  }, []);

  const handleScroll = (e) => {
    if (cardRef.current) {
      e.preventDefault();

      cardRef.current.scrollLeft += e.deltaY;
    }
  };
  useEffect(() => {
    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.addEventListener("wheel", handleScroll, { passive: false });
    }
  }, []);

  return (
    <div className="mt-10 mb-5">
      <h2 className="mb-10  text-2xl font-bold">
        {title ? title : "Popular on Netflix"}
      </h2>
      <div
        className="card-list flex gap-6 overflow-x-auto w-full scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        ref={cardRef}
      >
        {data.map((card, index) => (
          <Link
            to={`/player/${card.id}`}
            className="card-item shrink-0"
            key={index}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              alt={card.original_title}
              width={"280px"}
              className="rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardsTitle;
