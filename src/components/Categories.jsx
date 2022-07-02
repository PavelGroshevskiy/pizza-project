import React from "react";
import { useState } from "react";

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => {
            onSelectItem(null);
          }}
        >
          Все
        </li>
        {items &&
          items.map((el, idx) => (
            <li
              className={activeItem === idx ? "active" : ""}
              onClick={() => onSelectItem(idx)}
              key={`${el}_${idx}`}
            >
              {el}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
