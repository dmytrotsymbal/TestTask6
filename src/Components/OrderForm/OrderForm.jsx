import React, { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addRequest } from "../../Redux/requestSlice";
import './OrderForm.scss'

const OrderForm = () => {
  const dispatch = useDispatch();

  const [cityFrom, setCityFrom] = useState("");
  const [cityTo, setCityTo] = useState("");
  const [selectedType, setSelectedType] = useState("gadgets");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [requestType, setRequestType] = useState("order");

  const addOrderFunc = () => {
    dispatch(addRequest({ cityFrom, cityTo, selectedType, date, description, requestType }));
    setCityFrom("");
    setCityTo("");
    setSelectedType("gadgets");
    setDate("");
    setDescription("");
    setRequestType("order");
  };

  return (
    <div className="OrderFormContainer">
      <h2 style={{ textAlign: "center" }}>Create an order</h2>
      <form>
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
    </div>
  );
};
export default OrderForm;
