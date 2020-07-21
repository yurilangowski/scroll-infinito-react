import React, {useState, useEffect} from 'react';
import './App.css';
import Noticia from './Noticia';

function App() {

  // Colocando as primeiras informações. Estas serão carregadas logo de início.
  let [urlPagina, setUrlPagina] = useState([
    <Noticia numero="1"/>,<Noticia numero="2"/>,<Noticia numero="3"/>,<Noticia numero="4"/>,<Noticia numero="5"/>
  ]);
  // A tag <Noticia> está diretamente ligada ao componente Noticia no src. Ela recebe um props de número apenas para diferenciá-las. 

  // Variável para contagem de quantas noticias estão sendo disponibilizadas atualmente. No caso, são 5.
  let [numeroDeNoticias, setNumeroDeNoticias] = useState(5);

  // Essa função só funcionará quando o scroll chegar ao fim da página. Disparará o aumentarPagina() no momento em que ela acontecer.
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      aumentarPagina();
    }
  };

  // Função principal
  let aumentarPagina = () => {

    // Pego o antigo array e coloco numa página
    let novoArray = urlPagina;
  
    // ...urlPagina significa que eu continuo com o meu array antigo, estou apenas colocando novas tags após as últimas inserções
    // Estou passando o props desta forma para mudar o título de cada notícia.
    novoArray = [...urlPagina, 
      <Noticia numero={numeroDeNoticias+1}/>,
      <Noticia numero={numeroDeNoticias+2}/>,
      <Noticia numero={numeroDeNoticias+3}/>,
      <Noticia numero={numeroDeNoticias+4}/>,
      <Noticia numero={numeroDeNoticias+5}/>]

    // Atualizando o número, para que na próxima chamada ele já esteja com 5 a mais
    let numeroAtualizado = numeroDeNoticias + 5;
    setNumeroDeNoticias(numeroAtualizado);

    // finalmente, coloco o novo array, atualizado
    setUrlPagina(novoArray);

  }

  // o {urlPagina} nada mais é do que a demonstração visual do array urlPagina, que será atualizado a todo o momento.
  return (
    <div className="App">

      <center>
      <h1>Scroll simples, sem nenhum import além dos padrões react</h1>

      <h2>5 noticias serão carregadas de cada vez, toda vez que você rolar a página até o rodapé.</h2>
      </center>

      {urlPagina}

      <center><h1>Quando o scroll chegar no fim da página, novas notícias serão carregadas</h1></center>

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
    </div>
  );
}

export default App;
