import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

// instead of function use this syntax way, in line 5
export const Login = () =>{
    return (
        <div>
          <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
              <Col md={8} lg={6} xs={12}>
                <Card className="px-4">
                  <Card.Body>
                    <div className="mb-3 mt-md-4">
                      <h2 className="fw-bold mb-2 text-center text-uppercase ">
                        Logo
                      </h2>
                      <div className="mb-3">
                        <Form>
                          <Form.Group className="mb-3" controlId="Name">
                            <Form.Label className="text-center">User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter User Name" />
                          </Form.Group>
    
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                          </Form.Group>


                          <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                          ></Form.Group>
                          <div className="d-grid">
                            <Button variant="primary" type="submit">
                              Login
                            </Button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }