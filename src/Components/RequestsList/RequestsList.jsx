import { useSelector, useDispatch } from "react-redux";
import { deleteOrder } from "../../Redux/orderSlice";
import { Button } from "@mui/material";
// import { format } from "date-fns";


const RequestsList = () => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  return (
    <div className="RequestsList">
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <div style={{ border: "1px solid black", marginBottom: "10px" }}>
              {order.cityFrom} - {order.cityTo}
              <br />
              {order.description}
              <br />
              data - {order.date}
              <br />
              type - {order.selectedType}
              <br />
              create at - {order.createdAt}
              <hr />
              <Button
                onClick={() => dispatch(deleteOrder(order.id))}
                variant="contained"
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RequestsList;
