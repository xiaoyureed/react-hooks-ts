import React, { ChangeEvent, useContext, useState } from "react";
import { CrudDispatchContext, EDIT } from ".";

interface IProps {
  initName: string;
}

const EditUser: React.FC<IProps> = ({ initName }) => {
  const [name, setName] = useState(initName);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const dispatch = useContext(CrudDispatchContext);
  const onClickEdit = () => {
    if (name) {
      dispatch({
        type: EDIT,
        payload: {
          name,
        },
      });
      window.location.hash = "/";
    }
  };

  return (
    <div>
      <label>
        <span>name: </span>
        <span>
          <input type="text" value={name} onChange={onChange} />
        </span>
        <span>
          <button type="button" onClick={onClickEdit}>
            Edit
          </button>
        </span>
      </label>
    </div>
  );
};

export default EditUser;
