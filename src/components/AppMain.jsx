import { useState, useEffect } from "react";
import InputTitle from "./InputTitle";
import RenderList from "./RenderList";

 const films = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ]
export default function AppMain() {
   

    const [selectGenre, setSelectGenre] = useState("")
    const [originalArray, setOriginalArray] = useState(films)
    const [typeTitle, setTypeTitle] = useState("")


    useEffect(() => {
        if (selectGenre === "") {
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

                        <InputTitle typeTitleComp={typeTitle} setTypeTitleComp={setTypeTitle}/>

                        <select value={selectGenre} onChange={(e) => setSelectGenre(e.target.value)} className="form-select border border-danger border-3" aria-label="Default select example">

                            <option value="">Che genere di film vuoi guardare?</option>

                            {
                                [...new Set (films.map(film=>film.genre))].map((genre,index)=>(
                                    <option key={index} value={genre}>{genre}</option>
                                ))
                            }

                        </select>

                    </div>
                </div>

                <ul className="list" >

                    {
                        originalArray.map((film, index) => (
                            <RenderList title={film.title} genre={film.genre} index={index}/>
                        ))
                    }

                </ul>
            </div>
        </>
    )
}