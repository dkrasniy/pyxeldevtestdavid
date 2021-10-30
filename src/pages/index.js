import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = () => {
  let title = "Test home page"
  return (
    <div>
      <Layout title={title} />

      <div className="max-w-4xl mx-auto py-8">
        <h2 class="text-6xl font-semibold text-center">iPhone. So Pro</h2>
        <h2 class="text-4xl font-normal text-center my-3">Oh. So. Pro</h2>

      </div>

    </div>
  )
}

export default IndexPage
