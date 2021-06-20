import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import API from "./lib/api-service";
import { FormModal } from "./components/FormModal";
import { CityModal } from "./components/CityModal";
import { CityCard } from "./components/CityCard";
import styles from "./App.module.css";

function App() {
  const [locations, setLocations] = useState([]);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showCity, setShowCity] = useState(false);
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

  const handleCloseFormModal = () => {
    setShowFormModal(false);
    setCurrentCity(null);
  };

  const handleShowFormModal = () => setShowFormModal(true);

  const handleShowCityModal = () => setShowCity(true);
  const handleCloseCityModal = () => setShowCity(false);

  const deleteCity = async (id) => {
    await API.remove(id);
    setUpdateList(true);
  };

  return (
    <Container fluid className={styles.container}>
      <Row style={{ paddingBottom: 10, paddingTop: 10 }}>
        <Col className={["d-flex justify-content-center w-100", styles.title]}>
          Check and Add new cities!
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center w-100">
          <Button variant="primary" onClick={handleShowFormModal}>
            Add New City
          </Button>
        </Col>
      </Row>
      <Row className="d-flex justify-content-start w-75 align-self-center">
        {locations.map((location, index) => (
          <CityCard
            location={location}
            key={index}
            deleteCity={deleteCity}
            handleShowFormModal={handleShowFormModal}
            handleShowCityModal={handleShowCityModal}
            setCurrentCity={setCurrentCity}
          />
        ))}
      </Row>
      <FormModal
        showFormModal={showFormModal}
        handleClose={handleCloseFormModal}
        setUpdateList={setUpdateList}
        currentCity={currentCity}
      />
      <CityModal
        showCity={showCity}
        handleClose={handleCloseCityModal}
        currentCity={currentCity}
      />
    </Container>
  );
}

export default App;
