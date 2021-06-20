import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const CustomForm = (props) => {
  const { handleSubmit, currentCity } = props;
  return (
    <Form onSubmit={handleSubmit} id="city-form">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter City Name"
          defaultValue={currentCity ? currentCity.title : null}
        />
        <Form.Text style={{ color: "red" }}>*Required field</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter City Description"
          defaultValue={currentCity ? currentCity.content : null}
        />
        <Form.Text style={{ color: "red" }}>*Required field</Form.Text>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="longitude">
          <Form.Label>Coordinates Longitude</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter longitude"
            defaultValue={currentCity ? currentCity.long : null}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="latitude">
          <Form.Label>Coordinates Longitude</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter latitude"
            defaultValue={currentCity ? currentCity.lat : null}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter URL"
          defaultValue={currentCity ? currentCity.image_url : null}
        />
      </Form.Group>
    </Form>
  );
};

export { CustomForm };
