import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import './_Trailer.scss'

function Trailer(props) {
  const API_Key = process.env.REACT_APP_MOVIE_API_KEY;
  const id = props.match.params.id;
  console.log(id);
  const [key, setKey] = useState("");

  useEffect(() => {
    const getTrailer = async (id) => {
      let resTrailer = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_Key}&language=en-US`
      );
      console.log(resTrailer);
      let linkTrailer = resTrailer.data.results.filter((item) => {
        return item.name.includes("Trailer") && item.official === true;
      });
      const num = linkTrailer.length
      if(num === 0) {
        alert("no trailer for this film")
        return
      }
      if(num > 2) {setKey(linkTrailer[1].key)} else {setKey(linkTrailer[0].key)}
    };
    getTrailer(id);
  }, [API_Key, id]);

  return (
  <Fragment>
    {key !== "" ? (
      <div className="trailer-container" >
        <iframe
        className="video"
          src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
          frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
          
        ></iframe>
      </div>
    ) : null}
  </Fragment>)
}

export default Trailer;
