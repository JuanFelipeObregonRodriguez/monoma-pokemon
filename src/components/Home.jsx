import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Modal from "./Modal";
import Avatar from './Avatar'
import PokemonInfo from "./PokemonInfo";

function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const results = response.data.results;
        const pokemonData = await Promise.all(
          results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            return res.data;
          })
        );
        setPokemonList(pokemonData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedPokemon(null);
    setShowModal(false);
  };

  return (
    <div>
        <header>
        <Avatar />
      </header>
      <h1>Dashboard</h1>
      <div className="card-container">
        {pokemonList.map((pokemon) => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            onClick={() => handlePokemonClick(pokemon)}
          />
        ))}
      </div>
      {showModal && (
        <Modal onClose={handleModalClose}>
          <PokemonInfo selectedPokemon={selectedPokemon} />
        </Modal>
      )}
    </div>
  );
}

export default Home;