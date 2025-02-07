import { useEffect, useState } from "react";
import "./style.css";
import Card from "../Card";

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
    <div className="container">
      <div className="row justify-content-center gap-2">
        <Card animeList={animeList} />
      </div>
    </div>
  );
}
