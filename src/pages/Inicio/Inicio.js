import Banner from 'components/Banner/Banner'
import Card from 'components/Card/Card'
import Titulo from 'components/Titulo/Titulo'

import videos from 'json/db.json'
import styles from './Inicio.module.css'

export default function Inicio() {
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