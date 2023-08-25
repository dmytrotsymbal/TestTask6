import React, { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addRequest } from "../../Redux/requestSlice";

const RequestForm = () => {
  const dispatch = useDispatch();

  const [cityFrom, setCityFrom] = useState("");
  const [cityTo, setCityTo] = useState("");
  const [date, setDate] = useState("");
  const [requestType, setRequestType] = useState("deliver");

  const addOrderFunc = () => {
    dispatch(addRequest({ cityFrom, cityTo, date, requestType }));
    setCityFrom("");
    setCityTo("");
    setDate("");
    setRequestType("deliver");
  };

  return (
    <div>
      <form style={{ width: "30%", display: "flex", flexDirection: "column" }}>
       
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
export default RequestForm;
