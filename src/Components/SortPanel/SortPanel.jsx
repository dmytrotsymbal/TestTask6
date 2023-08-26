import { useDispatch } from "react-redux";
import {
  sortRequestsByDateAsc,
  sortRequestsByDateDesc,
} from "../../Redux/requestSlice";
import { Button } from "@mui/material";

const SortPanel = () => {
  const dispatch = useDispatch();

  return (
    <div className="sortPanel">
      <div className="sortPanelContainer">
        <Button
          variant="contained"
          onClick={() => dispatch(sortRequestsByDateAsc())}
        >
          Sort by Date Asc
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch(sortRequestsByDateDesc())}
        >
          Sort by Date Desc
        </Button>
      </div>
    </div>
  );
};
export default SortPanel;
