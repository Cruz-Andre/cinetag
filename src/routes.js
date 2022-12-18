import Favoritos from "pages/Favoritos/Favoritos"
import Inicio from "pages/Inicio/Inicio"
import Pag404 from "pages/Pag404/Pag404"
import PaginaBase from "pages/PaginaBase/PaginaBase"
import Player from "pages/Player/Player"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<Pag404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes