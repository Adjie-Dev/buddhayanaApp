import { PujaPagi } from '@/pujaData/PujaPagi';
import React, { useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WebView from 'react-native-webview';

// const { width } = Dimensions.get('window');

const Pujapagi = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  // const audioRef = useRef<any>(null);
  const screenWidth = Dimensions.get('window').width
  const videoHeight  = (screenWidth - 32) * 9 / 16

  const handlePlayPause = (index: number) => {
    if (currentTrack === index && isPlaying) {
      setIsPlaying(false);
      setCurrentTrack(null);
    } else {
      setIsPlaying(true);
      setCurrentTrack(index);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      <StatusBar barStyle="dark-content" backgroundColor="#fff7ed" />
      <ScrollView className="flex-1 px-4 py-6" showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View className="items-center mb-8">
          <View className="flex-row items-center bg-orange-100 px-4 py-2 rounded-full mb-4">
            <FontAwesome5 name="clock" size={16} color="#ea580c" style={{ marginRight: 8 }} />
            <Text className="text-orange-800 text-sm font-medium">
              Waktu Terbaik: 05:00 - 07:00 WIB
            </Text>
          </View>
          <Text className="text-4xl font-bold text-gray-900 mb-4 text-center">
            🌅 Puja Pagi
          </Text>
          <Text className="text-lg text-gray-600 text-center px-4 mb-6 leading-6">
            Mulai hari Anda dengan puja pagi yang membawa ketenangan, berkah, dan energi positif untuk menjalani aktivitas sehari-hari.
          </Text>
        </View>

        {/* Video Section */}
        <View className="mb-8">
          <View className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <View className="bg-red-600 p-6">
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-xl font-semibold text-white mb-2">
                    📺 Video Panduan Puja Pagi Lengkap
                  </Text>
                  <Text className="text-red-100 text-sm">
                    Ikuti panduan lengkap puja pagi dengan video tutorial
                  </Text>
                </View>
                <FontAwesome5 name="youtube" size={32} color="white" style={{ opacity: 0.8 }} />
              </View>
            </View>
            <View className="p-6">
              <View className="items-center justify-center mb-4">
                <WebView
                  source={{ uri: 'https://www.youtube.com/embed/xmep1pDou_0' }}
                  style={{
                    width: screenWidth - 32,
                    height: videoHeight,
                    borderRadius: 12,
                    overflow: 'hidden',
                  }}
                  allowsFullscreenVideo
                />
              </View>
            </View>
          </View>
        </View>

        {/* Puja Stats */}
        <View className="flex-row justify-between mb-8 space-x-4">
          <View className="flex-1 bg-white p-6 rounded-2xl shadow-lg items-center mx-2">
            <Text className="text-3xl font-bold text-orange-600 mb-2">6</Text>
            <Text className="text-gray-600 text-center">Bagian Puja</Text>
          </View>
          <View className="flex-1 bg-white p-6 rounded-2xl shadow-lg items-center mx-2">
            <Text className="text-3xl font-bold text-orange-600 mb-2">~28</Text>
            <Text className="text-gray-600 text-center">Menit Total</Text>
          </View>
        </View>

        {/* Puja Sections */}
        <View className="space-y-4">
          {PujaPagi.map((section, index) => (
            <View key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden mb-3">
              <View className="p-6">
                <View className="mb-4">
                  <Text className="text-xl font-semibold text-gray-900 mb-2">
                    {section.title}
                  </Text>
                  <Text className="text-gray-600 mb-3 leading-5">{section.description}</Text>
                  <View className="flex-row items-center mb-4">
                    <FontAwesome5 name="clock" size={14} color="#6b7280" style={{ marginRight: 4 }} />
                    <Text className="text-sm text-gray-500">{section.duration}</Text>
                  </View>
                </View>

                {/* Audio Player */}
                <TouchableOpacity
                  onPress={() => handlePlayPause(index)}
                  className={`flex-row items-center justify-center px-4 py-3 rounded-xl mb-6 ${
                    currentTrack === index && isPlaying
                      ? 'bg-orange-600'
                      : 'bg-orange-100'
                  }`}
                >
                  <FontAwesome5 
                    name={currentTrack === index && isPlaying ? "pause" : "play"} 
                    size={16} 
                    color={currentTrack === index && isPlaying ? "white" : "#ea580c"} 
                    style={{ marginRight: 8 }} 
                  />
                  <Text className={`font-semibold ${
                    currentTrack === index && isPlaying ? 'text-white' : 'text-orange-600'
                  }`}>
                    {currentTrack === index && isPlaying ? 'Pause Audio' : 'Play Audio'}
                  </Text>
                </TouchableOpacity>

                {/* Audio Progress Bar */}
                {currentTrack === index && isPlaying && (
                  <View className="mb-6 pt-4 border-t border-gray-200">
                    <View className="flex-row items-center">
                      <FontAwesome5 name="volume-up" size={16} color="#9ca3af" style={{ marginRight: 12 }} />
                      <View className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                        <View className="bg-orange-500 h-2 rounded-full" style={{ width: '33%' }} />
                      </View>
                      <Text className="text-sm text-gray-500">1:15 / {section.duration}</Text>
                    </View>
                  </View>
                )}

                {/* Text Content - Always Visible */}
                <View className="space-y-6">
                  <View>
                    <Text className="font-bold text-gray-900 mb-4 text-center text-lg">📿 Teks Pali</Text>
                    <View className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                      {section.paliText.split('\n').map((line, lineIndex) => (
                        <Text 
                          key={lineIndex}
                          className="text-gray-800" 
                          style={{ 
                            fontSize: 16,
                            lineHeight: 28,
                            fontFamily: 'serif',
                            textAlign: 'left',
                            marginBottom: line.trim() === '' ? 12 : 4,
                            fontWeight: '500'
                          }}
                        >
                          {line.trim() === '' ? ' ' : line}
                        </Text>
                      ))}
                    </View>
                  </View>
                  <View>
                    <Text className="font-bold text-gray-900 mb-4 text-center text-lg">🙏 Terjemahan</Text>
                    <View className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      {section.translation.split('\n').map((line, lineIndex) => (
                        <Text 
                          key={lineIndex}
                          className="text-gray-800"
                          style={{ 
                            fontSize: 15,
                            lineHeight: 26,
                            textAlign: 'left',
                            marginBottom: line.trim() === '' ? 12 : 4,
                            fontWeight: '400'
                          }}
                        >
                          {line.trim() === '' ? ' ' : line}
                        </Text>
                      ))}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View className="mt-12 mb-8">
          <View className="bg-white rounded-2xl shadow-lg p-8">
            <Text className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Selesaikan Puja Pagi Anda
            </Text>
            <Text className="text-gray-600 mb-6 text-center leading-6">
              Setelah menyelesaikan semua bagian puja, jangan lupa untuk mendedikasikan merit untuk semua makhluk hidup.
            </Text>
            <View className="space-y-3">
              <TouchableOpacity className="bg-orange-600 px-8 py-4 rounded-xl mb-2">
                <Text className="text-white font-semibold text-center">Kembali ke Beranda</Text>
              </TouchableOpacity>
              <TouchableOpacity className="border-2 border-orange-600 px-8 py-4 rounded-xl">
                <Text className="text-orange-600 font-semibold text-center">Lanjut Meditasi</Text>
              </TouchableOpacity>
            </View>

            <View className="mt-6 p-4 bg-yellow-50 rounded-xl">
              <Text className="text-sm text-yellow-800 italic text-center">
                {"\"Sabbe satta bhavantu sukhitatta\" – Semoga semua makhluk berbahagia."}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pujapagi;