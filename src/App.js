import { useEffect, useState } from "react";
import { Input } from "antd";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Categories from "./components/categories";
import ListOfCategories from "./components/listOfCategories";
import ProductDetailsPage from "./components/productDetailsPage";

function App() {
  const [getCategories, setgetCategories] = useState([]);
  const [specificData, SetSpecificData] = useState([]);
  const [getSingleProductDetails, setGetSingleProductDetails] = useState({});
  const [specificSelect, setSpecificSelect] = useState("electronics");

  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setgetCategories(json);
      });
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${specificSelect}`)
      .then((res) => res.json())
      .then((json) => SetSpecificData(json));
    navigate(`/list/prodcut/${specificSelect}`);
  }, [specificSelect]);

  const saveCategoriesData = (specificCategory) => {
    setSpecificSelect(specificCategory);
  };

  const getProductId = (id) => {
    setGetSingleProductDetails(id);
    navigate(`/product/details/list/${id}`);
  };

  const getSearchValue = (e) => {
    // SetSpecificData((specificData) => {
    //   return specificData.filter((item) =>
    //     item.title.search(e.target.value) <= 0 ? true : ""
    //   );
    // });
  };

  return (
    <div>
      <Input
        placeholder="NO WORKING, NOT API IS AVAILABLE FOR SEARCH"
        onChange={getSearchValue}
      />
      <Categories
        allCategories={getCategories}
        saveCategoriesData={saveCategoriesData}
      />

      <Routes>
        <Route
          path="/list/prodcut/:categories"
          element={
            <ListOfCategories
              specificData={specificData}
              getProductId={getProductId}
              specificSelect={specificSelect}
            />
          }
        />
        <Route
          path="/product/details/list/:id"
          element={
            <ProductDetailsPage
              getSingleProductDetails={getSingleProductDetails}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
