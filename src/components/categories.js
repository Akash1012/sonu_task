import { useEffect, useState } from "react";
import { Button } from "antd";
import "./styles.css";

function Categories({ allCategories, saveCategoriesData }) {
  const [categories, setCategories] = useState([]);
  const [ColorClick, setColorClick] = useState("0");

  useEffect(() => {
    setCategories(allCategories);
  }, [allCategories]);
  const getEachCategoriesData = (ct, index) => {
    saveCategoriesData(ct);
    setColorClick(index);
  };
  return (
    <div className="btnConatiner">
      {categories.map((eachCategories, index) => {
        return (
          <Button
            className="btn"
            style={{ opacity: ColorClick != index && "0.5" }}
            type="primary"
            onClick={() => getEachCategoriesData(eachCategories, index)}
          >
            {eachCategories.toUpperCase()}
          </Button>
        );
      })}
    </div>
  );
}

export default Categories;
