import { Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout"
import { HomePage } from "@/pages/home"
import { ExplorePage } from "@/pages/explore"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </Layout>
  )
}

export default App
