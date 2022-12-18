import Banner from "components/Banner/Banner";
import Card from "components/Card/Card";
import Titulo from "components/Titulo/Titulo";
import { useFavoritoContext } from "context/FavoritosContexto";

import styles from './Favoritos.module.css'

export default function Favoritos() {

  const {favorito} = useFavoritoContext()

  return (
    <>
      <Banner imagem='favoritos' />
      <Titulo>
        Meus Favoritos
      </Titulo>
      <section className={styles.container}>
       {favorito.map(fav => {
        return <Card {...fav} key={fav.id} />
       })}
      </section>
    </>
  )
}