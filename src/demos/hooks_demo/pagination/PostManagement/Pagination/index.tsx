import React from "react";
import ss from "./index.module.css";

const Pagination: React.FC<{
  pageSize: number;
  total: number;
  click: (page: number) => void;
}> = ({ pageSize, total , click}) => {
  const numbers = [];
  // ceil 向上取整
  for (let i = 1; i < Math.ceil(total / pageSize); i++) {
    numbers.push(i);
  }
  return (
    <nav>
      <ul className={ss.container}>
        {numbers.map((nu) => (
          <li key={nu} className={ss.item}>
            <a onClick={() => {click(nu)}} className={ss.link} href="/#">
              {nu}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
