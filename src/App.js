import React from 'react';


import {Navbar, Nav} from "react-bootstrap";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"
import './App.css';
import { MyIdeas } from './components/MyIdeas';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar bg="light" expand="lg" className="header">
  <Navbar.Brand href="/home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/myIdeas">My ideas</Nav.Link> 
     
 
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
<Switch>
  <Route component={MyIdeas} path="/myIdeas"></Route>
  
  <Redirect from="/" to="/myIdeas"></Redirect>
</Switch>
    </BrowserRouter>
    </>
  );
  
}


export default App;
