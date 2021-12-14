import React from 'react';
import styled from "styled-components";

function RandomBox() {

    // Get Color
    const colorArray = ['red', 'blue', 'green', 'purple', 'pink'];
    var colorNumber = Math.floor(Math.random() * 5);
    const color = colorArray[colorNumber];

    // Get Font Size
    const fontSize = 40 - Math.floor(Math.random() * 21);

    // Styled Components
    const Container = styled.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    `;

    const RandomBox = styled.div`
        padding: 10px;
        margin: auto;
        height: 300px;
        width: 300px;
        background-color: ${props => props.inputColor}
    `;

    const Text = styled.h1`
        font-size: ${props => props.fontSize}px;
        color: white;
        text-align: center;
        height: 250px;
        line-height: 250px;
    `;

    return (
        <Container>
            <RandomBox inputColor={color}>
                <Text fontSize={fontSize}>Random Box</Text>
            </RandomBox>
        </Container>
    );
}

export default RandomBox;
