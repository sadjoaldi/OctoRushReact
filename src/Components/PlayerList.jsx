import Player from "./Player";
import styled from "styled-components";

const Cardgap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

function PlayerList({ playList }) {
  return (
    <Cardgap>
      {playList.map((joueur) => (
        <Player
          key={joueur.playerName}
          playerName={joueur.playerName}
          playerNumber={joueur.playerNumber}
          playerImage={joueur.playerImage}
          playerDescription={joueur.playerDescription}
          playerClub={joueur.playerClub}
          isFavorit={joueur.isFavorite}
        />
      ))}
    </Cardgap>
  );
}

export default PlayerList;
