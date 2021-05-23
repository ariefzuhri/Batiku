import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Logout from './pages/Logout'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Delete from './pages/Delete'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

// Buat ambil token setelah login => localStorage.getItem('token')

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Batiku</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href='/login'>Login</Nav.Link>
              <Nav.Link href='/register'>Register</Nav.Link>
              <Nav.Link href='/logout'>Logout</Nav.Link>
              <Nav.Link href='/add'>Tambah</Nav.Link>
              <Link className="nav-link" to={{pathname: '/edit', state: 17}}>Edit</Link>
              <Link className="nav-link" to={{pathname: '/edit', state: 17}}>Hapus</Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <Route path="/add" component={Add} />
        <Route path="/edit" component={Edit} />
        <Route path="/delete" component={Delete} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;