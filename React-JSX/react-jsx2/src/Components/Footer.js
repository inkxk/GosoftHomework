import React from 'react'
import styled from "styled-components";

function Footer() {

    const Footer = styled.div`
        flex-shrink: 0;
        text-align: center;
        background-color: #212529;
        padding-top: 20px;
    `;

    const Copyright = styled.p`
        color: white;
        padding: 20px 0px 0px 0px;
        font-size: 0.85rem;
    `;

    const Link = styled.a`
        color: #F2789F;
        margin: 10px 8px;
        text-decoration: none;

        &:hover {
            color: #F999B7;
          }
    `

    return (
        <Footer>
            <Link href="#">LinkedIn</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Github</Link>
            <Copyright>© 2021 Potcharapol Nokyoo</Copyright>
        </Footer>
    )
}

export default Footer
