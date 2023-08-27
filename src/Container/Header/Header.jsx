import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Badge } from "@mui/material"
import { Container } from "@mui/material"
import "./Header.scss"
const Header = () => {

  const requests = useSelector((state) => state.request.requests);

  return (
    <header>
      <Container maxWidth="lg">
        <nav>
          <div className="Left">
            <h2>LOGO</h2>
          </div>

          <div className="Right" >
            <Link to="/create">Create</Link>
            <Link to="/requests">
              <Badge badgeContent={requests.length} color="secondary">
                Requests
              </Badge>
            </Link>
          </div>
        </nav>
      </Container>

    </header>
  )
}
export default Header