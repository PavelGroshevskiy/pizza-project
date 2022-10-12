import React from "react";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickItem,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => {
            onClickItem(null);
          }}
        >
          Все
        </li>
        {items &&
          items.map((el, idx) => (
            <li
              className={activeCategory === idx ? "active" : ""}
              onClick={() => onClickItem(idx)}
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
