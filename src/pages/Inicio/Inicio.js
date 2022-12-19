import Banner from 'components/Banner/Banner'
import Card from 'components/Card/Card'
import Titulo from 'components/Titulo/Titulo'
import { useEffect, useState } from 'react'

import styles from './Inicio.module.css'

export default function Inicio() {
  
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/Cruz-Andre/cinetag-api/videos')
    .then(resposta => resposta.json())
    .then(dados => {
      setVideos(dados)
    })
  }, [])

  return (
    <>
      <Banner imagem='home' />
      <Titulo>
        Um lugar para guardar seus vídeos e filmes
      </Titulo>
      <section className={styles.container}>
        {videos.map(video => {
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  )
}