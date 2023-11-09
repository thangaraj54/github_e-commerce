import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "antd";
import { Container, Row } from "react-bootstrap";

const MovieDetail = ({ handleClick }) => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("https://apigenerator.dronahq.com/api/_7mPSitd/data")
      .then((res) => res.json())
      .then((data) => {
        const newMovie = data.find((Item) => Item.id === parseInt(id));
        setDetail(newMovie);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Container>
        <Row>
          <Card
            className="carddetail"
            data={detail}
            handleClick={handleClick}
            key={detail.id}
          >
            <img className="image" src={detail.image} alt={detail.name} />
            <p className="title ">{detail.name}</p>
            <p>
              <b>Releasedate :</b> {detail.releasedate}
            </p>
            <p>
              <b>Director :</b> {detail.director}
            </p>
            <p>
              <b>Budget : </b>
              {detail.budget}
            </p>
            <p>{detail.description}</p>
            <button className="button" onClick={() => handleClick(detail)}>
              Add to Cart
            </button>
            <button className="button">Book Know</button>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetail;
