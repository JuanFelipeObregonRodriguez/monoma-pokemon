import React from "react";

const PokemonInfo = ({ selectedPokemon }) => {
  return (
    <div>
      <h2>{selectedPokemon.name}</h2>
      <img
        src={selectedPokemon.sprites.front_default}
        alt={selectedPokemon.name}
      />
      <p>Height: {selectedPokemon.height}</p>
      <p>Weight: {selectedPokemon.weight}</p>
      <p>Abilities:</p>
      <ul>
        {selectedPokemon.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonInfo;