import Player from "./Player";
import styled from "styled-components";

function PlayerList({ playList }) {
  // console.log(playList);
  return (
    <div>
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
    </div>
  );
}

export default PlayerList;
