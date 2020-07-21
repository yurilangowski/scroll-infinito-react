import React from "react";

export default function Noticia(props) {
  // Estilos aleatórios, só para haver uma separação
  const estilos = {
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
  };

  return (
    <div style={estilos}>
      <h1>Exemplo de título de notícia {props.numero}</h1>

      <p>
        Exemplo de texto: The quick brown fox jumps over the lazy dog, tradução
        do inglês para A rápida raposa marrom pula por cima do cão preguiçoso, é
        um pangrama, frase que utiliza todas as letras do alfabeto em língua
        inglesa. Foi utilizada para exibir e demonstrar como ficariam todas as
        letras em uma impressão, desenvolvendo apenas uma frase. Alguns
        tradutores de programas simplesmente transliteram a citação sem procurar
        usar um pangrama em português, como "Um pequeno jabuti xereta viu dez
        cegonhas felizes" (42 letras) cuja tradução ao Inglês seria A small
        xereta tortoise saw ten happy storks{" "}
      </p>

      <p>
        Exemplo de texto: The quick brown fox jumps over the lazy dog, tradução
        do inglês para A rápida raposa marrom pula por cima do cão preguiçoso, é
        um pangrama, frase que utiliza todas as letras do alfabeto em língua
        inglesa. Foi utilizada para exibir e demonstrar como ficariam todas as
        letras em uma impressão, desenvolvendo apenas uma frase. Alguns
        tradutores de programas simplesmente transliteram a citação sem procurar
        usar um pangrama em português, como "Um pequeno jabuti xereta viu dez
        cegonhas felizes" (42 letras) cuja tradução ao Inglês seria A small
        xereta tortoise saw ten happy storks{" "}
      </p>
    </div>
  );
}
