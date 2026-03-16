import { useState, useEffect } from "react";

export default function AppMain() {
    const films = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ]

    return (
        <>
            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <ul>
                {
                    films.map((film, index) => (
                        <li key={index}>TITOLO:{film.title} GENERE:{film.genre}</li>
                    ))
                }
            </ul>

        </>
    )
}