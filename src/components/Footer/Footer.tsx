import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Navbar fixed="bottom" expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Text className="copyright-text">
          Copyright © {currentYear} <a href="https://www.imiedlazwierzaka.org">ImieDlaZwierzaka.org</a>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
