import {useState, useEffect} from "react";
import{Navbar, Nav, Container} from "react-bootstrap";
import logo from '../assets/img/LOGObackGround.jpg';




export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    },[]);

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            {/* this is where a potential logo will go for future reference when we find something cool */}
            <img src={logo} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> 
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('register')}>Register</Nav.Link>
              <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('save new location')}>Save new location</Nav.Link>
              <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('login')}>Login</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <a href="#">
                <button className="vvd" onClick={()=> console.log('connect')}><span>Add new location</span></button>
                </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}