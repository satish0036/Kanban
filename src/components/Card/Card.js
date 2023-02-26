import React, { useState } from "react";
import "./Card.css";
import { MoreHorizontal } from "react-feather";
import Dropdown from "../Dropdown/Dropdown.js";

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const serTit = props.card.title.toLowerCase();
  const serq = props.query;
  // console.log(props.card.title.includes("Car"))
  if (serTit.includes(serq) || serq === ",.," || serq === " ")
    return (
      <div className="card">
        <div className={serTit.includes(serq) ? "red" : "pink"}>
          {props.card?.title}
        </div>

        {/* <div className="card_title" className={serTit===serq?"red":"pink"}>{props.card?.title}</div> */}
        <div className="card_top_more" onClick={() => setShowDropdown(true)}>
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <div className="card_dropdown">
                <p
                  onClick={() =>
                    props.removeCard(props.card?.id, props.boardId)
                  }
                >
                  Delete Card
                </p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
    );
}
export default Card;
