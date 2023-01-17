import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage"

export default function App() {
  return (
    
    <main className="App">
      <link rel="stylesheet" href="./public/styles.css" />
      <Navbar />

      <Homepage />
      
    </main>
   
 
    
  );
}
