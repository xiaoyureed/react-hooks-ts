import React, { useCallback, useState } from "react";
import TodoClass from "../class_demo/TodoClass";
import ss from "./Demos.module.css";
import TodoApp from "./TodoApp";

const routes = [
  { path: "todo", component: TodoApp },
  { path: "todo-class", component: TodoClass },
];

const Default: React.FC = () => <>default</>;

const Demos: React.FC = () => {
  const [, setRender] = useState({});
  const forceRender = useCallback(() => {
    setRender({});
  }, []);

  const handleClick = useCallback(
    (path) => {
      //pushState() 想浏览器添加一个状态, 可以 change path (not url) but no need to refresh page
      // param1: obj类型, 可以为 null (当用户定向到一个新的状态时，会触发popstate事件, 可以拿得到这里的 obj)
      // param2: string, 可以为 null (没啥用)
      // param3: string, new path
      //
      // 类似的 replaceState() 直接替换, 不产生历史
      //
      window.history.pushState(null, "", `/#/${path}`);
      forceRender();
    },
    [forceRender]
  );

  const getCurHash = useCallback(() => {
    const locationHash = document.location.hash;
    console.log(`locationhash = ${locationHash}`);
    const curHash = locationHash.replace("#/", "");
    console.log(`cur hash = ${curHash}`);
    return curHash;
  }, []);

  const findCur = useCallback(() => {
    const curRou = routes.filter((rou) => rou.path === getCurHash())[0];
    if (curRou) {
      return <curRou.component />;
    }
    return <Default />;
  }, []);

  return (
    <>
      <ul className={ss.menuList}>
        {routes.map((rou) => (
          <li
            className={`${ss.menuItem} ${
              getCurHash() === rou.path ? ss.itemActive : ""
            }`}
            key={rou.path}
          >
            <span
              onClick={() => {
                handleClick(rou.path);
              }}
              className={ss.link}
            >
              {rou.path}
            </span>
          </li>
        ))}
      </ul>
      <div className={ss.component}>{findCur()}</div>
    </>
  );
};

export default Demos;
