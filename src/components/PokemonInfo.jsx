import React from "react";
import {
  InfoContainer,
  InfoImage,
  InfoList,
  InfoListItem,
  TextInfo,
  InfoAbilities,
  TextContainer,
} from "../UI/Styles";
const PokemonInfo = ({ selectedPokemon }) => {
  return (
    <InfoContainer>
      <TextInfo>
        <h2>{selectedPokemon.name}</h2>
        <InfoImage
          src={selectedPokemon.sprites.front_default}
          alt={selectedPokemon.name}
        />
        <TextContainer>
        <p className="height">Height: {selectedPokemon.height}</p>
        <p className="weight">Weight: {selectedPokemon.weight}</p>
        </TextContainer>
      </TextInfo>
      <InfoAbilities>
        <p>Abilities:</p>
        <InfoList>
          {selectedPokemon.abilities.map((ability) => (
            <InfoListItem key={ability.ability.name}>
              {ability.ability.name}
            </InfoListItem>
          ))}
        </InfoList>
        <img src="https://cdn0.iconfinder.com/data/icons/web-and-gaming-technology/132/9-512.png" alt="" />
      </InfoAbilities>
    </InfoContainer>
  );
};

export default PokemonInfo;
