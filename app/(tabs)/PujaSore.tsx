    import React, { useRef, useState } from 'react';
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

    const { width } = Dimensions.get('window');

    const Pujasore = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTrack, setCurrentTrack] = useState<number | null>(null);
    const audioRef = useRef<any>(null);
    const screenWidth = Dimensions.get('window').width
    const videoHeight  = (screenWidth - 32) * 9 / 16

    const prayerSections = [
        {
        title: 'Namakāra Gāthā',
        duration: '4:30',
        description: 'Penghormatan kepada Tiratana (Buddha, Dhamma, Sangha)',
        audioUrl: '#',
        paliText: `Arahaṁ sammāsambuddho bhagavā
    Buddhaṁ bhagavantaṁ abhivādemi.

    Svākkhāto bhagavatā dhammo
    Dhammaṁ namassāmi.

    Supaṭipanno bhagavato sāvakasaṅgho
    Saṅghaṁ namāmi.`,
        translation: `Sang Bhagavā, Yang Maha Suci, Yang telah mencapai penerangan sempurna;
    Aku bersujud di hadapan Sang Buddha, Sang Bhagavā.

    Dhamma telah sempurna dibabarkan oleh Sang Bhagavā;
    Aku bersujud di hadapan Dhamma.

    Saṅgha Siswa Sang Bhagavā telah bertindak sempurna;
    Aku bersujud di hadapan Saṅgha.`
        },
        {
        title: 'Vandanā & Pūja Gāthā',
        duration: '3:15',
        description: 'Persiapan puja dan penghormatan awal',
        audioUrl: '#',
        paliText: `Namo Sanghyang Ādi Buddhāya (3X)
    Namo Tassa Bhagavato Arahato Sammāsambuddhassa (3X)
    Namo Sabbe Bodhisattāya-Mahasattāya (3X)`,
        translation: `Terpujilah Sanghyang Ādi Buddha, Tuhan Yang Maha Esa
    Terpujilah Sang Bhagavā, Yang Maha Suci, Yang telah mencapai Penerangan Sempurna
    Terpujilah para Bodhisatta - Mahasatta`
        },
        {
        title: 'Buddhābhitthutiṁ',
        duration: '5:20',
        description: 'Pujian kepada Buddha',
        audioUrl: '#',
        paliText: `Yo so tathāgato arahaṁ sammāsambuddho,
    vijjācaraṇasampanno sugato lokavidū, anuttaro
    purisadhammasārathi satthā devamanussānaṁ
    buddho bhagavā...`,
        translation: `Beliau Sang Tathāgata, Yang Maha Suci, yang telah mencapai penerangan sempurna, sempurna pengetahuan serta tindak tandukNya, sempurna menempuh Sang Jalan (ke Nibbāna)...`
        },
        {
        title: 'Dhammābhitthutiṁ & Saṅghābhitthutiṁ',
        duration: '4:45',
        description: 'Pujian kepada Dhamma dan Sangha',
        audioUrl: '#',
        paliText: `Yo so svākkhāto bhagavatā dhammo,
    sandiṭṭhiko akāliko ehipassiko...

    Yo so supaṭipanno bhagavato sāvakasaṅgho,
    Ujupaṭipanno bhagavato sāvakasaṅgho...`,
        translation: `Demikianlah Dhamma telah sempurna dibabarkan oleh Sang Bhagavā, berada sangat dekat, tak lapuk oleh waktu...

    Demikianlah Saṅgha Siswa Sang Bhagavā telah bertindak baik, telah bertindak lurus...`
        },
        {
        title: 'Ratanattayappaṇāmagāthā',
        duration: '6:10',
        description: 'Syair pemujaan Tiratana dan penghilang ketakutan',
        audioUrl: '#',
        paliText: `Buddho susuddho karuṇāmahaṇṇavo,
    Yoccantasuddhabbarañāṇalocano,
    Lokassa pāpūpakilesaghātako,
    Vandāmi Buddhaṁ ahamādarena taṁ...`,
        translation: `Sang Buddha yang benar-benar murni pemilik kasih sayang seluas samudra,
    Pemilik mata kebijaksanaan murni yang tiada taranya,
    Penakluk kekotoran batin dan kejahatan di dunia,
    Aku memuja dengan penuh keyakinan kepada Buddha...`
        },
        {
        title: 'Perenungan & Pelimpahan Jasa',
        duration: '4:20',
        description: 'Abhiṇhappaccavekkhaṇa dan Uddisanadhiṭṭhāna',
        audioUrl: '#',
        paliText: `Jarādhammomhi, Jaraṁ anatīto.
    Byādhidhammomhi, Byādhiṁ anatīto...

    Iminā puññakammena
    Upajjhāyā guṇuttarā...`,
        translation: `Aku akan mengalami penuaan, Aku belum mengatasi penuaan.
    Aku akan menderita sakit, Aku belum mengatasi sakit...

    Ku persembahkan kebajikan yang telah ku lakukan untuk
    Guru Spiritual tertinggi...`
        }
    ];

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
                Waktu Terbaik: 17:00 - 19:00 WIB
                </Text>
            </View>
            <Text className="text-4xl font-bold text-gray-900 mb-4 text-center">
                🌅 Puja Sore
            </Text>
            <Text className="text-lg text-gray-600 text-center px-4 mb-6 leading-6">
                Mulai hari Anda dengan puja Sore yang membawa ketenangan, berkah, dan energi positif untuk menjalani aktivitas sehari-hari.
            </Text>
            </View>

            {/* Video Section */}
            <View className="mb-8">
            <View className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <View className="bg-red-600 p-6">
                <View className="flex-row items-center justify-between">
                    <View className="flex-1">
                    <Text className="text-xl font-semibold text-white mb-2">
                        📺 Video Panduan Puja Sore Lengkap
                    </Text>
                    <Text className="text-red-100 text-sm">
                        Ikuti panduan lengkap puja Sore dengan video tutorial
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

            {/* Prayer Stats */}
            <View className="flex-row justify-between mb-8 space-x-4">
            <View className="flex-1 bg-white p-6 rounded-2xl shadow-lg items-center">
                <Text className="text-3xl font-bold text-orange-600 mb-2">6</Text>
                <Text className="text-gray-600 text-center">Bagian Puja</Text>
            </View>
            <View className="flex-1 bg-white p-6 rounded-2xl shadow-lg items-center">
                <Text className="text-3xl font-bold text-orange-600 mb-2">~28</Text>
                <Text className="text-gray-600 text-center">Menit Total</Text>
            </View>
            <View className="flex-1 bg-white p-6 rounded-2xl shadow-lg items-center">
                <Text className="text-3xl font-bold text-orange-600 mb-2">1,247</Text>
                <Text className="text-gray-600 text-center">Praktisi Hari Ini</Text>
            </View>
            </View>

            {/* Prayer Sections */}
            <View className="space-y-4">
            {prayerSections.map((section, index) => (
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
                        <Text className="font-semibold text-gray-900 mb-3 text-center">Teks Pali</Text>
                        <View className="bg-orange-50 p-4 rounded-xl">
                        <Text className="text-sm text-gray-800 leading-6" style={{ fontFamily: 'monospace' }}>
                            {section.paliText}
                        </Text>
                        </View>
                    </View>
                    <View>
                        <Text className="font-semibold text-gray-900 mb-3 text-center">Terjemahan</Text>
                        <View className="bg-blue-50 p-4 rounded-xl">
                        <Text className="text-sm text-gray-800 leading-6">
                            {section.translation}
                        </Text>
                        </View>
                    </View>
                    </View>
                </View>
                </View>
            ))}
            </View>

            {/* Footer Actions */}
            <View className="mt-12 mb-8">
            <View className="bg-white rounded-2xl shadow-lg p-8">
                <Text className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Selesaikan Puja Sore Anda
                </Text>
                <Text className="text-gray-600 mb-6 text-center leading-6">
                Setelah menyelesaikan semua bagian puja, jangan lupa untuk mendedikasikan merit untuk semua makhluk hidup.
                </Text>
                <View className="space-y-3">
                <TouchableOpacity className="bg-orange-600 px-8 py-4 rounded-xl">
                    <Text className="text-white font-semibold text-center">Tandai Selesai</Text>
                </TouchableOpacity>
                <TouchableOpacity className="border-2 border-orange-600 px-8 py-4 rounded-xl">
                    <Text className="text-orange-600 font-semibold text-center">Bagikan Merit</Text>
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

    export default Pujasore;