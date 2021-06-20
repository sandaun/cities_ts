import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

import styles from "../App.module.css";

const CityCard = (props) => {
  const {
    location,
    deleteCity,
    handleShowFormModal,
    setCurrentCity,
    handleShowCityModal,
  } = props;

  const { title, content, image_url } = location;

  const [isImageError, setIsImageError] = useState(false);

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

  const handleImageError = (e) => {
    if (e) {
      setIsImageError(true);
    } else {
      setIsImageError(false);
    }
  };

  return (
    <Card style={{ width: "25em", height: "27em" }} className="mt-3 mb-3 mr-5">
      <Card.Img
        variant="top"
        src={isImageError ? "/images/defaultCity.jpg" : image_url}
        style={{ height: 220 }}
        onError={(e) => handleImageError(e)}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.multiline}>{content}</Card.Text>
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
