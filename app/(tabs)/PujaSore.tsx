import { PujaSore } from '@/pujaData/PujaSore';
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

const Pujasore = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTrack, setCurrentTrack] = useState<number | null>(null);
    const [fontSize, setFontSize] = useState<number>(16);
    // const [showTranslation, setShowTranslation] = useState<boolean>(false);
    const [sectionTranslations, setSectionTranslations] = useState<{[key: number]: boolean}>({});
    const screenWidth = Dimensions.get('window').width;
    const videoHeight = (screenWidth - 32) * 9 / 16;

    const handlePlayPause = (index: number) => {
        if (currentTrack === index && isPlaying) {
        setIsPlaying(false);
        setCurrentTrack(null);
        } else {
        setIsPlaying(true);
        setCurrentTrack(index);
        }
    };

    const adjustFontSize = (increase: boolean) => {
        setFontSize(prev => {
        const newSize = increase ? prev + 2 : prev - 2;
        return Math.max(12, Math.min(24, newSize));
        });
    };

    const getFontSizeLabel = () => {
        if (fontSize <= 12) return 'Kecil';
        if (fontSize <= 16) return 'Sedang';
        if (fontSize <= 20) return 'Besar';
        return 'Sangat Besar';
    };

    const toggleSectionTranslation = (sectionIndex: number) => {
        setSectionTranslations(prev => ({
        ...prev,
        [sectionIndex]: !prev[sectionIndex]
        }));
    };

    const isSectionTranslationVisible = (sectionIndex: number) => {
        return sectionTranslations[sectionIndex] ?? false;
    };

    return (
        <SafeAreaView className="flex-1 bg-amber-50">
        <StatusBar barStyle="dark-content" backgroundColor="#fefbf3" />

        {/* Header dengan Controls */}
        <View className="bg-white shadow-sm border-b border-amber-200 px-4 py-3">
            <View className="flex-row items-center justify-between mb-3">
            <Text className="text-2xl font-bold text-amber-800">🌅 Puja Sore</Text>
            </View>

            <View className="flex-row items-center justify-center bg-amber-100 px-3 py-2 rounded-full">
            <FontAwesome5 name="clock" size={12} color="#92400e" style={{ marginRight: 6 }} />
            <Text className="text-amber-800 text-sm">Waktu Terbaik: 05:00 - 07:00 WIB</Text>
            </View>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
            {/* Video Section */}
            <View className="bg-white mx-4 my-4 rounded-xl shadow-sm border border-amber-200">
            <View className="bg-red-600 p-4 rounded-t-xl">
                <View className="flex-row items-center">
                <FontAwesome5 name="youtube" size={20} color="white" style={{ marginRight: 8 }} />
                <Text className="text-white font-semibold">Video Panduan Puja Sore</Text>
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
                <Text className="text-2xl font-bold text-amber-600">6</Text>
                <Text className="text-amber-700 text-sm">Bagian</Text>
            </View>
            <View className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-amber-200 items-center">
                <Text className="text-2xl font-bold text-amber-600">~28</Text>
                <Text className="text-amber-700 text-sm">Menit</Text>
            </View>
            </View>

            {/* Enhanced Custom Font Section */}
            <View className="mx-4 mb-4 bg-white rounded-xl shadow-sm border border-amber-200">
            {/* Header */}
            <View className="bg-amber-600 p-4 rounded-t-xl">
                <View className="flex-row items-center">
                <View className="bg-amber-500 p-2 rounded-full mr-3">
                    <FontAwesome5 name="text-height" size={16} color="white" />
                </View>
                <View className="flex-1">
                    <Text className="text-white font-bold text-lg">Pengaturan Tampilan</Text>
                    <Text className="text-amber-100 text-sm">Sesuaikan ukuran teks</Text>
                </View>
                </View>
            </View>

            {/* Content */}
            <View className="p-4">
                {/* Font Size Controls */}
                <View className="mb-4">
                <View className="flex-row items-center mb-3">
                    <FontAwesome5 name="font" size={14} color="#92400e" style={{ marginRight: 8 }} />
                    <Text className="text-amber-800 font-semibold">Ukuran Huruf</Text>
                    <View className="ml-2 bg-amber-100 px-2 py-1 rounded-full">
                    <Text className="text-amber-700 text-xs font-medium">{getFontSizeLabel()}</Text>
                    </View>
                </View>
                
                <View className="flex-row items-center justify-between bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <TouchableOpacity
                    onPress={() => adjustFontSize(false)}
                    className={`flex-row items-center justify-center p-3 rounded-lg ${
                        fontSize <= 12 ? 'bg-gray-200' : 'bg-amber-100'
                    }`}
                    disabled={fontSize <= 12}
                    style={{ flex: 1, marginRight: 8 }}
                    >
                    <FontAwesome5
                        name="minus"
                        size={16}
                        color={fontSize <= 12 ? '#9ca3af' : '#92400e'}
                        style={{ marginRight: 6 }}
                    />
                    <Text className={`font-semibold ${fontSize <= 12 ? 'text-gray-400' : 'text-amber-800'}`}>
                        Kecil
                    </Text>
                    </TouchableOpacity>

                    {/* Font Size Indicator */}
                    <View className="px-4">
                    <View className="flex-row items-center" style={{ gap: 4 }}>
                        {[12, 14, 16, 18, 20, 22, 24].map((size) => (
                        <View
                            key={size}
                            className={`w-2 h-2 rounded-full ${
                            fontSize === size ? 'bg-amber-600' : 'bg-amber-200'
                            }`}
                        />
                        ))}
                    </View>
                    <Text className="text-center text-amber-700 text-xs mt-1 font-medium">
                        {fontSize}px
                    </Text>
                    </View>

                    <TouchableOpacity
                    onPress={() => adjustFontSize(true)}
                    className={`flex-row items-center justify-center p-3 rounded-lg ${
                        fontSize >= 24 ? 'bg-gray-200' : 'bg-amber-100'
                    }`}
                    disabled={fontSize >= 24}
                    style={{ flex: 1, marginLeft: 8 }}
                    >
                    <FontAwesome5
                        name="plus"
                        size={16}
                        color={fontSize >= 24 ? '#9ca3af' : '#92400e'}
                        style={{ marginRight: 6 }}
                    />
                    <Text className={`font-semibold ${fontSize >= 24 ? 'text-gray-400' : 'text-amber-800'}`}>
                        Besar
                    </Text>
                    </TouchableOpacity>
                </View>
                </View>

                {/* Translation Toggle */}
                {/* <View className="mb-4">
                <View className="flex-row items-center mb-3">
                    <FontAwesome5 name="language" size={14} color="#059669" style={{ marginRight: 8 }} />
                    <Text className="text-emerald-700 font-semibold">Terjemahan</Text>
                </View>

                <TouchableOpacity
                    onPress={() => setShowTranslation(!showTranslation)}
                    className="flex-row items-center justify-between bg-emerald-50 p-3 rounded-lg border border-emerald-200"
                >
                    <View className="flex-row items-center">
                    <View className={`w-5 h-5 rounded-full mr-3 border-2 items-center justify-center ${
                        showTranslation ? 'bg-emerald-600 border-emerald-600' : 'bg-transparent border-gray-300'
                    }`}>
                        {showTranslation && (
                        <FontAwesome5 name="check" size={12} color="white" />
                        )}
                    </View>
                    <Text className={`font-semibold ${showTranslation ? 'text-emerald-700' : 'text-gray-600'}`}>
                        {showTranslation ? 'Tampilkan Terjemahan' : 'Sembunyikan Terjemahan'}
                    </Text>
                    </View>
                    <FontAwesome5
                    name={showTranslation ? "eye" : "eye-slash"}
                    size={16}
                    color={showTranslation ? '#059669' : '#6b7280'}
                    />
                </TouchableOpacity>
                </View> */}

                {/* Preview Text */}
                <View className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                <Text className="text-amber-600 text-xs font-medium mb-2">PRATINJAU:</Text>
                <Text
                    className="text-amber-900"
                    style={{
                    fontSize: fontSize,
                    lineHeight: fontSize * 1.6,
                    fontFamily: 'serif',
                    }}
                >
                    Namo tassa bhagavato arahato sammāsambuddhassa
                </Text>
                {false && (
                    <Text
                    className="text-emerald-700 mt-2"
                    style={{
                        fontSize: fontSize - 1,
                        lineHeight: (fontSize - 1) * 1.5,
                    }}
                    >
                    Penghormatan kepada Sang Bhagavā, Arahant, Sammāsambuddha
                    </Text>
                )}
                </View>
            </View>
            </View>

            {/* Puja Sections */}
            {PujaSore.map((section, index) => (
            <View key={index} className="mx-4 mb-4 bg-white rounded-xl shadow-sm border border-amber-200">
                {/* Section Header */}
                <View className="bg-amber-600 p-4 rounded-t-xl">
                <View className="flex-row items-center justify-between mb-3">
                    <View className="flex-1">
                    <Text className="text-white font-bold text-lg mb-1">{section.title}</Text>
                    <Text className="text-amber-100 text-sm">{section.description}</Text>
                    </View>
                    <View className="items-end">
                    <View className="bg-amber-500 px-2 py-1 rounded-full">
                        <Text className="text-white text-xs font-medium">{section.duration}</Text>
                    </View>
                    </View>
                </View>

                {/* Translation Toggle for this section */}
                <TouchableOpacity
                    onPress={() => toggleSectionTranslation(index)}
                    className="flex-row items-center justify-between bg-amber-500 bg-opacity-30 p-3 rounded-lg border border-amber-400 border-opacity-30"
                >
                    <View className="flex-row items-center">
                    <View className={`w-5 h-5 rounded-full mr-3 border-2 items-center justify-center ${
                        isSectionTranslationVisible(index) ? 'bg-white border-white' : 'bg-transparent border-amber-200'
                    }`}>
                        {isSectionTranslationVisible(index) && (
                        <FontAwesome5 name="check" size={12} color="#d97706" />
                        )}
                    </View>
                    <Text className={`font-semibold ${isSectionTranslationVisible(index) ? 'text-white' : 'text-amber-100'}`}>
                        {isSectionTranslationVisible(index) ? 'Sembunyikan Terjemahan' : 'Tampilkan Terjemahan'}
                    </Text>
                    </View>
                    <FontAwesome5
                    name={isSectionTranslationVisible(index) ? "eye-slash" : "eye"}
                    size={16}
                    color={isSectionTranslationVisible(index) ? 'white' : '#fbbf24'}
                    />
                </TouchableOpacity>
                </View>

                <View className="p-4">
                {/* Audio Controls */}
                <View className="mb-4">
                    <TouchableOpacity
                    onPress={() => handlePlayPause(index)}
                    className={`flex-row items-center justify-center py-3 px-4 rounded-lg ${
                        currentTrack === index && isPlaying
                        ? 'bg-amber-600'
                        : 'bg-amber-100'
                    }`}
                    >
                    <FontAwesome5
                        name={currentTrack === index && isPlaying ? "pause" : "play"}
                        size={16}
                        color={currentTrack === index && isPlaying ? "white" : "#92400e"}
                        style={{ marginRight: 8 }}
                    />
                    <Text className={`font-semibold ${
                        currentTrack === index && isPlaying ? 'text-white' : 'text-amber-800'
                    }`}>
                        {currentTrack === index && isPlaying ? 'Jeda Audio' : 'Putar Audio'}
                    </Text>
                    </TouchableOpacity>

                    {/* Audio Progress */}
                    {currentTrack === index && isPlaying && (
                    <View className="mt-3 p-3 bg-amber-50 rounded-lg">
                        <View className="flex-row items-center">
                        <FontAwesome5 name="volume-up" size={14} color="#92400e" style={{ marginRight: 8 }} />
                        <View className="flex-1 bg-amber-200 rounded-full h-2 mr-3">
                            <View className="bg-amber-600 h-2 rounded-full" style={{ width: '33%' }} />
                        </View>
                        <Text className="text-xs text-amber-700">1:15 / {section.duration}</Text>
                        </View>
                    </View>
                    )}
                </View>

                {/* Pali Text */}
                <View className="mb-4">
                    <View className="flex-row items-center mb-3">
                    <FontAwesome5 name="book" size={16} color="#92400e" style={{ marginRight: 8 }} />
                    <Text className="text-amber-800 font-bold">Teks Pali</Text>
                    </View>
                    <View className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    {section.paliText.split('\n').map((line, lineIndex) => (
                        <Text
                        key={lineIndex}
                        className="text-amber-900 mb-1"
                        style={{
                            fontSize: fontSize,
                            lineHeight: fontSize * 1.6,
                            fontFamily: 'serif',
                            textAlign: 'justify',
                            marginBottom: line.trim() === '' ? 8 : 2,
                        }}
                        >
                        {line.trim() === '' ? ' ' : line}
                        </Text>
                    ))}
                    </View>
                </View>

                {/* Translation */}
                {isSectionTranslationVisible(index) && (
                    <View>
                    <View className="flex-row items-center mb-3">
                        <FontAwesome5 name="language" size={16} color="#059669" style={{ marginRight: 8 }} />
                        <Text className="text-emerald-700 font-bold">Terjemahan</Text>
                    </View>
                    <View className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                        {section.translation.split('\n').map((line, lineIndex) => (
                        <Text
                            key={lineIndex}
                            className="text-emerald-900 mb-1"
                            style={{
                            fontSize: fontSize - 1,
                            lineHeight: (fontSize - 1) * 1.5,
                            textAlign: 'justify',
                            marginBottom: line.trim() === '' ? 8 : 2,
                            }}
                        >
                            {line.trim() === '' ? ' ' : line}
                        </Text>
                        ))}
                    </View>
                    </View>
                )}
                </View>
            </View>
            ))}

            {/* Footer */}
            <View className="mx-4 mb-6 bg-white p-6 rounded-xl shadow-sm border border-amber-200">
            <View className="items-center">
                <Text className="text-xl font-bold text-amber-800 mb-2">Selesaikan Puja Sore</Text>
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

export default Pujasore;