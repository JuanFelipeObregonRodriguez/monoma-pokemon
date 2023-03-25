import React from "react";
import { CardsContainer, MidCard } from "../UI/Styles";

function Card({ name, image, onClick }) {
  return (
    <CardsContainer className="card" onClick={onClick}>
      <img src={image} alt={name} />
      <MidCard>
      <h3>{name}</h3>
      </MidCard>
    </CardsContainer>
  );
}

export default Card;