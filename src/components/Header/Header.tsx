import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LuCat } from 'react-icons/lu';
import './header.scss';

const Header = () => {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="brand-container">
          <LuCat className="brand-logo" /> <span className="brand-name">IMIEDLAZWIERZAKA</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
