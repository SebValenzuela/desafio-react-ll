import {Container, Nav , Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export default () => {
    const setActiveClass = ({isActive}) => (isActive ? "active ms-3 text-decoration-none": "ms-3 text-primary text-decoration-none")
    return (
        <>
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand>ReactRouter</Navbar.Brand>
                <Nav className='me-auto'>
                    <NavLink className={setActiveClass} to="/">Home</NavLink>
                    <NavLink className={setActiveClass} to="/form">Form</NavLink>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}