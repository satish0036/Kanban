import React, { useState } from "react";
import "./Board.css";
import { MoreHorizontal } from "react-feather";
import Card from "../Card/Card.js";
import Editable from "../Editable/Editable.js";
import Dropdown from "../Dropdown/Dropdown.js";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  // console.log(props.query)

  return (
    <div className="board">
      <div className="board_top">
        <p className="board_top_title">
          {props.board?.title}{" "}
          <span>{`Total Cards ${props.board?.cards?.length}`}</span>
        </p>
        <div className="board_top_more" onClick={() => setShowDropdown(true)}>
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <div className="board_dropdown">
                <p onClick={() => props.removeBoard(props?.board?.id)}>
                  Delete Board
                </p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards">
        {props.board?.cards?.map((item) => (
          <Card
            key={item.id}
            card={item}
            removeCard={props.removeCard}
            boardId={props.board?.id}
            data={props.data}
            query={props.query}
          />
        ))}

        <Editable onSubmit={(value) => props.addCard(value, props.board?.id)} />
        {/* <h1>Card1</h1>
        <h1>Card2</h1>
        <h1>Card3</h1>
        <h1>Card4</h1> */}
      </div>
    </div>
  );
}
export default Board;
