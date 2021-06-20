import React from "react";
import { Button, Modal, Image } from "react-bootstrap";

function CityModal(props) {
  const { showCity, handleClose, currentCity } = props;
  const { title, content, lat, long, image_url } = currentCity || {};

  return (
    <Modal show={showCity} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title} City Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className={"d-flex justify-content-center w-100 flex-column"}>
        <Image src={image_url} fluid />
        <div className="mt-3">
          <p>{content}</p>
          <p>Latitude: {lat ? lat : "Not Available"}</p>
          <p>Longitude: {long ? long : "Not Available"}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { CityModal };
