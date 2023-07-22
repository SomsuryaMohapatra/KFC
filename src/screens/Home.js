import React from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "./Carousel";

export default function Home() {
  return (
    <div>
      <div>
        <Carousel/>
      </div>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
