import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { api, apiKey, apiUrlImg, language } from './Api/api'

interface FilmProps {
  id: number;
  title: string;
  description: string;
  poster: string;
}

export function App() {
  const [film, setFilm] =useState<FilmProps>({} as FilmProps)

  function handleSearchFilm() {
      api.get(`${api}${apiKey}`)
      .then(res =>{
        const data = res.data.results [Math.floor(Math.random() )];

        const imgPoster = `${apiUrlImg}${data.poster_path}`;

        const film = {
          id: data.id,
          title:data.title,
          description: data.overview,
          poster:imgPoster
        }

        setFilm(film);  
      })
      
      .catch((err: any) => {
        console.log(err);
      }),
      {
        loading: 'Loading...',
        success: 'Success!',
        error: 'Error!',
      }
    
  }
  

  return (
    <main>

      <div>
        <img src="" alt="" />
        <h1>Não sabe o que assistir?</h1>
      </div>

      <div>
        <img src={film.poster} alt={film.title} />
        <div>
          <h1>{film.title}</h1>
          <p>{film.description}</p>
        </div>
      </div>

      <div>
      <button type="button" onClick={handleSearchFilm}>
        <img src="" alt="" />
        <span>Encontrar filme</span>
      </button> 
      <p>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</p>
      </div>

    </main>
  )
}

