import React from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    View
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import WebView from 'react-native-webview';

const Meditasi = () => {
    const screenWidth = Dimensions.get('window').width;
    const videoHeight = (screenWidth - 32) * 9 / 16;


    return (
        <SafeAreaView className="flex-1 bg-amber-50">
        <StatusBar barStyle="dark-content" backgroundColor="#fefbf3" />

        {/* Header dengan Controls */}
        <View className="bg-white shadow-sm border-b border-amber-200 px-4 py-3">
            <View className="flex-row items-center justify-between mb-3">
            <Text className="text-2xl font-bold text-amber-800">🧘🏻‍♂️ Meditasi</Text>
            </View>

            <View className="flex-row items-center justify-center bg-amber-100 px-3 py-2 rounded-full">
            <FontAwesome5 name="clock" size={12} color="#92400e" style={{ marginRight: 6 }} />
            <Text className="text-amber-800 text-sm">Waktu Terbaik: Bangun tidur dan sebelum tidur</Text>
            </View>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            {/* Video Section */}
            <View className="bg-white mx-4 my-4 rounded-xl shadow-sm border border-amber-200">
            <View className="bg-red-600 p-4 rounded-t-xl">
                <View className="flex-row items-center">
                <FontAwesome5 name="youtube" size={20} color="white" style={{ marginRight: 8 }} />
                <Text className="text-white font-semibold">Video Panduan Meditasi</Text>
                </View>
            </View>
            <View className="p-4">
                <WebView
                source={{ uri: 'https://www.youtube.com/embed/xmep1pDou_0' }}
                style={{
                    width: screenWidth - 64,
                    height: videoHeight - 32,
                    borderRadius: 8,
                }}
                allowsFullscreenVideo
                />
            </View>
            </View>

            {/* Stats */}
            <View className="flex-row mx-4 mb-4 space-x-4">
            <View className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-amber-200 items-center">
                <Text className="text-2xl font-bold text-amber-600">~29</Text>
                <Text className="text-amber-700 text-sm">Menit</Text>
            </View>
            </View>


            {/* Footer */}
            <View className="mx-4 mb-6 bg-white p-6 rounded-xl shadow-sm border border-amber-200">
            <View className="items-center">
                <Text className="text-xl font-bold text-amber-800 mb-2">Selesaikan Meditasi</Text>
                <Text className="text-amber-700 text-center mb-4 leading-6">
                Setelah menyelesaikan semua bagian puja, dedikasikan merit untuk semua makhluk hidup.
                </Text>
                <View className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <Text className="text-yellow-800 italic text-center font-medium">
                    {"Sabbe satta bhavantu sukhitatta"}
                </Text>
                <Text className="text-yellow-700 text-center text-sm mt-1">
                    {"Semoga semua makhluk berbahagia"}
                </Text>
                </View>
            </View>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
};

export default Meditasi;