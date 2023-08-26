import { Container } from "@mui/material"
import RequestsList from "../../Components/RequestsList/RequestsList"

const RequestsPage = () => {
  return (
    <div className="RequestsPage">
      <Container maxWidth="lg">
        <RequestsList />
      </Container>
    </div>
  )
}
export default RequestsPage