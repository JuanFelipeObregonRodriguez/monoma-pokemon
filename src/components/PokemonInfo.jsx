import React from "react";
import { InfoContainer, InfoImage, InfoList, InfoListItem  } from "../UI/Styles";
const PokemonInfo = ({ selectedPokemon }) => {
  return (
    <InfoContainer>
      <h2>{selectedPokemon.name}</h2>
      <InfoImage
        src={selectedPokemon.sprites.front_default}
        alt={selectedPokemon.name}
      />
      <p>Height: {selectedPokemon.height}</p>
      <p>Weight: {selectedPokemon.weight}</p>
      <p>Abilities:</p>
      <InfoList>
        {selectedPokemon.abilities.map((ability) => (
          <InfoListItem key={ability.ability.name}>{ability.ability.name}</InfoListItem>
        ))}
      </InfoList>
    </InfoContainer>
  );
};

export default PokemonInfo;