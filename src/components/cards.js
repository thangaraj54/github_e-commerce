import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const Search = ({ u }) => {
  return (
    <Link to={`/Movies/${u.id}`}>
      <Card className="card">
        <div key={u.id}>
          <img className="img" src={u.image} />
          <br />
          <h5 className="title">{u.title}</h5>
          <br />
          <p>
            <b>TicketPrice:</b> {u.ticketPrice}
          </p>
          <button className="button">View More</button>
        </div>
      </Card>
    </Link>
  );
};

export default Search;
