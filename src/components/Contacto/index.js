import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { useContext,useEffect,useState } from 'react'
import Context from "../../context"

export default () => {

    const [data,setData] = useState([])
    const {characters,setCharacters} = useContext(Context)
    
    useEffect(() => {
        setData(characters.filter(val => val.favorito === true))
    },[])

    return (
        <div className='home-class'>
            <Container>
                <Row className='align-items-center'>
                        {data ? data.map(val => 
                            <Col lg={4} md={12} className='my-4'>
                                <Card>
                                    <Card.Img variant="top" src={val.url} />
                                    <Card.Body>
                                        <Card.Title>{val.name}</Card.Title>
                                        <Card.Text>
                                        <p>Nacimiento: {val.birth_year}</p>
                                        <p>status: {val.status}</p>
                                        </Card.Text>
                                        <Button className="favorite-button">Favorito</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ) : <p>loading...</p>}
                </Row>
            </Container>
        </div>
    )
}