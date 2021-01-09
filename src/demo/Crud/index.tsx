import React, { useEffect, useReducer, useState } from "react";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

type Route = {
  hash: string;
  comp: any;
};

type User = {
  name: string;
};

const routes: Array<Route> = [
  {
    hash: "edit",
    comp: EditUser,
  },
  {
    hash: "add",
    comp: AddUser,
  },
];

const initUsers: User[] = [
  {
    name: "xiao",
  },
  {
    name: "ma",
  },
];

export const ADD = "add";
export const DEL = "delete";
export const EDIT = "edit";

type Dic<T> = {
  [key: string]: T;
};

type Action = {
  type: string;
  payload?: Dic<any>;
};

const crudReducer: (s: User[], a: Action) => User[] = (
  state,
  { type, payload }
) => {
  switch (type) {
    case ADD:
      return [...state, { name: payload?.name }];
    case DEL:
      return state.filter((user) => user.name !== payload?.name);
    case EDIT:
      return state.map((user) => {
        if (user.name === payload?.name) {
          return {
            name: payload?.newName,
          };
        }
        return user;
      });
    default:
      return state;
  }
};

export const CrudDispatchContext = React.createContext<React.Dispatch<Action>>(
  () => {}
);

const Crud = () => {
  const [users, dispatch] = useReducer(crudReducer, initUsers);

  const [, setReRender] = useState({});
  const onHashChange = () => {
    setReRender({});
  };

  useEffect(() => {
    console.log("add hash change listener");

    window.addEventListener("hashchange", onHashChange, false);
  }, []);

  const onClickEdit: (name: string) => void = () => {
    // window.history.pushState(null, "", "/#/edit");
    window.location.hash = "/edit"
  };

  const curHash = document.location.hash.replace(/#\/?/, "") || "";
  console.log("render, curhash", curHash);

  const Cur = routes.filter((route) => route.hash === curHash)[0]?.comp;

  return (
    <CrudDispatchContext.Provider value={dispatch}>
      <div>
        <h2 onClick={() => (window.location.hash = "/")}>User Crud</h2>

        {curHash === "" ? (
          <ul>
            {users.map((user) => {
              return (
                <li key={user.name}>
                  <span>{user.name}</span>
                  <span>
                    <button onClick={() => onClickEdit(user.name)}>
                      edit
                    </button>
                  </span>
                  <span>
                    <button
                      onClick={() =>
                        dispatch({ type: DEL, payload: { name: user.name } })
                      }
                    >
                      delete
                    </button>
                  </span>
                </li>
              );
            })}
            <li>
              <button onClick={() => (window.location.hash = "/add")}>
                add
              </button>
            </li>
          </ul>
        ) : (
          <Cur />
        )}
      </div>
    </CrudDispatchContext.Provider>
  );
};

export default Crud;
