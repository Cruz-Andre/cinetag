import { Link } from 'react-router-dom'
import CabecalhoLink from 'components/CabecalhoLink/CabecalhoLink'
import logo from './logo.png'
import styles from './Cabecalho.module.css'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to='./'>
        <img src={logo} alt='logo do cinetag' />
      </Link>
      <nav>
        <CabecalhoLink url='./'>
          Home
        </CabecalhoLink>
        <CabecalhoLink url='./Favoritos'>
          Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  )
}