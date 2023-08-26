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

  const startEditFunc = () => {
    setIsEditingPopup(true);
  };

  const SaveFunc = () => {
    dispatch(
      editRequest({
        id,
        cityFrom: editedCityFrom,
        cityTo: editedCityTo,
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
              <input type="text" value={editedCityFrom} onChange={(e) => setEditedCityFrom(e.target.value)} />
              <input type="text" value={editedCityTo} onChange={(e) => setEditedCityTo(e.target.value)} />
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
            <h4>From {editedCityFrom} - to {editedCityTo}</h4>
            <strong>Date of dispatch - {date}</strong>
            <p>Request created at - {createdAt}</p>
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
