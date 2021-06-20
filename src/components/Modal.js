import React from "react";
import { Button, Modal } from "react-bootstrap";
import API from "../lib/api-service";

import { CustomForm } from "./Form";

function CustomModal(props) {
  const { show, handleClose, setUpdateList, currentCity } = props;

  const onApiSend = async (data) => {
    if (currentCity) {
      data.id = currentCity.id;
      await API.update(data);
    } else {
      await API.create(data);
    }
    setUpdateList(true);
    // handleClose(); // ENABLE!!!!!
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, description, longitude, latitude, image } = event.target;
    const formData = {
      name: name.value,
      description: description.value,
      longitude: longitude.value,
      latitude: latitude.value,
      image: image.value,
    };
    onApiSend(formData);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New City</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CustomForm handleSubmit={handleSubmit} currentCity={currentCity} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="outline-primary" form="city-form" type="submit">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { CustomModal };
