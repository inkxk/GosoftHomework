import React from 'react'
import { Card } from 'react-bootstrap';
import picture from '../Assets/S__44351491.jpg';

function PictureCard() {
    return (
        <Card style={{ width: '18rem', marginRight: '30px' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>Potcharapol Nokyoo</Card.Title>
                <Card.Text>14 December 2021</Card.Text>
                <Card.Text>467 Likes 21 Comments</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PictureCard
