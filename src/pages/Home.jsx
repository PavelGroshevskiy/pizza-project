import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../actions/filters";
import { Categories, PizzaBlock, SortPopup, LoadingBlock } from "../components";
import { fetchPizzas } from "../actions/pizzas";
import { addPizza } from "../actions/cart";

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
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { sortBy, category } = useSelector(({ filters }) => filters);

  const onSelectCategory = useCallback((idx) => {
    dispatch(setCategory(idx));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const addToPizzaCart = (obj) => {
    dispatch(addPizza(obj));
  };

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
          ? items.map((pizza) => (
              <PizzaBlock
                onAddPizza={addToPizzaCart}
                addedCount={
                  cartItems[pizza.id] && cartItems[pizza.id].items.length
                }
                {...pizza}
                key={pizza.id}
              />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
