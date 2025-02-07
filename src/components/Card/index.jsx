/* eslint-disable react/prop-types */
import "./style.css";
import { Link } from "react-router-dom";
import { Heart, Eye, EyeOff } from "lucide-react";

export default function Card({ animeList }) {
  return (
    <>
      {animeList.map((anime) => (
        <Link
          to={`/detail/${anime.mal_id}`}
          state={{ anime }}
          key={anime.mal_id}
          className="card col-3 d-flex flex-row p-0"
        >
          <div className="anime-image">
            <img className="" src={anime.images.jpg.large_image_url} alt="" />
            <div className="status-box d-flex align-items-center justify-content-end position-absolute">
              <div
                className={`status-icon   ${
                  anime.status.split(" ", 1) == "Finished"
                    ? "finished"
                    : "onGoing"
                }`}
              >
                {anime.status.split(" ", 1)}
              </div>
            </div>
          </div>
          <div className="anime-info d-flex flex-column justify-content-around ">
            <h4>{anime.title}</h4>
            <div className="genre-box d-flex flex-wrap gap-1">
              {anime.genres.map((genre) => (
                <div className="rounded genre-icon" key={genre.mal_id}>
                  {genre.name}
                </div>
              ))}
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p>
                Episodes: <strong>{anime.episodes}</strong>
              </p>
              <p>
                Duration: <strong>{anime.duration.split(" ", 2)}</strong>
              </p>
            </div>
            <div className="call-to-action">
              {/* Cuore vuoto*/}
              <button>
                <Heart />
              </button>
              {/* Cuore pieno */}
              <button>
                <Heart fill="red" color="red" />
              </button>
              {/* Occhio aperto */}
              <button>
                <Eye />
              </button>
              {/* Occhio Chiuso */}
              <button>
                <EyeOff />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
