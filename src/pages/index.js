import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"
let data = require("../data.json")

const listOfCards = data.map(el => {
  return (
    <Card class="card" title={el.title} link={el.link} image={el.image}></Card>
  )
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="cards-list">{listOfCards}</div>
  </Layout>
)

export default IndexPage
