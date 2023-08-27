import React, { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addRequest } from "../../Redux/requestSlice";
import "./DeliveryForm.scss";

const DeliveryForm = () => {
  const dispatch = useDispatch();

  const [cityFrom, setCityFrom] = useState("");
  const [cityTo, setCityTo] = useState("");
  const [date, setDate] = useState("");
  const [requestType, setRequestType] = useState("deliver");

  const addOrderFunc = () => {
    if (cityFrom === "" || cityTo === "" || date === "") {
      alert("Please fill in all the fields");
    } else {
    dispatch(addRequest({ cityFrom, cityTo, date, requestType }));
    setCityFrom("");
    setCityTo("");
    setDate("");
    setRequestType("deliver");
    }
  };

  return (
    <div className="DeliveryFormContainer">
       <h2 style={{ textAlign: "center" }}>Create an deliver</h2>
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

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button onClick={addOrderFunc} variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default DeliveryForm;
