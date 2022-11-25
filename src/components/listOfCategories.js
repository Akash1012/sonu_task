import { Button, Card, Tooltip } from "antd";

function ListOfCategories({ specificData = [], getProductId, specificSelect }) {
  const getDetails = (id) => {
    getProductId(id);
  };
  return (
    <>
      <div className="specific">
        <span>{specificSelect.toUpperCase()}</span>
      </div>
      <div className="list_of">
        {specificData?.map((data) => {
          const { image, title, price, id } = data;
          return (
            <div key={id}>
              <Card
                title={
                  <Tooltip title={title}>
                    <div>{title}</div>
                  </Tooltip>
                }
                style={{
                  width: 300,
                  borderRadius: "8",
                }}
              >
                <img src={image} className="image" />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>
                    <b>Price: </b>
                    &#8377;
                    {price}
                  </p>
                  <Button
                    type="primary"
                    onClick={() => getDetails(id)}
                    style={{ top: "8px" }}
                  >
                    Buy / Details
                  </Button>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListOfCategories;
