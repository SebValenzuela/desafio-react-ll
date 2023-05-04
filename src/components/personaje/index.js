import { useEffect,useState } from "react";
import {Row, Col, Button, Container} from "react-bootstrap"
import { useParams } from "react-router-dom";
import { useContext } from 'react'
import Context from '../../context'
import { useNavigate } from 'react-router-dom'

export default () => {

    const navigate = useNavigate();

    const { id } = useParams()

    const [character,setCharacter] = useState({})
    const {characters, setCharacters} = useContext(Context)

    useEffect(() => {
        /*fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => setCharacter(data))*/

        let character = characters.find(val => val.id == id)
        setCharacter(character)
    },[])

    return (
    <>
    <Container>
    {character ?  
        <Row className="personaje">
            <Col className="d-flex justify-content-center my-2"><img src={character.url}></img></Col>
            <Col className="card-body my-5">
                <h1>{character.name}</h1>
                <ul>
                    <li>Nacimiento: {character.birth_year}</li>
                    <li>status: {character.status}</li>
                </ul>
                <Button className="return-button" onClick={() => navigate("/")}>volver al home</Button>
            </Col>
        </Row> :
        "loading"
        }
    </Container>
    </>
    )
}