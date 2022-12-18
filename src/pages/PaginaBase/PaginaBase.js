import Cabecalho from "components/Cabacalho/Cabecalho";
import Container from "components/Container/Container";
import Rodape from "components/Rodape/Rodape";
import FavoritosProvider from "context/FavoritosContexto";
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  )
}