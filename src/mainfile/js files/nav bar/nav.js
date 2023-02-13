import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './nav.css'
import Carts from '../cart/cart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import {useHistory} from 'react-router-dom'
import Profile from '../profile/profile';

function NavScrollExample() {
  const history =useHistory()
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  

  function searchLogic(e)
{
    if(e == "mens")
{
  history.push("/items?q=mens")
 
}
else if(e == "womens")
{
  history.push("/items?q=womens")
  
}
else if(e == "kids")
{
  history.push("/items?q=kids")
  
}
else if(encodeURI == "electronics")
{
  history.push("/items?q=electronics")
  
}
}
  return (
    
    <Router>
    <Navbar  expand="lg" className='nav-main ' >
      <Container fluid>
        <Navbar.Brand >E-com</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-light"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Form className="d-flex .text-light ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-box"
              aria-label="Search"
              onChange={(e) => {
                searchLogic(e.target.value)
                 
            }}
            />
            <Button  className='search-button' onClick={searchLogic}>Search</Button>
          </Form>
          <div className='nav-icons'>
          <Nav.Link className='homename'><Link to='/home'> <HomeIcon fontSize="large" color="action" /> </Link> </Nav.Link>
            <Nav.Link className='ms-3' ><Link to='/carts'> <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton></Link></Nav.Link>
    <Nav.Link className='mt-1 ps-2'>
                            <Profile/>
                        </Nav.Link>
                        </div>
            
   
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar></Router>
  );
}

export default NavScrollExample;