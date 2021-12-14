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
          <PictureCard />
          <PictureCard />
          <PictureCard />
          <PictureCard />
        </RowCard>
        <RowCard>
          <PictureCard />
          <PictureCard />
          <PictureCard />
          <PictureCard />
        </RowCard>
      </Content>
      <Footer />
    </Wrapper>
  );
}

export default Home;
