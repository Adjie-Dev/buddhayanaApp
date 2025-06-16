    import React from 'react'
import { Dimensions, ScrollView, Text, View } from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { WebView } from 'react-native-webview'

    const Meditasi = () => {
        const screenWidth = Dimensions.get('window').width
        const videoHeight  = (screenWidth - 32) * 9 / 16
    return (
        <ScrollView className="min-h-screen bg-orange-50 py-8 px-4">
        {/* Header */}
        <View className="mb-8">
            <Text className="text-4xl font-bold text-gray-900 mb-4 text-center">🧘‍♂️ Meditasi</Text>
            <Text className="text-xl text-gray-600 text-center mb-6">
            Mulai hari Anda dengan Meditasi yang membawa ketenangan, berkah, dan energi positif untuk menjalani aktivitas sehari-hari.
            </Text>
        </View>

        {/* Video Section */}
        <View className="mb-8">
            <View className="bg-white rounded-lg shadow-lg overflow-hidden">
            <View className="bg-red-600 p-6">
                <View className="flex-row items-center justify-between">
                <View className="flex-1 pr-4">
                    <Text className="text-2xl font-semibold text-white mb-2">Video Panduan Meditasi Lengkap</Text>
                    <Text className="text-red-100">Ikuti panduan lengkap Meditasi dengan video tutorial</Text>
                </View>
                <FontAwesome5 name="youtube" size={40} color="#fff" style={{ opacity: 0.8 }} />
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

        {/* Prayer Stats */}
        <View className="mb-8 space-y-6">
            {[
            { value: '6', label: 'Bagian Meditasi' },
            { value: '~28', label: 'Menit Total' },
            { value: '1,247', label: 'Praktisi Hari Ini' },
            ].map((item, idx) => (
            <View key={idx} className="bg-white p-6 rounded-lg shadow-lg items-center">
                <Text className="text-3xl font-bold text-orange-600 mb-2">{item.value}</Text>
                <Text className="text-gray-600">{item.label}</Text>
            </View>
            ))}
        </View>

        {/* Footer */}
        <View className="mt-12">
            <View className="bg-white rounded-lg shadow-lg p-8">
                <Text className="text-2xl font-semibold text-gray-900 mb-4 text-center">Selesaikan meditasi Anda</Text>
                <Text className="text-gray-600 mb-6 text-center">
                    Setelah menyelesaikan semua bagian puja, jangan lupa untuk mendedikasikan merit untuk semua makhluk hidup.
                </Text>
                <View className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <Text className="text-sm text-yellow-800 italic text-center">
                        {"\"Sabbe satta bhavantu sukhitatta\" – Semoga semua makhluk berbahagia."}
                    </Text>
                </View>
            </View>
        </View>
        </ScrollView>
    )
    }

    export default Meditasi
