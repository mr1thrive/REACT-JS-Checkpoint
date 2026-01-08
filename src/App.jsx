// App.jsx
import React from "react";
import { Container, Navbar, Nav, Card, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// Replace this with your desired background image URL
const backgroundImageUrl = "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1470&q=80";

function App() {
  // Style for the main div with background image
  const appStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    paddingTop: "20px",
    paddingBottom: "20px"
  };

  // Overlay style to make content readable
  const overlayStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: "20px",
    borderRadius: "10px"
  };

  return (
    <>
      {/* React Fragment */}
      <div className="App" style={appStyle}>
        <Container style={overlayStyle}>
          {/* Navbar */}
          <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 rounded">
            <Container>
              <Navbar.Brand href="#home">My React-Bootstrap App</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Heading */}
          <Container className="mb-4 text-center">
            <h1>Welcome to My App</h1>
          </Container>

          {/* Cards */}
          <Container>
            <Row>
              <Col md={4} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Text>
                      This is the first card. React-Bootstrap makes it easy to create cards.
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Card 2</Card.Title>
                    <Card.Text>
                      This is the second card. You can put any content here.
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>Card 3</Card.Title>
                    <Card.Text>
                      This is the third card. Cards are flexible and responsive.
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

export default App;
