//renders the single player when see details is clicked
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";



const SinglePlayer = () => {
  const [player, setPlayer] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

{/*The useEffect hook fetches player data from the server when the component 
mounts or when the id variable changes. 
It updates the component state with the fetched player data 
and handles any errors that occur during the process. 

NOTE: The useEffect hook depends on the [id] variable. 
This means that the effect will re-run whenever the id variable changes. 
This is useful for fetching data based on dynamic parameters like an ID.
*/}


  useEffect(() => {
    async function getPlayers() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players/${id}`
        );
        if (!response.ok) {
          throw new Error("Player Does Not Exist");
        }
        const data = await response.json();
        setPlayer(data.data.player);
      } catch (error) {
        setError(error.message);
      }
    }
    getPlayers();
  }, [id]);

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : player ? (
        <div className="container">
        <div className="row justify-content-center">
        <Card style={{ width: '50rem' }}>
          <div>Name: {player.name}</div>
          <h5>Breed: {player.breed}</h5>
          <h5>Status: {player.status}</h5>
          <h5>ID: {player.id}</h5>
          <h5>Team ID: {player.teamId}</h5>
          <img src={player.imageUrl} alt={player.name} />
          <Button
                    type="submit"
                    className="player"
                    onClick={() => navigate(`/allplayers`)}
                  >
                    Back To All Players
                    </Button>
        </Card>
        </div>
        </div>
      ) : (
        <h1>Rendering...</h1>
      )}
    </>
  );
};
export default SinglePlayer;
