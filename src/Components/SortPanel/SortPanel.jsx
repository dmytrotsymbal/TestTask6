import { useDispatch } from "react-redux";
import {
  sortRequestsByDateAsc,
  sortRequestsByDateDesc,
  sortRequestsByCreatedAtAsc,
  sortRequestsByCreatedAtDesc,
} from "../../Redux/requestSlice";
import { Button } from "@mui/material";

const SortPanel = () => {
  const dispatch = useDispatch();

  const onSortByDateAsc = () => dispatch(sortRequestsByDateAsc());
  const onSortByDateDesc = () => dispatch(sortRequestsByDateDesc());

  const onSortByCreatedAtAsc = () => dispatch(sortRequestsByCreatedAtAsc());
  const onSortByCreatedAtDesc = () => dispatch(sortRequestsByCreatedAtDesc());

  return (
    <div className="sortPanel">
      <div className="sortPanelContainer">

        <div className="left">
        <Button
          variant="contained"
          onClick={onSortByDateAsc}
        >
          Sort by Date of dispatch &uarr;
        </Button>
        <Button
          variant="contained"
          onClick={onSortByDateDesc}
        >
          Sort by Date of dispatch &darr;
        </Button>
        </div>

        <div className="right">
        <Button
          variant="contained"
          onClick={onSortByCreatedAtAsc}
        >
          Sort by Date of creation &uarr;
        </Button>
        <Button
          variant="contained"
          onClick={onSortByCreatedAtDesc}
        >
          Sort by Date of creation &darr;
        </Button>
        </div>
      
      </div>
    </div>
  );
};
export default SortPanel;
