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
    const [addFilm, setAddFilm] = useState("")
    const [addGenre, setAddGenre] = useState("")

    useEffect(()=>{
        let filteredFilms= films
        if(selectGenre !== ""){
            filteredFilms=filteredFilms.filter(film=> film.genre===selectGenre)
        }
        if(typeTitle !== ""){
            filteredFilms=filteredFilms.filter(film=>film.title.toLowerCase().includes(typeTitle.toLowerCase()))
        }
        setOriginalArray(filteredFilms)
    },[selectGenre,typeTitle])

    function handleSubmit(e) {
        e.preventDefault()
        if (addFilm.length < 2) {
            setOriginalArray(films)
        } else {
            const addNewFilm = { title: addFilm, genre: addGenre }
            setOriginalArray([...originalArray, addNewFilm])
            setAddFilm("")
            setAddGenre("")
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row row-cols-1  row-cols-md-2 d-flex align-items-center justify-content-around pb-5">
                    <div className="col">

                        <InputTitle typeTitleComp={typeTitle} setTypeTitleComp={setTypeTitle} />
                    </div>
                    <div className="col">
                        <select value={selectGenre} onChange={(e) => setSelectGenre(e.target.value)} className="form-select border border-danger border-3" aria-label="Default select example">

                            <option value="">What film's genre are you looking for?</option>

                            {
                                [...new Set(films.map(film => film.genre))].map((genre, index) => (
                                    <option key={index} value={genre}>{genre}</option>
                                ))
                            }

                        </select>
                    </div>



                </div>

                <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center align-items-center gap-3">
                        <input placeholder="Add new film title" type="text" value={addFilm} onChange={(e) => setAddFilm(e.target.value.toLowerCase())} required />
                        <input placeholder="Add new film genre" type="text" value={addGenre} onChange={(e) => setAddGenre(e.target.value.toLowerCase())} required />
                        <button type="submit" className="border btn bg-primary text-white">Conferma</button>
                    </div>

                </form>
                <ul className="list" >

                    {
                        originalArray.map((film, index) => (
                            <RenderList title={film.title} genre={film.genre} index={index} />
                        ))
                    }

                </ul>
            </div>
        </>
    )
}