import React, { useCallback } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../actions/filters";
import { Categories, PizzaBlock, SortPopup } from "../components";

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const categoryItems = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const sortPopupItems = [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "alphabet" },
  ];

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          // onClick={(el) => console.log(el)}
          items={categoryItems}
          onClickItem={onSelectCategory}
        />
        <SortPopup items={sortPopupItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">
        {items.map((pizza) => (
          <PizzaBlock {...pizza} key={pizza.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
