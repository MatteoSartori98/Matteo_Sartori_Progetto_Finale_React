import "./style.css";
import Hero from "../Hero";
import Card from "../Card";
import { useEffect, useState } from "react";

export default function Home() {
  const [animeList, setAnimeList] = useState([]);
  useEffect(() => {
    async function fetchAnimes() {
      const response = await fetch(`https://api.jikan.moe/v4/anime`);
      const data = await response.json();
      setAnimeList(data.data);
    }
    fetchAnimes();
  }, []);
  return (
    <>
      <Hero />
      <div className="container">
        <div className="row gap-2">
          <Card animeList={animeList} />
        </div>
      </div>
    </>
  );
}
