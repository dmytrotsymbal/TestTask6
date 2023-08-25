import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <nav>
            <Link to="/create">Create</Link>
            <Link to="/requests">Requests</Link>
        </nav>
    </header>
  )
}
export default Header