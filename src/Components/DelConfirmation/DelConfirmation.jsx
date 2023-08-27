import { Button } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import './DelConfirmation.scss'

const DelConfirmation = ({isDeletePopup, closeDeletePopup, onDelete }) => {
  return (
    <div className={isDeletePopup ? "DelConfirmationPopupBack" : "DelConfirmationPopupBackDisabled"}>
      <div className="DelConfirmationPopup">
        Are you sure you want to delete this request?
        <div className="DelConfirmationPopupActions">
          <Button onClick={onDelete} startIcon={<CheckIcon />} variant="contained">Confirm</Button>
          <Button onClick={closeDeletePopup} startIcon={<CloseIcon />} variant="outlined">Cancel</Button>
        </div>
      </div>
    </div>
  )
}
export default DelConfirmation