import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { useContext } from 'react'
import Context from '../../context'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

export default () => {

    const {characters,setCharacters} = useContext(Context)

    const navigate = useNavigate();

    const handleClick = (id) => {
        const character = characters.map((pepito) => {
            if (pepito.id === id){
                return {...pepito,favorito:true}
            }
            return pepito
        })
        setCharacters(character)
    }

    const goToCharacter = (id) =>{
        navigate(`/personaje/${id}`)
    } 

    const handleSelect = (e) =>{
        goToCharacter(e.target.value)
    }

    return (
        <div className='home-class'>
            <Container>
                <Form.Select onChange={handleSelect} className='my-1' aria-label="Default select example">
                    <option>selecciona el personaje</option>
                    {characters ? characters.map(character => <option value={character.id}>{character.name}</option>) : "loading"}
                </Form.Select>
                <Row className='align-items-center'>
                    {characters ? characters.map(character => 
                    <Col lg={4} md={12} className='my-4'>
                        <Card>
                            <Card.Img variant="top" src={character.url} />
                            <Card.Body>
                                <Card.Title>{character.name}</Card.Title>
                                <hr/>
                                <Card.Text>
                                <p>Nacimiento: {character.birth_year}</p>
                                <p>status: {character.status}</p>
                                </Card.Text>
                                <hr/>
                                <div className='card-button'>
                                    <Button className="favorite-button" onClick={() => handleClick(character.id)}>Favorito</Button>
                                    <Button className="detail-button" onClick={() => goToCharacter(character.id)}>ver detalle</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    ) : <p>loading...</p>}
                </Row>
            </Container>
        </div>
    )
}