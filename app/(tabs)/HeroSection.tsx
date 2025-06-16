import React from 'react'
import { Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native'

const HeroSection = () => {
  const screenHeight = Dimensions.get('window').height

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
            <TouchableOpacity className="bg-white px-8 py-3 rounded-lg shadow">
              <Text className="text-orange-600 font-semibold text-center">Mulai Belajar</Text>
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
