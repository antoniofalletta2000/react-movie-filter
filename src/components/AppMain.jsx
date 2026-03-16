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

    const [selectGenre, setSelectGenre] = useState("intera lista")
    const [originalArray, setOriginalArray] = useState(films)
    const [typeTitle, setTypeTitle] = useState("")


    useEffect(() => {
        if (selectGenre === "intera lista") {
            setOriginalArray(films)
        } else {
            const filteredFilms = films.filter(film => film.genre === selectGenre)
            setOriginalArray(filteredFilms)
        }
    }, [selectGenre])

    useEffect(() => {
        if (typeTitle === "") {
            setOriginalArray(films)
        } else {
            const filterFilmsByTitle = films.filter(film => film.title.toLocaleLowerCase().includes(typeTitle.toLocaleLowerCase()))
            setOriginalArray(filterFilmsByTitle)
        }
    }, [typeTitle])


    return (
        <>
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center justify-content-around pb-5">
                    <div className="col d-flex gap-3">
                        <input id="inputTitle" className="border border-danger border-3" type="text" value={typeTitle} onChange={(e) => setTypeTitle(e.target.value)} />
                        <select value={selectGenre} onChange={(e) => setSelectGenre(e.target.value)} className="form-select border border-danger border-3" aria-label="Default select example">
                            <option selected value="intera lista">Che genere di film vuoi vedere?</option>
                            <option value="Fantascienza">Fantascienza</option>
                            <option value="Thriller">Thriller</option>
                            <option value="Romantico">Romantico</option>
                            <option value="Azione">Azione</option>
                        </select>
                    </div>
                </div>

                <ul className="list" >
                    {
                        originalArray.map((film, index) => (
                            <li key={index}>
                                <div className="card">
                                    <div className="d-flex align-items-center justify-content-around p-1">
                                        <h4 className="text-white">{film.title}</h4>
                                        <span className="text-white">{film.genre}</span>
                                    </div>
                                </div>

                            </li>
                        ))
                    }
                </ul>
            </div>


        </>
    )
}