import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Search from "./cards";

const Movies = () => {
  const [user, setUser] = useState([]);

  const [searched, setSearched] = useState("");

  useEffect(() => {
    fetch("https://apigenerator.dronahq.com/api/HVEHzI06/data")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    setSearched(e.target.value);
  };

  const searchedData = user.filter((u) => {
    return u.title.toLowerCase().includes(searched.toLowerCase());
  });

  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Search movie..."
        value={searched}
        onChange={handleSearch}
      />
      <Container>
        <Row>
          {searchedData.map((u) => (
            <Col md={3}>
              <Search u={u} key={u.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Movies;
