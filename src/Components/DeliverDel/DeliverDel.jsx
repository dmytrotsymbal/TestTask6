import { Button } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import './DeliverDel.scss'

const DeliverDel = ({isDeletePopup, closeDeletePopup, onDelete }) => {
  return (
    <div className={isDeletePopup ? "DeliverDelPopupBack" : "DeliverDelPopupBackDisabled"}>
      <div className="DeliverDelPopup">
        Are you sure you want to delete this request?
        <div className="DeliverDelPopupActions">
          <Button onClick={onDelete} startIcon={<CheckIcon />} variant="contained">Confirm</Button>
          <Button onClick={closeDeletePopup} startIcon={<CloseIcon />} variant="outlined">Cancel</Button>
        </div>
      </div>
    </div>
  )
}
export default DeliverDel