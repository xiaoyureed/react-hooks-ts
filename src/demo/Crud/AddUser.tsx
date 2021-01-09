import React, { ChangeEvent, useContext, useState } from "react";
import { ADD, CrudDispatchContext } from ".";

const AddUser = () => {
  const dispatch = useContext(CrudDispatchContext);

  const [name, setName] = useState("");

  const onChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setName(e.target.value);
  };

  const handleAdd = () => {
    if (!name) {
      return;
    }
    dispatch({
      type: ADD,
      payload: {
        name,
      },
    });
    window.location.hash = "/";
  };

  return (
    <div>
      <label>
        <span>name: </span>
        <span>
          <input type="text" value={name} onChange={onChange} />
        </span>
      </label>
      <button type="submit" onClick={handleAdd}>
        add
      </button>
    </div>
  );
};

export default AddUser;
