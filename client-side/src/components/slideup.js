import { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import 'react-spring-bottom-sheet/dist/style.css'

export default function SlideUp() {
  const [open, setOpen] = useState(true);

  // Define your popHeight
  const popHeight = 670; // Adjust the pop height as needed

  return (
    <>
      <BottomSheet className='slideup'
      blocking = {false}
        open={open}
        header={
          <div className="sheetHeader">SHEET HEADER
            <Container className="mt-5">
              <Row>
                <Col sm={4}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button>
                      Search
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        }
        snapPoints={({ maxHeight }) => {
          return [maxHeight - popHeight, maxHeight - 200];
        }}
      >
        <div className="sheetBody">SHEET BODY</div>
      </BottomSheet>
    </>
  );
}






  // if setting up the CSS is tricky, you can add this to your page somewhere:
// <link rel="stylesheet" href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css" crossorigin="anonymous">