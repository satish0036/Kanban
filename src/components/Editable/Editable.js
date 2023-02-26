import React, { useState } from "react";
import { X, Plus } from "react-feather";
import "./Editable.css";

function Editable(props) {
  const [showEdit, setShowEdit] = useState(false);

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="editable">
      {showEdit ? (
        <form
          className="editable_edit"
          onSubmit={(event) => {
            event.preventDefault();
            if (props.onSubmit) props.onSubmit(inputValue);
            setShowEdit(false);
            setInputValue("");
          }}
        >
          <input
            autoFocus
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={props.placeholder || "Enter Item"}
          />
          <div className="editable_edit_footer">
            <button type="submit">{props.buttonText || "Add"}</button>
            <X onClick={() => setShowEdit(false)} />
          </div>
        </form>
      ) : (
        <p className="editable_add_item" onClick={() => setShowEdit(true)}>
          {" "}
          <Plus />
          {props.text || "Add Card"}{" "}
        </p>
      )}
    </div>
  );
}
export default Editable;
