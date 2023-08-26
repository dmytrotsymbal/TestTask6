import DeliveryForm from "../../../Components/DeliveryForm/DeliveryForm"
import {Container } from "@mui/material"

const DeliveryPage = () => {
    return (
        <div className="DeliveryPage">
            <Container maxWidth="lg">
               <DeliveryForm />
            </Container>
        </div>
    )
}
export default DeliveryPage