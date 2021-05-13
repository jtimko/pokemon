import { useState } from 'react'
import Button from './components/Button'
import Pokemon from './components/Pokemon'

function App() {
  const [pokemonData, setPokemonData] = useState(null)

  const clickme = async (name) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await resp.json()

    setPokemonData(data);
  }

  return (
    <div className="App">
      {pokemonData && <Pokemon pokemon={pokemonData} />}
      <Button sendMsg={clickme} />
    </div>
  );
}

export default App;
