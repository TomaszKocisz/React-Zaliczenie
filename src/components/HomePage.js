import React from "react";
import Title from "./Title";
import Category from "./Category";
import Recommended from "./Recommended";
import Container from "./Container";

const HomePage = () => (
  <Container>
    <Title text="Welcome to our store" />

    <Category text="Desktops" />
    <Recommended category={"desktop"} />

    <Category text="Tablets" />
    <Recommended category={"tablet"} />
  </Container>
);

export default HomePage;
