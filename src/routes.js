import Cabecalho from "components/Cabacalho/Cabecalho"
import Container from "components/Container/Container"
import Rodape from "components/Rodape/Rodape"
import Favoritos from "pages/Favoritos/Favoritos"
import Inicio from "pages/Inicio/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} ></Route>
          <Route path="/favoritos" element={<Favoritos />} ></Route>
        </Routes>
      </Container>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes