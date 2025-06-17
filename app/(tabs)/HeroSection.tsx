import React from 'react';
import { Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection = ({ setActiveSection }: HeroSectionProps) => {
  const screenHeight = Dimensions.get('window').height

  const handleMulaiPuja = () => {
    const currentHour = new Date().getHours()
    console.log('Current hour:', currentHour)
    
    // Jam 1 pagi (01:00) sampai jam 12 siang (12:00) = Puja Pagi
    // Jam 1 siang (13:00) sampai jam 12 malam (00:00) = Puja Sore
    if (currentHour >= 1 && currentHour <= 12) {
      console.log('Navigating to puja pagi')
      setActiveSection('PujaPagi')
    } else {
      console.log('Navigating to puja sore')
      setActiveSection('PujaSore')
    }
  }

  return (
    <ImageBackground
        source={require('@/assets/images/candi-borobudur.webp')}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
      {/* Overlay */}
      <View className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <View className="relative px-6 py-24">
        <View className="items-center">
          <Text className="text-white text-4xl font-bold mb-6 text-center">
            Selamat Datang di Buddhayana Digital
          </Text>
          <Text className="text-white text-lg opacity-90 text-center mb-8">
            Platform edukasi Buddhist untuk memperdalam praktik spiritual Anda melalui puja, meditasi, dan pembelajaran Dharma
          </Text>
          <View className="flex-row flex-wrap justify-center gap-4">
            <TouchableOpacity 
              className="bg-white px-8 py-3 rounded-lg shadow"
              onPress={handleMulaiPuja}
            >
              <Text className="text-orange-600 font-semibold text-center">Mulai Puja</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border-2 border-white px-8 py-3 rounded-lg">
              <Text className="text-white font-semibold text-center">Lihat Panduan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default HeroSection