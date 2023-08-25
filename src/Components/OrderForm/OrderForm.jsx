import React, { useState } from "react";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addOrder, deleteOrder } from "../../Redux/orderSlice";

const OrderForm = () => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  const [cityFrom, setCityFrom] = useState("");
  const [cityTo, setCityTo] = useState("");
  const [selectedType, setSelectedType] = useState("gadgets");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const addOrderFunc = () => {
    dispatch(addOrder({ cityFrom, cityTo, selectedType, date, description }));
    setCityFrom("");
    setCityTo("");
    setSelectedType("gadgets");
    setDate("");
    setDescription("");
  };

  return (
    <>
      <form style={{ width: "30%", display: "flex", flexDirection: "column" }}>
        <h5>Order Form</h5>

        <input
          type="text"
          value={cityFrom}
          placeholder="City from:"
          onChange={(e) => setCityFrom(e.target.value)}
        />
        <input
          type="text"
          value={cityTo}
          placeholder="City to:"
          onChange={(e) => setCityTo(e.target.value)}
        />

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="gadgets">Gadgets</option>
          <option value="drinks">Drinks</option>
          <option value="clothes">Clothes</option>
          <option value="medicines">Medicines</option>
          <option value="other">Other</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <textarea
          cols="30"
          rows="10"
          value={description}
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <Button onClick={addOrderFunc} variant="contained">
          Submit
        </Button>
      </form>

      <hr />

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
    </>
  );
};
export default OrderForm;
