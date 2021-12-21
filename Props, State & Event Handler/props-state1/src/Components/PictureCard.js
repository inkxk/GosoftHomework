import React from 'react'
import { Card } from 'react-bootstrap';
import picture from '../Assets/S__44351491.jpg';

function PictureCard(props) {
    return (
        <Card style={{ width: '18rem', marginRight: '30px' }}>
            <Card.Img variant="top" src={props.imgSrc} />
            <Card.Body>
                <Card.Title>{props.createdBy}</Card.Title>
                <Card.Text>{props.date}</Card.Text>
                <Card.Text>{props.likeCount} Likes {props.commentCount} Comments</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PictureCard
