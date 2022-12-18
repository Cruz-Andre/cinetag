import Banner from 'components/Banner/Banner'
import Titulo from 'components/Titulo/Titulo'
import { useParams } from 'react-router-dom'
import styles from './Player.module.css'

import videos from 'json/db.json'
import Pag404 from 'pages/Pag404/Pag404'

export default function Player() {

  const parametrosDaURL = useParams()

  const video = videos.find(video => {
    return video.id === Number(parametrosDaURL.id)
  })

  if (!video) {
    return <Pag404 />
  }

  return (
    <>
      <Banner imagem='player' />
      <Titulo>
        Player
      </Titulo>
      <section className={styles.container}>
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
      </section>
    </>
  )
}