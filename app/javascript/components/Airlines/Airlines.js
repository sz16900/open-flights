import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Airline from './Airline';
import styled from 'styled-components';

const Home = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`;

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);
  useEffect(() => {
    axios
      .get('/api/v1/airlines.json')
      .then((resp) => setAirlines(resp.data.data))
      .catch((err) => console.log(err));
  }, [airlines.length]);

  const grid = airlines.map((item) => {
    return (
      <Airline
        key={item.attributes.name}
        attributes={item.attributes}
      ></Airline>
    );
  });

  return (
    <Home>
      {/* <Header /> */}
      <Grid>{grid}</Grid>
    </Home>
  );
};

export default Airlines;
