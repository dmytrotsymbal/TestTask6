import { Button, Container, Grid } from "@mui/material"
import './CreatePage.scss'
import { Link } from "react-router-dom"

const CreatePage = () => {
  return (
    <div className="CreateRequest">
      <h2 style={{ textAlign: "center" }}>Create request</h2>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="orderPart">
              <p>If you want to send a parcel, you should
                create an order</p>
              <Link className="link" to="/create/order">
                <Button variant="contained">Create order</Button>
              </Link>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="deliveryPart">
              <p>Other cases...</p>
              <Link className="link" to="/create/delivery">
                <Button variant="contained">Create a delivery</Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default CreatePage