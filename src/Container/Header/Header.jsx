import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header style={{ width: "100%", height: "70px", backgroundColor: "#2B2B2B", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <nav style={{ width: "30%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link style={{ color: "white", textDecoration: "none" }} to="/create">Create</Link>
            <Link style={{ color: "white", textDecoration: "none" }} to="/requests">Requests</Link>
        </nav>
    </header>
  )
}
export default Header