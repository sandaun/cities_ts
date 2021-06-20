import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

import API from "./lib/api-service";
import { CustomModal } from "./components/Modal";
import { CityCard } from "./components/CityCard";
import styles from "./App.module.css";

function App() {
  const [locations, setLocations] = useState([]);
  const [show, setShow] = useState(false);
  const [updateList, setUpdateList] = useState(false);
  const [currentCity, setCurrentCity] = useState(null);

  useEffect(() => {
    getLocations();
    return () => {
      setUpdateList(false);
    };
  }, [updateList]);

  const getLocations = async () => {
    const data = await API.list();
    setLocations(data);
  };

  const handleCloseModal = () => {
    setShow(false);
    setCurrentCity(null);
  };

  const handleShowModal = () => setShow(true);

  const deleteCity = async (id) => {
    await API.remove(id);
    setUpdateList(true);
  };

  return (
    <Container fluid className={styles.container}>
      <Row
        style={{ backgroundColor: "orange", paddingBottom: 10, paddingTop: 10 }}
      >
        <Col style={{ backgroundColor: "gray" }}>
          This should be the title centered
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: "lightblue" }}>
          <Button onClick={handleShowModal}>Add City</Button>
        </Col>
      </Row>
      <Row
        className="d-flex justify-content-start w-75 align-self-center"
        style={{ backgroundColor: "green" }}
      >
        {locations.map((location, index) => (
          <CityCard
            location={location}
            index={index}
            deleteCity={deleteCity}
            handleShowModal={handleShowModal}
            setCurrentCity={setCurrentCity}
          />
        ))}
      </Row>
      <CustomModal
        show={show}
        handleClose={handleCloseModal}
        setUpdateList={setUpdateList}
        currentCity={currentCity}
      />
    </Container>
  );
}

export default App;
