import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/features/Drinks/drinkSlice";
import { Link } from "react-router-dom";
export default function Products() {
  const dispatch = useDispatch();
  const { cocktails, loading } = useSelector((state) => state.drink);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (loading) {
    return (
      <div>
        <h3> LOADING...!</h3>
      </div>
    );
  }
  return (
    <div>
      <h2> Products </h2>
      <div className="drinks-container">
        {cocktails.map((item) => {
          const { idDrink, strDrinkThumb } = item;
          return (
            <div key={idDrink} className="drinks">
              <Link to={`/products/${idDrink}`}>
                <img alt="title" src={strDrinkThumb} width={231} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
