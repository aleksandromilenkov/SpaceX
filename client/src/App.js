import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';
import logo from './logo.png';

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache()
})
function App() {
  return (
    <ApolloProvider client={client}>
    
    <div className="container">
      <img src={logo} alt="SpaceX" style={{width:300, display: "block", margin:"auto"}} />
      <Router>
      <Routes>
       <Route exact path="/" element={<Launches />} />
       <Route exact path="/launch/:id" element={<Launch/>} />
       </Routes>
       </Router>
    </div>
    
    </ApolloProvider>
  );
}

export default App;
