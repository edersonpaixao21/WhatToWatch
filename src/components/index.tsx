import {  useState } from 'react'
import { api, apiKey, apiUrlImg, language } from '../Api/api'

import logoImg from '../assets/logo.png'
import backgroundImg from '../assets/background.png'
import shuffleImg from '../assets/shuffle.svg'
import { Container } from './styles'

interface FilmProps {
  id: number;
  title: string;
  description?: string;
  poster?: string;
  overview?: string;
}

export function Home() {
  const [film, setFilm] =useState<FilmProps>({} as FilmProps)
  const id = Math.floor(Math.random() *1000) + 1


  const handleSearchFilm = () =>{
       api.get(`${id}?${apiKey}&${language}`)
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
    <Container>
      <div className='all'> 
        <div>
          <img className='logo-img' src={logoImg} alt="logo" />
          <h1 className='title' >Não sabe o que assistir?</h1>
        </div>

        <div className='film'>
          <img className='film-poster' src={film.poster} alt={film.title} />
          <div>
            <h1 className='film-title'>{film.title}</h1>
            <p className='film-description'>{film.description}</p>
          </div>
        </div>

        <div>
        <button type="button" onClick={handleSearchFilm}>
          
          <span>Encontrar filme</span>
        </button> 
        <p className='click' >Clique em "Encontrar filme" que traremos informações <br /> de algum filme para você assistir hoje.</p>
        </div>
      </div>

      <img className='background-img' src={backgroundImg} alt="imagem de fundo" />
    </Container>
  )
}

