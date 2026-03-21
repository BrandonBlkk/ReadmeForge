import React, { useState } from 'react'
import ReadmeBuilder from '../components/ReadmeBuilder'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Home = () => {
  const [activePanel, setActivePanel] = useState('add')

  return (
    <div className="flex min-h-screen bg-zinc-950 font-sans text-zinc-50 antialiased selection:bg-blue-500 selection:text-white">
      {/* Slim Sidebar */}
      <Sidebar activePanel={activePanel} onPanelChange={setActivePanel} />

      {/* Main Content Area */}
      <div
        className="ml-12 flex min-h-screen flex-1 flex-col"
      >
        <ReadmeBuilder activePanel={activePanel} />
        <Footer />
      </div>
    </div>
  )
}

export default Home
