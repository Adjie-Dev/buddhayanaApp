import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection = ({ setActiveSection }: HeroSectionProps) => {
  // const screenHeight = Dimensions.get('window').height

  const handleMulaiPuja = () => {
    const now = new Date()
    const currentHour = now.getHours()
    console.log('Full date:', now.toString())
    console.log('Current hour:', currentHour)
    console.log('Hour >= 0:', currentHour >= 0)
    console.log('Hour <= 11:', currentHour <= 11)
    console.log('Condition result:', currentHour >= 0 && currentHour <= 11)

    // Jam 00:00 sampai sebelum jam 12:00 siang = Puja Pagi
    // Jam 12:00 siang sampai jam 23:59 = Puja Sore
    if (currentHour >= 0 && currentHour <= 11) {
      console.log('Navigating to puja pagi')
      setActiveSection('PujaPagi')
    } else {
      console.log('Navigating to puja sore')
      setActiveSection('PujaSore')
    }
  }

  const handleLihatPanduan = () => {
    setActiveSection('Panduan')
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
            <TouchableOpacity
              className="border-2 border-white px-8 py-3 rounded-lg"
              onPress={handleLihatPanduan}
            >
              <Text className="text-white font-semibold text-center">Lihat Panduan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default HeroSection