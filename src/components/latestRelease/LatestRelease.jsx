import React, { useState, useEffect, useContext } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SingleBook from '../card/SingleBook';
import { nanoid } from 'nanoid';
import { Input } from '../../contexts/InputContext';

export default function LatestRelease({ fantasyBooks }) {
    const { query } = useContext(Input);
    const [books, setBooks] = useState(fantasyBooks);

    const searchTitles = () => {
        const titles = fantasyBooks.filter(book => (
            book.title.toLowerCase().includes(query.toLowerCase())
        ))

        setBooks(titles);
    }

    useEffect(() => {
        searchTitles();
    }, [query])

    return (
        <Container>
            <Row>
                <Col className="d-flex flex-wrap gap-4">
                    {books.map(book => (
                        <SingleBook key={nanoid()}
                            asin={book.asin}
                            img={book.img}
                            title={book.title}
                            category={book.category}
                            price={book.price}
                            btn="Recensioni"
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}
