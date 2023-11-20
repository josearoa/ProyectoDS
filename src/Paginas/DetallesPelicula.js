import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetallesPelicula = () => {
    const { id } = useParams();
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "66b7a456851fd240629f9890c2795696";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

    const [pelicula, setPelicula] = useState(null);
    const [director, setDirector] = useState('');
    const [reparto, setReparto] = useState([]);

    useEffect(() => {
        const fetchPelicula = async () => {
            try {
                const { data } = await axios.get(`${API_URL}/movie/${id}`, {
                    params: {
                        api_key: API_KEY,
                        language: 'es'
                    },
                });
                setPelicula(data);

                const castResponse = await axios.get(`${API_URL}/movie/${id}/credits`, {
                    params: {
                        api_key: API_KEY
                    },
                });
                const directorInfo = castResponse.data.crew.find(member => member.job === 'Director');
                if (directorInfo) {
                    setDirector(directorInfo.name);
                }

                const cast = castResponse.data.cast.slice(0, 5); // Mostrar los primeros 5 miembros del reparto
                setReparto(cast);
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchPelicula();
    }, [id]);

    return (
        <div className="container">
            <h1>Detalles de la Película</h1>
            {pelicula && (
                <div className="movie-details-box">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={`${IMAGE_PATH}/${pelicula.poster_path}`} alt={pelicula.title} className="img-fluid" />
                        </div>
                        <div className="col-lg-9">
                            <h2 className="center-text">{pelicula.title}</h2>
                            <p>{pelicula.overview}</p>
                            {pelicula.tagline && <p>{pelicula.tagline}</p>}
                            <div className="row">
                                <div className="col-lg-4">
                                    <div>
                                        <h3>Director:</h3>
                                        <p>{director}</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">

                                </div>
                                <div className="col-lg-4">
                                    <div>
                                        <h3>Reparto:</h3>
                                        <ul>
                                            {reparto.map(actor => (
                                                <li key={actor.id}>{actor.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetallesPelicula;
