import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
    name: "",
    email: "",
    role: ""
  }]);

  const addTeamMember = newTeamMember => {
    setTeamMember([...teamMember, newTeamMember]);
  };

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
