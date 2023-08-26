import OrderForm from "../../../Components/OrderForm/OrderForm"
import {Container } from "@mui/material"
const OrderPage = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <OrderForm />
            </Container>
        </div>
    )
}
export default OrderPage