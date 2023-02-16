

/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/

import useGetData from './hook/useGetData';
import {useState, useEffect} from 'react'
import Pokemon from './components/Pokemon';

function App() {
  const [count, setCount] = useState(0);
  const url = 'https://pokeapi.co/api/v2/pokemon'

  const {data} = useGetData(url)

  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>consumir api pokémon</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Experiencia</th>
            <th>Img</th>
          </tr>
        </thead>
        <tbody>
          {data !== undefined && 
            data.map((item, i) => (
              <Pokemon item={item}/>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
