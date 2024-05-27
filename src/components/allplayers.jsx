import { useNavigate } from "react-router-dom";
import Form from "./newplayer";
import React, { useEffect, useState } from "react";
import SearchBar from "./searchbar";
import { useSelector } from "react-redux";
import { Card, Button, Col, Row } from "react-bootstrap";

function AllPlayers() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchTerm = useSelector((state) => state.searchTerm);
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function getPlayers() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players"
        );
        const data = await response.json();
        setPlayers(data.data.players);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getPlayers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players/${id}`,
        {
          method: "DELETE",
        }
      );
      setPlayers(players.filter((player) => player.id !== id));
    } catch (error) {
      console.error("Error Deleting Player", error);
    }
  };

  return (
    <>
      {loading ? (
        <h1>Rendering...</h1>
      ) : (
        <>
          <div className="row p-3 mb-2 bg-info text-black align-items-center">
          <div className="col d-flex justify-content-center">
              <SearchBar />
            </div>
            <div className="col">
              <Form players={players} setPlayers={setPlayers} />
            </div>
          </div>
          <Row xs={1} md={2} lg={3} xl={4} className="g-3">
            {filteredPlayers.map((player) => (
              <Col key={player.id} style={{ marginBottom: "3px" }}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={player.imageUrl}
                    alt={player.name}
                  />
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="text-center">
                      {player.name}
                    </Card.Title>
                    <div className="d-grid gap-2">
                      <Button
                        variant="info primary text-white"
                        onClick={() => navigate(`/player/${player.id}`)}
                      >
                        See Details
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(player.id)}
                      >
                        Delete Player
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}

export default AllPlayers;
