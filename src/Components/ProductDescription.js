import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../Redux/features/Drinks/drinkSlice";
export default function ProductDescription() {
  const [modify, setModified] = useState([]);
  const { cocktail } = useSelector((state) => state.drink);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    dispatch(fetchSingleProduct({ id }));
  }, [dispatch, id]);
  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass
      } = cocktail[0];
      const newCocktail = { name, image, info, category, glass };
      setModified(newCocktail);
    } else {
      setModified(null);
    }
  }, [cocktail, id]);
  if (!modify) {
    return (
      <div>
        <h2> No Products Found</h2>
      </div>
    );
  }
  return (
    <div>
      <h2> Product Description </h2>
      <div>
        <h3> {modify?.name} </h3>
        <img alt="drinks" src={modify?.image} width={288} />
        <h4> {modify?.info}</h4>
        <h4> {modify?.category} </h4>
        <h4> {modify?.glass} </h4>
      </div>
    </div>
  );
}
