import { useEffect, useState } from "react";

export default function Loading() {

  const [carregando, setCarregando] = useState(false);

  const enquantoCarrega = () => setCarregando(true);

  useEffect(() => {
    // Agende o redirecionamento para ocorrer após 3 segundos
    const tempoCarregando = setTimeout(enquantoCarrega, 4500);

    // Limpe o temporizador quando o componente deixar de existir
    return () => clearTimeout(tempoCarregando);
  }, []);

  if (carregando) {
    return (
      <section >
        <h2>Ops!</h2>
        <p>
          Parece que você seu vídeo não existe ou demorou para responder do servidor!
        </p>
        <p>Volte para Home</p>
      </section>
    )
  }

  return (
    <section>
      <h1>CARREGANDO VÍDEO...</h1>
      {/* {setTimeout(function () {redirect(<Pag404 />)}, 3000)} */}
    </section>

  )
}