import React from "react";
import styled from "styled-components";
import HeaderNavbar from "./Components/HeaderNavbar";
import Footer from "./Components/Footer";
import PictureCard from "./Components/PictureCard";

function Home() {
  const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `;

  const Content = styled.div`
    flex: 1 1 0%;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
  `;

  const RowCard = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 30px;
  `;

  return (
    <Wrapper>
      <HeaderNavbar />
      <Content>
        <RowCard>
          <PictureCard 
            id={1}
            imgSrc="https://picsum.photos/1000"
            createdBy="Potcharapol Nokyoo"
            date="21 Dec 2021"
            likeCount={467}
            commentCount={21}
          />
          <PictureCard 
            id={2}
            imgSrc="https://picsum.photos/1000?grayscale"
            createdBy="Sawada Tsunayoshi"
            date="28 Aug 2021"
            likeCount={289}
            commentCount={8}
          />
          <PictureCard 
            id={3}
            imgSrc="https://picsum.photos/seed/picsum/1000"
            createdBy="serizawa tamao"
            date="7 April 2021"
            likeCount={981}
            commentCount={128}
          />
          <PictureCard 
            id={4}
            imgSrc="https://picsum.photos/1050"
            createdBy="Yoh Asakura"
            date="16 March 1963"
            likeCount={165}
            commentCount={4}
          />
        </RowCard>
        <RowCard>
          <PictureCard 
              id={5}
              imgSrc="https://picsum.photos/950"
              createdBy="Nobita Nobi"
              date="19 June 2021"
              likeCount={1052}
              commentCount={52}
            />
            <PictureCard 
              id={6}
              imgSrc="https://picsum.photos/900"
              createdBy="Vash the Stampede"
              date="29 July 2021"
              likeCount={631}
              commentCount={2}
            />
            <PictureCard 
              id={7}
              imgSrc="https://picsum.photos/800"
              createdBy="Ichigo Kurosaki"
              date="9 Dec 2015"
              likeCount={256}
              commentCount={51}
            />
            <PictureCard 
              id={8}
              imgSrc="https://picsum.photos/1000/?blur=2"
              createdBy="Death the Kid"
              date="31 Jan 1998"
              likeCount={637}
              commentCount={32}
            />
        </RowCard>
      </Content>
      <Footer />
    </Wrapper>
  );
}

export default Home;
