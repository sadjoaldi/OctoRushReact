import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";

const Playercontainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
  background: transparent;
  border: 1px solid black;
  gap: 10px;
`;

const Pictures = styled.img`
  width: 50vw;
  margin: 25px;
  border-radius: 18px;

  &:hover {
    transform: rotate(2deg);
    transition: 0.4s ease;
  }
`;

const Nameplayer = styled.h3`
  font-size: 1.5rem;

  box-shadow: inset 0 0 0 0 #54b3d6;
  color: #54b3d6;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
  transition: color 0.3s ease-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 200px 0 0 0 #54b3d6;
    color: white;
  }
`;
const Descriptonplayer = styled.p`
  font-size: 0.8rem;
  padding: 10px;
  width: 45vw;
  border: 1px solid gray;
  border-radius: 80px;
  padding: 25px;
`;

const Favorit = styled.button`
  align-self: center;
  margin-bottom: 10px;

  &:hover {
    transform: scale(0.9);
    transition: 0.3s ease-out;
  }
`;

function Player({ playerName, playerImage, playerDescription, isFavorit }) {
  const [isFavorite, setisFavorite] = useState({ isFavorit });

  const handleClickFavorite = () => {
    setisFavorite(!isFavorite);
  };

  return (
    <Playercontainer>
      <Pictures src={playerImage} alt={playerImage}></Pictures>
      <Nameplayer>{playerName}</Nameplayer>
      <Descriptonplayer>{playerDescription}</Descriptonplayer>
      <Favorit
        id="favorite"
        onClick={() => handleClickFavorite()}
        className={isFavorite ? "isFavorite" : "notFavorite"}
      />
    </Playercontainer>
  );
}

Player.prototypes = {
  playList: PropTypes.shape({
    playerName: PropTypes.string.isRequired,
    playerDescription: PropTypes.string.isRequired,
    playerImage: PropTypes.string.isRequired,
    isFavorit: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Player;
