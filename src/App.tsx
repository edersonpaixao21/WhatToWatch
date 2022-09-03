import {  useState } from 'react'
import { api, apiKey, apiUrlImg, language } from './Api/api'

interface FilmProps {
  id: number;
  title: string;
  description?: string;
  poster?: string;
  overview?: string;
}

export function App() {
  const [film, setFilm] =useState<FilmProps>({} as FilmProps)


  const handleSearchFilm = () =>{
       api.get(`${apiKey}`)
      .then((res: any) =>{
       const data: FilmProps = res.data;

        const imgPoster = `${apiUrlImg}${res.data.poster_path}`;

      //  const imgPoster = `${apiUrlImg}${data.poster_path}`;
        const film = {
          id: data.id,
          title:data.title,
          description: data.overview,
          poster:imgPoster
        }
        console.log(imgPoster)
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
        <img src={film.poster} alt="" />
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

