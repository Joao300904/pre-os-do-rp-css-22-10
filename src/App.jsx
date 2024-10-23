import './App.css';
import RP1 from './components/header';

import imagem1 from './assets/18,90.jpg';
import imagem2 from './assets/41,90.jpg';
import imagem3 from './assets/83,90.jpg';
import imagem4 from './assets/132,90.jpg';
import imagem5 from './assets/189,90.jpg';
import imagem6 from './assets/379,90.jpg';

function App() {
  return (
    <div id="lista">
      <RP1
        texto="575 RP"
        bonus="+0 de bônus"
        imagem={imagem1}
        preco="R$18,90"
      />

      <RP1
        texto="1380 RP"
        bonus="1275 RP + 105 de bônus"
        imagem={imagem2}
        preco="R$41,90"
      />

      <RP1
        texto="2800 RP"
        bonus="2525 RP + 275 de bônus"
        imagem={imagem3}
        preco="R$83,90"
      />

      <RP1
        texto="4500 RP"
        bonus="4025 RP + 475 de bônus"
        imagem={imagem4}
        preco="R$132,90"

      />

      <RP1
        texto="6500 RP"
        bonus="5750 RP + 750 de bônus"
        imagem={imagem5}
        preco="R$189,90"

      />

      <RP1
        texto="13500 RP"
        bonus="11525 RP + 1975 de bônus"
        imagem={imagem6}
        preco="R$379,90"

      />

    </div>
  );
}

export default App;
