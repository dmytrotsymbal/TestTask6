import { useSelector, useDispatch } from "react-redux";
import { deleteRequest } from "../../Redux/requestSlice";
import OrderItem from "./OrderItem";
import DeliverItem from "./DeliverItem";
// import { format } from "date-fns";
import "./RequestsList.css";

const RequestsList = () => {
  const requests = useSelector((state) => state.request.requests);
  const dispatch = useDispatch();
  return (
    <div className="RequestsList">
      <ul>
        {requests.map((request) => (
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
