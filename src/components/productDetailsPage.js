import { Button, Rate } from "antd";
import { useEffect, useState } from "react";

function ProductDetailsPage({ getSingleProductDetails }) {
  const [details, setDetails] = useState({});
  const { image, title, description, price, rating, category } = details;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${getSingleProductDetails}`)
      .then((res) => res.json())
      .then((json) => setDetails(json));
  }, []);
  return (
    <>
      <h3 style={{ borderBottom: "2px solid black" }}>
        {category?.toUpperCase()}
      </h3>

      <div style={{ display: "flex" }}>
        <div>
          <img src={image} className="image" />
        </div>
        <div
          style={{ marginLeft: "15px", position: "relative", bottom: "17px" }}
        >
          <h3>Name : {title}</h3>
          <p>Description: {description}</p>
          <p>
            <b>Price: </b>
            &#8377;
            {price}
          </p>
          <p>
            Rating: <Rate allowHalf value={rating?.rate} />{" "}
            <span>{rating?.count}</span>
          </p>
          <Button type="primary">Add to cart</Button>
        </div>
      </div>
    </>
  );
}

export default ProductDetailsPage;
