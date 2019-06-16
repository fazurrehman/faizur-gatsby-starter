import React from "react"
import "../assets/css/base.sass"
import s from "../assets/module/module.module.sass"

const Header = () => (
  <div
    className="container"
    style={{ textAlign: `center`, margin: `12rem auto 1rem auto` }}
  >
    <h1 className={s.title}>Faizur Gatsby Starter</h1>
  </div>
)

export default Header
