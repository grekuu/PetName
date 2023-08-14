import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './home.scss';

const Home = () => {
  return (
    <Container className="home-container">
      <h1>IMIONA DLA ZWIERZAKÓW</h1>
      <ul className="name-list">
        <li>cika</li>
        <li>daiusy</li>
        <li>hrthr</li>
        <li>hrthrt</li>
        <li>kuyt</li>
      </ul>
      <Button variant="primary" className="generate-btn">
        Losuj
      </Button>
    </Container>
  );
};

export default Home;
