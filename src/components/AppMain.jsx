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

    const [selectGenre, setSelectGenre]=useState("intera lista")
    const [originalArray, setOriginalArray]=useState(films)

    useEffect(()=>{
        if(selectGenre==="intera lista"){
            setOriginalArray(films)
        }else{
            const filteredFilms= films.filter(film=> film.genre===selectGenre)
            setOriginalArray(filteredFilms)
        }
    },[selectGenre])

    return (
        <>
            <select value={selectGenre} onChange={(e)=> setSelectGenre(e.target.value)} class="form-select" aria-label="Default select example">
                <option selected value="intera lista">Che genere di film vuoi vedere?</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
            </select>
            <ul>
                {
                    originalArray.map((film, index) => (
                        <li key={index}>TITOLO:{film.title} GENERE:{film.genre}</li>
                    ))
                }
            </ul>

        </>
    )
}