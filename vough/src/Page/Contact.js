import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";

// Css
import "./Contact.css";

// Component
import UserInfo from "../Component/UserInfo.js";

// Api
import { fetchUsers } from "../api/api.js";

function Contact() {
  const [users, setUsers] = useState([]);
  const [usersResults, setUserResults] = useState([]);
  const [query, setQuery] = useState("");

  async function loadUsers() {
    const data = await fetchUsers();
    setUsers(data);
    setUserResults(data);
  }

  const handleSubmit = (e) => {
    testeFilter(query);
    e.preventDefault();
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const testeFilter = (palavraDigitada) => {
    const data = users.filter((user) => {
      const name = user.name.toLowerCase();
      if (name.indexOf(palavraDigitada.toLowerCase()) > -1) {
        return user;
      }
      return false;
    });
    setUserResults(data);
  };

  return (
    <div>
      <h2>Contatos</h2>
      <Grid container spacing={0}>
        <Grid item xs>
          <Item>
            <TextField
              size="small"
              value={query}
              type="text"
              placeholder="Digite neste campo"
              onChange={(e) => setQuery(e.target.value)}
              id="outlined-basic"
              label="Pesquisar"
              variant="outlined"
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs='auto'>
          <Item>
            <Button onClick={handleSubmit} variant="contained" >
              Buscar
            </Button>
          </Item>
        </Grid>
      </Grid>
      {usersResults &&
        usersResults.map((user) => (
          <UserInfo
            key={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
            phone={user.phone}
            website={user.website}
            id={user.id}
            company={user.company}
            address={user.address}
          />
        ))}
    </div>
  );
}

export default Contact;
