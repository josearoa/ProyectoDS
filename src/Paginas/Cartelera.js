import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import PeliculaConHoverSinNombre2 from '../Componentes/PeliculaConHoverSinNombre2';

function Cartelera() {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "66b7a456851fd240629f9890c2795696";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

    const [peliculas, setPeliculas] = useState([]);
    const [buscadorKey, setBuscadorKey] = useState("");

    useEffect(() => {
        fetchMovie(buscadorKey);
    }, [buscadorKey]);

    const fetchMovie = async (buscadorKey) => {
        try {
            const type = buscadorKey ? "search" : "discover";
            const { data: { results } } = await axios.get(`${API_URL}/${type}/movie`, {
                params: {
                    api_key: API_KEY,
                    query: buscadorKey
                },
            });
            setPeliculas(results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleInputChange = (event) => {
        setBuscadorKey(event.target.value);
    } 

    return (
        <div className="container">
            <h1 className="text-white text-center mt-4 mb-3">Cartelera</h1>
            <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar películas"
                        value={buscadorKey}
                        onChange={handleInputChange}
                    />
                </div>
                {peliculas.map((pelicula) => (
                    <div key={pelicula.id} className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                        <PeliculaConHoverSinNombre2 key={pelicula.id} pelicula={pelicula} imagePath={IMAGE_PATH} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cartelera;
