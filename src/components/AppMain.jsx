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

    const [selectGenre, setSelectGenre]=useState("")

    return (
        <>
            <select value={selectGenre} onChange={(e)=> setSelectGenre(e.target.value)} class="form-select" aria-label="Default select example">
                <option selected>Che genere di film vuoi vedere?</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
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