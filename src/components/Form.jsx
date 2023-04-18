import React, { useState } from "react";

function Form({ input, setInput, addBtn }) {
  return (
    <form action="" className="form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={input}
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <button className="btn" onClick={addBtn}>
        Add
      </button>
    </form>
  );
}

export default Form;
