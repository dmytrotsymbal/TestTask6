import { Button } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import './OrderDel.scss';

const OrderDel = ({isDeleteOrderPopup, closeDeleteOrderPopup, onDelete }) => {
  return (
    <div className={isDeleteOrderPopup ? "OrderDelPopupBack" : "OrderDelPopupBackDisabled"}>
      <div className="OrderDelPopup">
        Are you sure you want to delete this request?
        <div className="OrderDelPopupActions">
          <Button onClick={onDelete} startIcon={<CheckIcon />} variant="contained">Confirm</Button>
          <Button onClick={closeDeleteOrderPopup} startIcon={<CloseIcon />} variant="outlined">Cancel</Button>
        </div>
      </div>
    </div>
  )
}
export default OrderDel