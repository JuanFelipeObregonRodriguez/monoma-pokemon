import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Modal from "./Modal";
import Avatar from "./Avatar";
import PokemonInfo from "./PokemonInfo";
import { Header, CardContainer, DashboardContainer, VideoBackground, ButtonPage, ListPage } from "../UI/Styles";

function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(currentPage-1)*10}`
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
  }, [currentPage]);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedPokemon(null);
    setShowModal(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= 10; i++) {
      pageNumbers.push(i);
    }
    return (
      <ListPage>
        {pageNumbers.map((number) => (
          <li key={number}>
            <ButtonPage onClick={() => handlePageChange(number)}>
              {number}
            </ButtonPage>
          </li>
        ))}
      </ListPage>
    );
  };

  return (
    <DashboardContainer>
      <VideoBackground>
        <video autoPlay loop muted>
          <source src="https://assets.pokemon.com//assets/cms2-es-es/img/misc/virtual-backgrounds/pokemon/grookey.mp4" type="video/mp4" />
        </video>
      </VideoBackground>
      <Header>
        <h1>Pokedex.io</h1>
        <Avatar />
      </Header>
      <CardContainer>
        {pokemonList.map((pokemon) => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            onClick={() => handlePokemonClick(pokemon)}
          />
        ))}
      </CardContainer>
      {renderPagination()}
      {showModal && (
        <Modal onClose={handleModalClose}>
          <PokemonInfo selectedPokemon={selectedPokemon} />
        </Modal>
      )}
    </DashboardContainer>
  );
}

export default Home;