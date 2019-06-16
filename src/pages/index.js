import React from "react"
import { Link } from "gatsby"
import Header from "../components/header/header"
import Image from "../components/assets/module/image"

const IndexPage = () => (
  <div>
    <Header></Header>
    <p style={{ textAlign: `center`, fontSize: `24px` }}>
      <Link to="https://www.instagram.com/fazurrehman/">
        Instagram: @fazurrehman
      </Link>
    </p>
    <div style={{ textAlign: `center`, width: `200px`, margin: `4rem auto` }}>
      <Image alt="Gatsby in Space" filename="faizurrehman.png" />
    </div>
  </div>
)

export default IndexPage
