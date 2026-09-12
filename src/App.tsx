import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectLayout from './pages/ProjectLayout'
import ProjectOverview from './pages/ProjectOverview'
import ProjectSection from './pages/ProjectSection'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path=":projectId" element={<ProjectLayout />}>
            <Route index element={<ProjectOverview />} />
            <Route path=":sectionId" element={<ProjectSection />} />
          </Route>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
