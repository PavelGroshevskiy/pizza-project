import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../actions/filters";
import { Categories, PizzaBlock, SortPopup, LoadingBlock } from "../components";
import { fetchPizzas } from "../actions/pizzas";

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
  { name: "алфавиту", type: "name" },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { sortBy, category } = useSelector(({ filters }) => filters);

  const onSelectCategory = useCallback((idx) => {
    dispatch(setCategory(idx));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          // onClick={(el) => console.log(el)}
          items={categoryItems}
          onClickItem={onSelectCategory}
          activeCategory={category}
        />

        <SortPopup
          activeSortType={sortBy}
          items={sortPopupItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">
        {isLoaded
          ? items.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} />)
          : Array(10)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
