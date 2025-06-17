import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, SafeAreaView, ScrollView, View } from 'react-native';
import Navbar from '../../components/Navbar';
import Dashboard from './Dashboard';
import HeroSection from './HeroSection';
import Meditasi from './Meditasi';
import PujapagiScreen from './PujaPagi';
import Pujasore from './PujaSore';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('Dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);

  // Auto scroll to top ketika activeSection berubah
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  }, [activeSection]);

  // Handle back button behavior
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (activeSection !== 'Dashboard') {
        // Jika tidak di Dashboard, kembali ke Dashboard
        setActiveSection('Dashboard');
        return true; // Mencegah default behavior (menutup aplikasi)
      }
      // Jika sudah di Dashboard, biarkan aplikasi tertutup (return false)
      return false;
    });

    // Cleanup listener ketika component unmount
    return () => backHandler.remove();
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case 'Dashboard':
        return (
          <>
            <HeroSection setActiveSection={setActiveSection} />
            <Dashboard setActiveSection={setActiveSection} />
          </>
        );
      case 'PujaPagi':
        return <PujapagiScreen />;
      case 'PujaSore':
        return <Pujasore />;
      case 'Meditasi':
        return <Meditasi />;
      default:
        return (
          <>
            <HeroSection setActiveSection={setActiveSection} />
            <Dashboard setActiveSection={setActiveSection} />
          </>
        );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Fixed Navbar - tidak akan ikut scroll */}
      <View className="relative z-50">
        <Navbar
          activeSection={activeSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          setActiveSection={setActiveSection}
        />
      </View>
      
      {/* Scrollable Content Area */}
      <ScrollView 
        ref={scrollViewRef}
        className="flex-1 bg-gray-50"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;