import { useFavoritoContext } from 'context/FavoritosContexto'
import styles from './Card.module.css'
import iconeFavorito from './favoritar.png'
import iconeNaoFavorito from './desfavoritar.png'
import { Link } from 'react-router-dom'

export default function Card({ id, titulo, capa }) {

  const { favorito, adicionarFavorito } = useFavoritoContext()

  const ehFavorito = favorito.some(fav => fav.id === id)
  const icone = ehFavorito ? iconeNaoFavorito : iconeFavorito

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img
        src={icone}
        alt='favoritar filme'
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa })
        }}
      />
    </div>
  )
}