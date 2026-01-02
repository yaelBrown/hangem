import  { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      Footer
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/error">Error</Link></li>
      </ul>
    </footer>
  )
}
