import React from "react";
import { useState } from "react";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from "react-redux";
import { editRequest } from "../../Redux/requestSlice";
import OrderDel from "../OrderDel/OrderDel";

const OrderItem = ({
  cityFrom,
  cityTo,
  description,
  date,
  selectedType,
  createdAt,
  onDelete,
}) => {
  const dispatch = useDispatch();
  const [isEditingPopup, setIsEditingPopup] = useState(false);
  const [editedCityFrom, setEditedCityFrom] = useState(cityFrom);
  const [editedCityTo, setEditedCityTo] = useState(cityTo);
  const [editedDate, setEditedDate] = useState(date);
  const [editedDescription, setEditedDescription] = useState(description);

  const startEditFunc = () => {
    setIsEditingPopup(true);
  }

  const SaveFunc = () => {
    dispatch(
      editRequest({
        cityFrom: editedCityFrom,
        cityTo: editedCityTo,
        date: editedDate,
        description: editedDescription
      })
    );
    setIsEditingPopup(false);
  };

  const CancelFunc = () => {
    setEditedCityFrom(cityFrom);
    setEditedCityTo(cityTo);
    setEditedDate(date);
    setEditedDescription(description);
    setIsEditingPopup(false);
  }

  //---------------------------------------------

  const [isDeleteOrderPopup, setIsDeleteOrderPopup] = useState(false);

  const openDeleteOrderPopup = () => {
    setIsDeleteOrderPopup(true);
  }

  const closeDeleteOrderPopup = () => {
    setIsDeleteOrderPopup(false);
  }

  return (
    <Card className="orderItem">
      <CardContent>
        {isEditingPopup ? (
          <div className="popupBack">
            <div className="popup">
            <h3 style={{ textTransform: 'uppercase', fontStyle: 'italic', fontWeight: 'normal', margin: '0px', marginBottom: '10px' }}>Order form</h3>
              <input type="text" value={editedCityFrom} onChange={(e) => setEditedCityFrom(e.target.value)} />
              <input type="text" value={editedCityTo} onChange={(e) => setEditedCityTo(e.target.value)} />
              <input type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} />
              <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
              <div className="popupActions">
                <Button variant="contained" onClick={SaveFunc} startIcon={<CheckIcon />}>
                  Save
                </Button>
                <Button variant="contained" onClick={CancelFunc} startIcon={<ClearIcon />}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="content">
           <h3 style={{ textTransform: 'uppercase', fontStyle: 'italic', fontWeight: 'normal', margin: '0px', marginBottom: '10px' }}>Order</h3>
            <h4>From <span style={{ textDecoration: "underline" }}>{editedCityFrom}</span> - to <span style={{ textDecoration: "underline" }}>{editedCityTo}</span></h4>
            <strong>Date of dispatch - <span style={{ fontStyle: "italic" }}>{editedDate}</span></strong>
            <p>Type of parcel - <span style={{ fontWeight: "bold" }}>{selectedType}</span></p>
            <p>Description: {editedDescription}</p>
            <p>Request created at - <span style={{ textDecoration: "underline" }}>{createdAt}</span></p>
          </div>
        )
        }
      </CardContent>

      <OrderDel isDeleteOrderPopup={isDeleteOrderPopup} closeDeleteOrderPopup={closeDeleteOrderPopup} onDelete={onDelete} />

      <CardActions className="actions">
        <Button variant="contained" onClick={openDeleteOrderPopup} startIcon={<DeleteIcon />}>
          Delete
        </Button>

        <Button variant="contained" onClick={startEditFunc} startIcon={<EditIcon />}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default OrderItem;
