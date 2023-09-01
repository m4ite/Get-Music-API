import { useState } from "react";
import axios from 'axios';
import { Button, Form, Container } from 'react-bootstrap';
 


export default function AddPage() {
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [gravadora, setGravadora] = useState('')
    const [ano, setAno] = useState('')

     const  handleSubmit = async(e) => {
        e.preventDefault()
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            titulo: titulo,
            autor: autor,
            gravadora: gravadora,
            ano: ano
        })

        console.log(res)
        if(res.status == 201)
            alert("inserido com sucesso")
    }


    return (
        <>
            <Container fluid="md">
                <h1>Adiconar uma música</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 w-25">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" placeholder="Music Title" onChange={(e) => setTitulo(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 w-25">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control type="text" placeholder="Autor" onChange={(e) => setAutor(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 w-25">
                        <Form.Label>Gravadora</Form.Label>
                        <Form.Control type="text" placeholder="Record" onChange={(e) => setGravadora(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 w-25">
                        <Form.Label>Ano Lançamento</Form.Label>
                        <Form.Control type="date" placeholder="Release Year" onChange={(e) => setAno(e.target.value)} />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )

}