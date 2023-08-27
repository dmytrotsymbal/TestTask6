import { useSelector, useDispatch } from "react-redux";
import { deleteRequest } from "../../Redux/requestSlice";
import OrderItem from "./OrderItem";
import DeliverItem from "./DeliverItem";
import "./RequestsList.css";
import SortPanel from "../SortPanel/SortPanel";

const RequestsList = () => {
  const requests = useSelector((state) => state.request.requests);
  const dispatch = useDispatch();

  const sortedRequests = useSelector((state) => state.request.sortedRequests);

  return (
    <div className="RequestsList">
      <h2>Requests list:</h2>
      <SortPanel />
      <ul>
        {(sortedRequests.length ? sortedRequests : requests).map((request) => (
          <li key={request.id}>
            {request.requestType === "order" ? (
              <OrderItem
                cityFrom={request.cityFrom}
                cityTo={request.cityTo}
                description={request.description}
                date={request.date}
                selectedType={request.selectedType}
                createdAt={request.createdAt}
                onDelete={() => dispatch(deleteRequest(request.id))}
              />
            ) : (
              <DeliverItem
                cityFrom={request.cityFrom}
                cityTo={request.cityTo}
                date={request.date}
                createdAt={request.createdAt}
                onDelete={() => dispatch(deleteRequest(request.id))}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestsList;
