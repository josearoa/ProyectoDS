import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DiasSemanaNav from "../Componentes/DiasSemanaNav"

const DetallesPelicula = () => {
    const { id } = useParams();
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "66b7a456851fd240629f9890c2795696";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

    const [pelicula, setPelicula] = useState(null);
    const [director, setDirector] = useState('');
    const [reparto, setReparto] = useState([]);
    const [trailerKey, setTrailerKey] = useState('');
    const [horarioSeleccionado, setHorarioSeleccionado] = useState('');

    useEffect(() => {
        const fetchPelicula = async () => {
            try {
                const { data } = await axios.get(`${API_URL}/movie/${id}`, {
                    params: {
                        api_key: API_KEY,
                        language: 'es',
                        append_to_response: 'videos' // Solicitar información de videos
                    },
                });
                setPelicula(data);

                // Obtener información del director y reparto
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

                // Verificar si hay un trailer disponible
                if (data.videos?.results.length > 0) {
                    const trailer = data.videos.results.find(video => video.type === 'Trailer');
                    if (trailer) {
                        setTrailerKey(trailer.key);
                    }
                }
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchPelicula();
    }, [id]);

    const handleHorarioSeleccionado = (horario) => {
        setHorarioSeleccionado(horario);
    };

    const Entradas = () => {
        const [cantidadEntradas, setCantidadEntradas] = useState(0);

        const handleIncrement = () => {
            setCantidadEntradas(cantidadEntradas + 1);
        };

        const handleDecrement = () => {
            if (cantidadEntradas > 0) {
                setCantidadEntradas(cantidadEntradas - 1);
            }
        };

        if (horarioSeleccionado) {
            return (
                <div>
                    <h2>Entradas</h2>
                    <p>Horario seleccionado: {horarioSeleccionado}</p>
                    <div className="cantidad-entradas">
                        <button onClick={handleDecrement}>-</button>
                        <span>{cantidadEntradas}</span>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button className="btn-agregar">Agregar al carrito</button>
                </div>
            );
        }
        return null;
    };

    return (
        <div>
            <div className="trailer-container">
                {trailerKey && (
                    <iframe
                        title="Trailer"
                        width="100%"
                        height="400"
                        src={`https://www.youtube.com/embed/${trailerKey}`}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
            <div className="container superp detalle-pelicula">
                {pelicula && (
                    <div >
                        <div className="row">
                            <div className="col-lg-3 d-flex flex-column align-items-cente">
                                <img src={`${IMAGE_PATH}/${pelicula.poster_path}`} alt={pelicula.title} className="img-fluid" />
                                <div className="col-lg-4">
                                    <div>
                                        <h3 className='text-white'>Director:</h3>
                                        <p className='text-white'>{director}</p>
                                    </div>
                                </div>
                                <div >
                                </div>
                                <div >
                                    <div>
                                        <h3 className='text-white'>Reparto:</h3>
                                        <ul className='text-white'>
                                            {reparto.map(actor => (
                                                <li key={actor.id}>{actor.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 ">
                                <div className="movie-details-box">
                                    <h2 className="center-text">{pelicula.title}</h2>
                                    <p>{pelicula.overview}</p>
                                    {pelicula.tagline && <p>{pelicula.tagline}</p>}
                                </div>
                                <div className='row'>
                                    <div className='col-lg-2'></div>
                                    <div className="movie-details-box col-lg-12 horario">
                                        <DiasSemanaNav handleHorarioSeleccionado={handleHorarioSeleccionado} />
                                        <Entradas />
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DetallesPelicula;
