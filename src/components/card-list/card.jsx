import React from "react";
import "./card.style.css";
export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <p>
      <strong>{props.monster.name}</strong>
    </p>
    <p>{props.monster.email}</p>
  </div>
);
