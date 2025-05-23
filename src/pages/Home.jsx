import React from "react"
import Header from "../components/Header"
import Search from "../components/Search"

function Home({ setSearchTerm }) {
  return (
    <>
    <Header />
    <Search setSearchTerm={setSearchTerm} />
    </>
  )
}

export default Home
