import Banner from "components/Banner/Banner";
import Card from "components/Card/Card";
import Titulo from "components/Titulo/Titulo";

import videos from 'json/db.json'

import styles from './Favoritos.module.css'

export default function Favoritos() {
  return (
    <>
      <Banner imagem='favoritos' />
      <Titulo>
        Meus Favoritos
      </Titulo>
      <section className={styles.container}>
        {videos.map(video => {
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  )
}