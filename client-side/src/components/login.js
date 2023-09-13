// import React from 'react';
// import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
// import logo from '../assets/img/Retro.png';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// // instead of function use this syntax way, in line 5
// export const Login = () =>{


//     return (
//         <div>
//           <Container>
//             <Row className="vh-100 d-flex justify-content-center align-items-center">
//               <Col md={8} lg={6} xs={12}>
//                 <Card className="px-4">
//                   <Card.Body>
//                     <div className="mb-3 mt-md-4">
//                       <h2 className="fw-bold mb-2 text-center text-uppercase ">
//                         <img src={logo} alt="Logo"/>
//                       </h2>
//                       <div className="mb-3">
//                         <Form>
//                           <Form.Group className="mb-3" controlId="Name">
//                             <Form.Label className="text-center">User Name</Form.Label>
//                             <Form.Control type="text" placeholder="Enter User Name" />
//                           </Form.Group>
    
//                           <Form.Group
//                             className="mb-3"
//                             controlId="formBasicPassword"
//                           >
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type="password" placeholder="Password" />
//                           </Form.Group>


//                           <Form.Group
//                             className="mb-3"
//                             controlId="formBasicCheckbox"
//                           ></Form.Group>
//                           <div className="d-grid">
//                             <Button variant="primary" type="submit">
//                               Login
//                             </Button>
//                           </div>
//                         </Form>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       );
//     }



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
