import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Members from './components/Members';
import Form from './components/Form';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
    id: Date.now(),
    name: "",
    email: "",
    role: ""
  }]);

  const addTeamMember = newTeamMember => {
    setTeamMember([...teamMember, newTeamMember]);
  };

  return (
    <div className="App">
      <h1>New Team Member Sign Up</h1>
      <Form newTeamMember = {addTeamMember}/>
      <Members />
    </div>
  );
}

export default App;
