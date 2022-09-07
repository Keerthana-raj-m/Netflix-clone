import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import requests from "./Request";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetFlixOriginals}
        isLargeRow
        key='1'
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTreding} key='2'/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}key='3'/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} key='4' />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} key='5'/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} key='6'/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} key='7' />
    </div>
  );
}

export default HomeScreen;
