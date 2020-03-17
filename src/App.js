import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
    name: "Paul",
    email: "paul96@hotmail.com",
    role: "team member"
  }]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
