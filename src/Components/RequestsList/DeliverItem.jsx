import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { editRequest } from "../../Redux/requestSlice";

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

  return (
    <Card className="deliveryItem">
      <CardContent>
        {isEditingPopup ? (
          <div className="popupBack">
            <div className="popup">
            <h3 style={{ textTransform: 'uppercase', fontStyle: 'italic', fontWeight: 'normal', margin: '0px', marginBottom: '10px' }}>Deliver form</h3>
              <input type="text" value={editedCityFrom} onChange={(e) => setEditedCityFrom(e.target.value)} />
              <input type="text" value={editedCityTo} onChange={(e) => setEditedCityTo(e.target.value)} />
              <input type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} />
              <div className="popupActions">
                <Button variant="contained" onClick={SaveFunc} startIcon={<CheckIcon />}>
                  Save
                </Button>
                <Button variant="contained" onClick={() => setIsEditingPopup(false)} startIcon={<ClearIcon />}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>

        ) : (
          <div>
            <h3 style={{ textTransform: 'uppercase', fontStyle: 'italic', fontWeight: 'normal', margin: '0px', marginBottom: '10px' }}>Deliver</h3>
            <h4>From <span style={{ textDecoration: "underline" }}>{editedCityFrom}</span> - to <span style={{ textDecoration: "underline" }}>{editedCityTo}</span></h4>
            <strong>Date of dispatch - <span style={{ fontStyle: "italic" }}>{editedDate}</span></strong>
            <p>Request created at - <span style={{ textDecoration: "underline" }}>{createdAt}</span></p>
          </div>
        )}
      </CardContent>

      <CardActions className="actions">
        <Button variant="contained" onClick={onDelete} startIcon={<DeleteIcon />}>
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
