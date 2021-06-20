import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

import styles from "../App.module.css";

const CityCard = (props) => {
  const {
    location,
    index,
    deleteCity,
    handleShowFormModal,
    setCurrentCity,
    handleShowCityModal,
  } = props;

  const onDelete = () => {
    deleteCity(location.id);
  };

  const onEdit = () => {
    setCurrentCity(location);
    handleShowFormModal(true);
  };

  const onDetails = () => {
    handleShowCityModal(true);
    setCurrentCity(location);
  };

  return (
    <Card
      style={{ width: "25em", height: "27em" }}
      className="mt-3 mb-3 mr-5"
      key={index}
    >
      <Card.Img
        variant="top"
        src={location.image_url}
        style={{ height: 220 }}
      />
      <Card.Body>
        <Card.Title>{location.title}</Card.Title>
        <Card.Text className={styles.multiline}>{location.content}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <Button
          variant="outline-primary"
          className="align-self-end"
          onClick={onDetails}
        >
          Show details
        </Button>
        <Button
          variant="outline-secondary"
          className="align-self-end"
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button variant="danger" className="align-self-end" onClick={onDelete}>
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
};

export { CityCard };
