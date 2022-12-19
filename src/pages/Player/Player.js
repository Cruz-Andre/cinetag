import Banner from 'components/Banner/Banner'
import Titulo from 'components/Titulo/Titulo'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import styles from './Player.module.css'
import Loading from 'components/Loading/Loading'

export default function Player() {

  const [video, setVideo] = useState()

  const parametrosDaURL = useParams()

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Cruz-Andre/cinetag-api/videos?id=${parametrosDaURL.id}`)
      .then(resposta => resposta.json())
      .then(dados => {
        setVideo(...dados)
      })
  }, [parametrosDaURL])

  if (!video) {
    return <Loading />
  }

  return (
    <>
      <Banner imagem='player' />
      <Titulo>
        Player
      </Titulo>
      <div className={styles.player}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
        </iframe>
      </div>
    </>
  )
}

/* Exemplo com  async await

  useEffect(() => {
    async function recebeVideo(id) {
      var recebendoVideo = await fetch(`https://my-json-server.typicode.com/Cruz-Andre/cinetag-api/videos/${id}`)
      var videoRecebido = await recebendoVideo.json()
      
      console.log(videoRecebido.link)
      return setVideo(videoRecebido)
    }
    recebeVideo(Number(parametrosDaURL.id))

  }, [parametrosDaURL])

*/