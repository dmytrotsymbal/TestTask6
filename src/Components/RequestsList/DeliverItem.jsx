import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { editRequest } from "../../Redux/requestSlice";
import DeliverDel from "../DeliverDel/DeliverDel";

const DeliverItem = ({
  id,
  cityFrom,
  cityTo,
  date,
  createdAt,
  onDelete,
}) => {
  const dispatch = useDispatch();
  const [isEditingPopup, setIsEditingPopup] = useState(false);
  const [editedCityFrom, setEditedCityFrom] = useState(cityFrom);
  const [editedCityTo, setEditedCityTo] = useState(cityTo);
  const [editedDate, setEditedDate] = useState(date);
  const startEditFunc = () => {
    setIsEditingPopup(true);
  };

  const SaveFunc = () => {
    dispatch(
      editRequest({
        id,
        cityFrom: editedCityFrom,
        cityTo: editedCityTo,
        date: editedDate
      })
    );
    setIsEditingPopup(false);
  };

  const CancelFunc = () => {
    setEditedCityFrom(cityFrom);
    setEditedCityTo(cityTo);
    setEditedDate(date);
    setIsEditingPopup(false);
  }

  //---------------------------------------------

  const [isDeletePopup, setIsDeletePopup] = useState(false);

  const openDeletePopup = () => {
    setIsDeletePopup(true);
  }

  const closeDeletePopup = () => {
    setIsDeletePopup(false);
  }

  return (
    <Card className="deliveryItem">
      <CardContent>
        {isEditingPopup ? (
          <div className="popupBack">
            <div className="popup">
              <h3 className="popupTitle">Deliver form</h3>
              <input type="text" value={editedCityFrom} onChange={(e) => setEditedCityFrom(e.target.value)} />
              <input type="text" value={editedCityTo} onChange={(e) => setEditedCityTo(e.target.value)} />
              <input type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} />
              <div className="popupActions">
                <Button variant="contained" onClick={SaveFunc} startIcon={<CheckIcon />}>
                  Confirm
                </Button>
                <Button variant="outlined" onClick={CancelFunc} startIcon={<ClearIcon />}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>

        ) : (
          <div className="content">
            <h3>Deliver</h3>
            <h4>From <span className="underline">{editedCityFrom}</span> - to <span className="underline">{editedCityTo}</span></h4>
            <strong>Date of dispatch - <span className="italic">{editedDate}</span></strong>
            <p>Request created at - <span className="italic">{createdAt}</span></p>
          </div>
        )}
      </CardContent>

      <DeliverDel isDeletePopup={isDeletePopup} closeDeletePopup={closeDeletePopup} onDelete={onDelete} />

      <CardActions className="actions">
        <Button variant="contained" onClick={openDeletePopup} startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" startIcon={<EditIcon />} onClick={startEditFunc}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default DeliverItem;
