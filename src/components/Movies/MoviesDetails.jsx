import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesDetails } from '../../API/Api';
import css from './MovieStyle.module.css'


const MoviesDetails = () => {
    const [movies, setMovies] = useState([])
    const [img, setImg] = useState('')
    const { id } = useParams()

    useEffect(() => {
		const getData = async (id) => {
			const response = await getMoviesDetails(Number(id));
            const path = "https://image.tmdb.org/t/p/w500"+ response.data.poster_path;
            
			setMovies(response.data);
            setImg(path);
            // console.log(movies.genres[0].name);
		}

		getData(id)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])

	return(
        <div>
            <button type='button'>Go back</button>
            <div className={css.movieContainer}>
                <img src={img} alt={movies.title} className={css.movieImg}></img>
                <div className={css.movieInfo}>
                    <h2>{movies.title}   ({movies.release_date})</h2>
                    <p>Popularity  {(movies.vote_average * 10).toFixed(0)}%</p>
                    <h3>Overviev</h3>
                    <p>{movies.overview}</p>
                    <h3>Genres</h3>
                    {/* <p>{movies.genres[0].name}</p> */}
                </div>   
            </div>
        </div>
    )
}

export default MoviesDetails