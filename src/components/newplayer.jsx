//create the form
//Draft a Player:
//Name, Breed, Status(DD Field/Bench), Image URL
//Sends data to API to render within "All Players"

import React, { useState } from "react";
import { Button } from "react-bootstrap";

{/* Form is a REACT component that thats two props, 'players and
    'setPlayers'. This is using the useState HOOK to manage its local state.
    the state variable 'formInfo' holds the properties of the form.
*/}

const Form = ({ players, setPlayers }) => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
  });

{/* the function of handleChange takes in an event object of 'e' as its
    parameter, this function will be called whenever there is a change
    to my form.

    e.target refers to the element that triggered the event
    (the input info being changed this time)

    setFormInfo, is the function used to update the state
*/}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((formInfo) => ({
      ...formInfo,
      [name]: value,
    }));
  };

{/* The const handleSubmit function handles form submission by sending form data to a server, 
processing the server's response, updating state accordingly, 
and handling any errors that may occur. */}


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formInfo),
        }
      );
      if (response.ok) {
        const result = await response.json(); 
        if (result.data && result.data.newPlayer) {
          setPlayers(prevPlayers => [...prevPlayers, result.data.newPlayer]);
        }
        setFormInfo({
          name: "",
          breed: "",
          status: "",
          imageUrl: "",
        });
      }
    } catch(error) {
      console.error("Error Creating Player", error);
    }
  };

  return (
    <div className="p-3 mb-2 bg-info text-black">
    <div className="formTest">
      <h3>Draft A Player:</h3>
      <form onSubmit={handleSubmit} className="row g-3 align-items-end">
        <div className="col-md">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formInfo.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md">
          <label htmlFor="breed">Breed:</label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={formInfo.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md">
        <div>
            <label htmlFor="status">Status:</label>
          </div>
          <select
            id="status"
            name="status"
            value={formInfo.status}
            onChange={handleChange}
            required
          >
            <option value=""></option>
            <option value="field">Field</option>
            <option value="bench">Bench</option>
          </select>
        </div>
        <div className="col-md">
          <label htmlFor="imageUrl">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formInfo.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md align-self-end">
          <Button type="submit" variant="light" size="sm">Draft New Player</Button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default Form;


