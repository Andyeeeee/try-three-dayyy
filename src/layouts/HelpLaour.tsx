import { NavLink, Outlet } from "react-router-dom"

export default function HelpLaour() {
  return (
    <div className="help-layout">
      <h2>website help</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum voluptate facere, quod incidunt, magnam ipsa in earum, soluta voluptatum accusantium blanditiis animi cum quos officia nam aperiam! Molestiae, modi? At.</p>

      <nav>
        <NavLink to="faq">faq</NavLink> <br />

        <NavLink to="contact">view the contact</NavLink>
      </nav>
      <Outlet />
    </div>

  )
}