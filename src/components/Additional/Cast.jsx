import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'API/Api';
import css from './AdditionalStyle.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async (id) => {
      const response = await getMoviesCast(Number(id));

      setCast(response.data.cast);
      // console.log(response.data.cast);
    };

    getData(id);
  }, [id]);

  return (
    <div>
      <ul>
        {cast.map(actor => (
          <li key={actor.id} className={css.actorLink}>
            <div>
              <img
                src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
                alt={actor.name}
                className={css.actorImg}
              ></img>
            </div>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
