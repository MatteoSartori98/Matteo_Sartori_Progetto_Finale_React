/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";

export default function Anime() {
  const location = useLocation();
  const anime = location.state?.anime;
  return (
    <>
      <div color="black">ANime: {anime.title}</div>
    </>
  );
}
