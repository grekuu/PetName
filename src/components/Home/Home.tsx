import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './home.scss';

import jsonData from '../../common/data.json';

const Home = () => {
  const [randomNames, setRandomNames] = useState<string[]>([]);
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  useEffect(() => {
    setRandomNames(jsonData.names);
    selectRandomNames();
  }, []);

  const selectRandomNames = () => {
    const numNamesToSelect = 5;
    const shuffledNames = [...randomNames].sort(() => 0.5 - Math.random());
    const selectedNames = shuffledNames.slice(0, numNamesToSelect);
    setSelectedNames(selectedNames);
  };

  useEffect(() => {
    if (randomNames.length > 0) {
      selectRandomNames();
    }
  }, [randomNames]);

  return (
    <Container className="home-container">
      <h1>IMIONA DLA ZWIERZAKÓW</h1>
      <ul className="name-list">
        {selectedNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <Button variant="primary" className="generate-btn" onClick={selectRandomNames}>
        Losuj
      </Button>
    </Container>
  );
};

export default Home;
