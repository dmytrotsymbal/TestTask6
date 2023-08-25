import { useSelector, useDispatch } from "react-redux";
import { deleteRequest } from "../../Redux/requestSlice";
import { Button } from "@mui/material";
// import { format } from "date-fns";
import './RequestsList.css'


const RequestsList = () => {
  const requests = useSelector((state) => state.request.requests);
  const dispatch = useDispatch();
  return (
    <div className="RequestsList">
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <div style={{ border: "1px solid black", marginBottom: "10px" }}
            className={request.requestType === "order" ? "orderItem" : "deliverItem"}
            >
              {request.cityFrom} - {request.cityTo}
              <br />
              {request.description}
              <br />
              data - {request.date}
              <br />
              type - {request.selectedType}
              <br />
              create at - {request.createdAt}
              <hr />
              <Button
                onClick={() => dispatch(deleteRequest(request.id))}
                variant="contained"
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RequestsList;
