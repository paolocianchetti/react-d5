import React, { useState, useContext } from 'react';
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import { nanoid } from 'nanoid';
import { Input } from '../../contexts/InputContext';

export default function MyNav({ links }) {
    const [inputString, setInputString] = useState('');
    const { query, setQuery } = useContext(Input);
    
    console.log('Query inside MyNav: ', query);

    const handleSearch = (event) => {
        event.preventDefault();
        setQuery(inputString);
    }

    const handleInputChange = (event) => {
        const { value } = event.target;
        setInputString(value);
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">EpiBooks!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {links.map(link => (
                            <Nav.Link
                                key={nanoid()}
                                href={link.url}
                            >
                                {link.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>

                <Form className="d-flex justify-content-between" onSubmit={handleSearch}>
                    <Form.Control className='mx-2'
                        type="text"
                        name="searchValue"
                        placeholder="inserisci titolo"
                        value={inputString}
                        onChange={handleInputChange}
                    />
                    <Button variant="outline-success" type="submit">
                        Cerca
                    </Button>
                </Form>
            </Container>
        </Navbar>
    );
}