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

  return (
    <div className="sortPanel">
      <div className="sortPanelContainer">

        <div className="left">
        <Button
          variant="contained"
          onClick={() => dispatch(sortRequestsByDateAsc())}
        >
          Sort by Date of dispatch &uarr;
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(sortRequestsByDateDesc())}
        >
          Sort by Date of dispatch &darr;
        </Button>
        </div>

        <div className="right">
        <Button
          variant="contained"
          onClick={() => dispatch(sortRequestsByCreatedAtAsc())}
        >
          Sort by Date of creation &uarr;
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(sortRequestsByCreatedAtDesc())}
        >
          Sort by Date of creation &darr;
        </Button>
        </div>
      
      </div>
    </div>
  );
};
export default SortPanel;
