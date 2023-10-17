import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";

const Playercontainer = styled.div`
  width: 50%;
  margin: 0 auto;
  border-radius: 8px;
  background: transparent;
`;

const Pictures = styled.img`
  width: 60%;
  height: auto;

  &:hover {
  }
`;

const Nameplayer = styled.h3`
  font-size: 1.5rem;
`;
const Descriptonplayer = styled.p`
  font-size: 0.8rem;
`;

const Favorit = styled.button``;

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
