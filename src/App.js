import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-JWT Login</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href='/login'>Login</Nav.Link>
              <Nav.Link href='/register'>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;