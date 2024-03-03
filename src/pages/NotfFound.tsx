import { Link } from "react-router-dom"

export default function NotfFound() {
  return (
    <div className="not-found">
      <h2>找不到頁面</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum voluptate velit? Numquam corporis debitis in voluptatum perferendis illo atque officia tempore aperiam fugiat placeat iusto itaque esse, magnam optio?</p>
      <p>Go to the <Link to="./">Home</Link></p>
    </div>
  )
}