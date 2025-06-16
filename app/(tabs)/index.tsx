import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import Navbar from '../../components/Navbar'
import Dashboard from './Dashboard'
import HeroSection from './HeroSection'
import Meditasi from './Meditasi'
import PujapagiScreen from './PujaPagi'
import Pujasore from './PujaSore'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <HeroSection />
            <Dashboard />
          </>
        )
      case 'morning':
        return <PujapagiScreen />;
      case 'evening':
        return <Pujasore />;
      case 'meditation':
        return <Meditasi />;
      default:
        return (
          <>
            <HeroSection />
            <Dashboard />
          </>
        )
    }
  }

  return (
    <ScrollView className="bg-gray-50 flex-1">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      {renderContent()}
    </ScrollView>
  )
}

export default App
