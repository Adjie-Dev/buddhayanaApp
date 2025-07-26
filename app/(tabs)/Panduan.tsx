import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface PanduanProps {
  setActiveSection: (section: string) => void;
}

const Panduan = ({ setActiveSection }: PanduanProps) => {
  const handlePujaSore = () => {
    setActiveSection('PujaSore');
  };

  const handlePujaPagi = () => {
    setActiveSection('PujaPagi');
    console.log('Navigating to puja pagi');
  };

  const handleMeditasi = () => {
    setActiveSection('Meditasi');
  };

  return (
    <SafeAreaView className="flex-1 bg-amber-50">
      <StatusBar barStyle="dark-content" backgroundColor="#fefbf3" />

      {/* Header */}
      <View className="bg-white shadow-sm border-b border-amber-200 px-4 py-3">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-2xl font-bold text-amber-800">📖 Panduan Spiritual</Text>
        </View>

        <View className="flex-row items-center justify-center bg-amber-100 px-3 py-2 rounded-full">
          <FontAwesome5 name="lightbulb" size={12} color="#92400e" style={{ marginRight: 6 }} />
          <Text className="text-amber-800 text-sm">Pelajari praktik spiritual harian</Text>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Introduction */}
        <View className="bg-white mx-4 my-4 rounded-xl shadow-sm border border-amber-200">
          <View className="bg-amber-600 p-4 rounded-t-xl">
            <View className="flex-row items-center">
              <FontAwesome5 name="info-circle" size={20} color="white" style={{ marginRight: 8 }} />
              <Text className="text-white font-semibold">Pengenalan</Text>
            </View>
          </View>
          <View className="p-4">
            <Text className="text-amber-900 text-base leading-6 mb-3">
              Aplikasi Buddhayana Digital menyediakan tiga praktik spiritual utama untuk mendukung perjalanan spiritual Anda sehari-hari.
            </Text>
            <Text className="text-amber-700 text-sm">
              Setiap praktik memiliki waktu, durasi, dan manfaat yang berbeda. Pilih sesuai dengan kebutuhan dan jadwal Anda.
            </Text>
          </View>
        </View>

        {/* Puja Pagi Card */}
        <View className="mx-4 mb-4 bg-white rounded-xl shadow-sm border border-amber-200">
          <View className="bg-amber-600 p-4 rounded-t-xl">
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-1">
                <View className="flex-row items-center mb-2">
                  <FontAwesome5 name="sun" size={24} color="white" style={{ marginRight: 12 }} />
                  <Text className="text-white font-bold text-xl">Puja Pagi</Text>
                </View>
                <Text className="text-white text-opacity-90 text-sm">Memulai hari dengan doa dan meditasi pagi</Text>
              </View>
            </View>
          </View>

          <View className="p-4">
            <View className="flex-row mb-4 space-x-4">
              <View className="flex-1 bg-amber-50 p-3 rounded-lg border border-amber-200 items-center mx-1">
                <Text className="text-lg font-bold text-amber-800">6</Text>
                <Text className="text-amber-700 text-xs">Bagian</Text>
              </View>
              <View className="flex-1 bg-amber-50 p-3 rounded-lg border border-amber-200 items-center mx-1">
                <Text className="text-lg font-bold text-amber-800">~28 Menit</Text>
                <Text className="text-amber-700 text-xs">Durasi</Text>
              </View>
            </View>

            <View className="mb-4">
              <View className="flex-row items-center mb-3">
                <FontAwesome5 name="check-circle" size={16} color="#92400e" style={{ marginRight: 8 }} />
                <Text className="text-amber-800 font-semibold">Manfaat Utama</Text>
              </View>

              <View className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <View className="flex-row items-start mb-2">
                  <View className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3" />
                  <Text className="text-amber-700 text-sm flex-1" style={{ lineHeight: 18 }}>
                    Menenangkan pikiran di awal hari
                  </Text>
                </View>
                <View className="flex-row items-start mb-2">
                  <View className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3" />
                  <Text className="text-amber-700 text-sm flex-1" style={{ lineHeight: 18 }}>
                    Meningkatkan konsentrasi
                  </Text>
                </View>
                <View className="flex-row items-start mb-2">
                  <View className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3" />
                  <Text className="text-amber-700 text-sm flex-1" style={{ lineHeight: 18 }}>
                    Membangkitkan rasa syukur
                  </Text>
                </View>
                <View className="flex-row items-start">
                  <View className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3" />
                  <Text className="text-amber-700 text-sm flex-1" style={{ lineHeight: 18 }}>
                    Mempersiapkan mental untuk aktivitas
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity className="bg-amber-100 py-3 px-4 rounded-lg border border-amber-200" onPress={handlePujaPagi}>
              <View className="flex-row items-center justify-center">
                <FontAwesome5 name="play" size={14} color="#92400e" style={{ marginRight: 8 }} />
                <Text className="text-amber-800 font-semibold">Mulai Puja Pagi</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Puja Sore Card */}
        <View className="mx-4 mb-4 bg-white rounded-xl shadow-sm border border-indigo-200">
          <View className="bg-indigo-600 p-4 rounded-t-xl">
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-1">
                <View className="flex-row items-center mb-2">
                  <FontAwesome5 name="moon" size={24} color="white" style={{ marginRight: 12 }} />
                  <Text className="text-white font-bold text-xl">Puja Sore</Text>
                </View>
                <Text className="text-white text-opacity-90 text-sm">Mengakhiri hari dengan refleksi dan doa</Text>
              </View>
            </View>
          </View>

          <View className="p-4">
            <View className="flex-row mb-4 space-x-4">
              <View className="flex-1 bg-indigo-50 p-3 rounded-lg border border-indigo-200 items-center mx-1">
                <Text className="text-lg font-bold text-indigo-800">7</Text>
                <Text className="text-indigo-700 text-xs">Bagian</Text>
              </View>
              <View className="flex-1 bg-indigo-50 p-3 rounded-lg border border-indigo-200 items-center mx-1">
                <Text className="text-lg font-bold text-indigo-800">~30 Menit</Text>
                <Text className="text-indigo-700 text-xs">Durasi</Text>
              </View>
            </View>

            <View className="mb-4">
              <View className="flex-row items-center mb-3">
                <FontAwesome5 name="check-circle" size={16} color="#3730a3" style={{ marginRight: 8 }} />
                <Text className="text-indigo-800 font-semibold">Manfaat Utama</Text>
              </View>

              <View className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <View className="flex-row items-start mb-2">
                  <View className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                  <Text className="text-indigo-700 text-sm flex-1" style={{ lineHeight: 18 }}>
                    Melepaskan beban hari
                  </Text>
                </View>
                <View className="flex-row items-start mb-2">
                  <View className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                  <Text className="text-indigo-700 text-sm flex-1" style={{ lineHeight: 18 }}>
                    Refleksi perbuatan baik
                  </Text>
                </View>
                <View className="flex-row items-start mb-2">
                  <View className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                  <Text className="text-indigo-700 text-sm flex-1" style={{ lineHeight: 18 }}>
                    Menenangkan pikiran sebelum istirahat
                  </Text>
                </View>
                <View className="flex-row items-start">
                  <View className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3" />
                  <Text className="text-indigo-700 text-sm flex-1" style={{ lineHeight: 18 }}>
                    Mengembangkan rasa damai
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity className="bg-indigo-100 py-3 px-4 rounded-lg border border-indigo-200" onPress={handlePujaSore}>
              <View className="flex-row items-center justify-center">
                <FontAwesome5 name="play" size={14} color="#3730a3" style={{ marginRight: 8 }} />
                <Text className="text-indigo-800 font-semibold">Mulai Puja Sore</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Meditasi Card */}
        <View className="mx-4 mb-4 bg-white rounded-xl shadow-sm border border-emerald-200">
          <View className="bg-emerald-600 p-4 rounded-t-xl">
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-1">
                <View className="flex-row items-center mb-2">
                  <FontAwesome5 name="heart" size={24} color="white" style={{ marginRight: 12 }} />
                  <Text className="text-white font-bold text-xl">Meditasi</Text>
                </View>
                <Text className="text-white text-opacity-90 text-sm">Latihan konsentrasi dan mindfulness</Text>
              </View>
            </View>
          </View>

          <View className="p-4">
            <View className="flex-row mb-4 space-x-4">
              <View className="flex-1 bg-emerald-50 p-3 rounded-lg border border-emerald-200 items-center mx-1">
                <Text className="text-lg font-bold text-emerald-800">Fleksibel</Text>
                <Text className="text-emerald-700 text-xs">Bagian</Text>
              </View>
              <View className="flex-1 bg-emerald-50 p-3 rounded-lg border border-emerald-200 items-center mx-1">
                <Text className="text-lg font-bold text-emerald-800">10-60 Menit</Text>
                <Text className="text-emerald-700 text-xs">Durasi</Text>
              </View>
            </View>

            <View className="mb-4">
              <View className="flex-row items-center mb-3">
                <FontAwesome5 name="check-circle" size={16} color="#059669" style={{ marginRight: 8 }} />
                <Text className="text-emerald-800 font-semibold">Manfaat Utama</Text>
              </View>

              <View className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <View className="flex-row items-start mb-2">
                  <View className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3" />
                  <Text className="text-emerald-700 text-sm flex-1" style={{ lineHeight: 18 }}>
                    Mengurangi stres dan kecemasan
                  </Text>
                </View>
                <View className="flex-row items-start mb-2">
                  <View className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3" />
                  <Text className="text-emerald-700 text-sm flex-1" style={{ lineHeight: 18 }}>
                    Meningkatkan fokus mental
                  </Text>
                </View>
                <View className="flex-row items-start mb-2">
                  <View className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3" />
                  <Text className="text-emerald-700 text-sm flex-1" style={{ lineHeight: 18 }}>
                    Mengembangkan kesadaran diri
                  </Text>
                </View>
                <View className="flex-row items-start">
                  <View className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3" />
                  <Text className="text-emerald-700 text-sm flex-1" style={{ lineHeight: 18 }}>
                    Memperkuat kedamaian batin
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity className="bg-emerald-100 py-3 px-4 rounded-lg border border-emerald-200" onPress={handleMeditasi}>
              <View className="flex-row items-center justify-center">
                <FontAwesome5 name="play" size={14} color="#059669" style={{ marginRight: 8 }} />
                <Text className="text-emerald-800 font-semibold">Mulai Meditasi</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tips Section */}
        <View className="bg-white mx-4 mb-4 rounded-xl shadow-sm border border-amber-200">
          <View className="bg-amber-600 p-4 rounded-t-xl">
            <View className="flex-row items-center">
              <FontAwesome5 name="lightbulb" size={20} color="white" style={{ marginRight: 8 }} />
              <Text className="text-white font-semibold">Tips Praktik</Text>
            </View>
          </View>
          <View className="p-4">
            <View className="space-y-3">
              <View className="flex-row items-start">
                <View className="bg-amber-600 w-6 h-6 rounded-full items-center justify-center mr-3 mt-0.5">
                  <Text className="text-white text-xs font-bold">1</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-amber-800 font-semibold mb-1">Konsistensi adalah Kunci</Text>
                  <Text className="text-amber-700 text-sm">Lakukan praktik secara rutin setiap hari untuk hasil maksimal</Text>
                </View>
              </View>

              <View className="flex-row items-start">
                <View className="bg-amber-600 w-6 h-6 rounded-full items-center justify-center mr-3 mt-0.5">
                  <Text className="text-white text-xs font-bold">2</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-amber-800 font-semibold mb-1">Ciptakan Lingkungan Tenang</Text>
                  <Text className="text-amber-700 text-sm">Pilih tempat yang nyaman dan bebas dari gangguan</Text>
                </View>
              </View>

              <View className="flex-row items-start">
                <View className="bg-amber-600 w-6 h-6 rounded-full items-center justify-center mr-3 mt-0.5">
                  <Text className="text-white text-xs font-bold">3</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-amber-800 font-semibold mb-1">Mulai dengan Durasi Pendek</Text>
                  <Text className="text-amber-700 text-sm">Pemula dapat memulai dengan durasi lebih singkat</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View className="mx-4 mb-6 bg-white p-6 rounded-xl shadow-sm border border-amber-200">
          <View className="items-center">
            <Text className="text-xl font-bold text-amber-800 mb-2">Mulai Perjalanan Spiritual</Text>
            <Text className="text-amber-700 text-center mb-4 leading-6">
              Pilih praktik yang sesuai dengan kebutuhan Anda dan mulai perjalanan spiritual yang bermakna.
            </Text>
            <View className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <Text className="text-yellow-800 italic text-center font-medium">
                {"Sabbadānaṃ dhammadānaṃ jināti"}
              </Text>
              <Text className="text-yellow-700 text-center text-sm mt-1">
                {"Pemberian Dhamma mengungguli semua pemberian"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Panduan;