import React, { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

// instead of function use this syntax way, in line 5
export const Signup = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await addUser({
        variables: { ...userData }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

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
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name='username' value={userData.username} onChange={handleChange} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' value={userData.email} onChange={handleChange} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' value={userData.password} onChange={handleChange} />
                      </Form.Group>
                      {/* <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                          >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                          </Form.Group> */}

                      <div className="d-grid">
                        <Button variant="primary" type="submit" >
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
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