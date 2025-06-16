import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Dashboard = () => {
  const stats = [
    {
      label: 'Total Paritta',
      value: '108',
      icon: <FontAwesome name="book" size={24} color="#2563eb" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      label: 'Pengguna Aktif',
      value: '2,847',
      icon: <FontAwesome name="users" size={24} color="#16a34a" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      label: 'Sesi Meditasi',
      value: '15,632',
      icon: <FontAwesome name="heart" size={24} color="#dc2626" />,
      color: 'bg-red-100 text-red-600'
    },
    {
      label: 'Hari Berturut',
      value: '23',
      icon: <FontAwesome name="calendar" size={24} color="#7e22ce" />,
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const features = [
    {
      title: 'Puja Pagi',
      description: 'Mulai hari dengan puja pagi yang membawa ketenangan dan berkah',
      icon: '🌅',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      title: 'Puja Sore',
      description: 'Tutup hari dengan puja sore untuk refleksi dan syukur',
      icon: '🌅',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Meditasi Terpandu',
      description: 'Berbagai teknik meditasi dengan panduan audio dan video',
      icon: '🧘‍♂️',
      color: 'bg-blue-50 border-blue-200'
    },
  ]

  return (
    <ScrollView className="py-12 bg-gray-50">
      <View className="max-w-7xl mx-auto px-4">
        {/* Stats */}
        <View className="mb-16">
          <Text className="text-3xl font-bold text-gray-900 text-center mb-8">Statistik Platform</Text>
          <View className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <View key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <View className="flex-row items-center">
                  <View className={`p-3 rounded-full ${stat.color}`}>
                    {stat.icon}
                  </View>
                  <View className="ml-4">
                    <Text className="text-2xl font-bold text-gray-900">{stat.value}</Text>
                    <Text className="text-sm text-gray-600">{stat.label}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Features */}
        <View className="mb-16">
          <Text className="text-3xl font-bold text-gray-900 text-center mb-8">Fitur Utama</Text>
          <View className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <View key={index} className={`p-6 rounded-lg border-2 ${feature.color}`}>
                <Text className="text-4xl mb-4">{feature.icon}</Text>
                <Text className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</Text>
                <Text className="text-gray-600">{feature.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Actions */}
        <View className="bg-white rounded-lg shadow-lg p-8">
          <Text className="text-2xl font-bold text-gray-900 mb-6 text-center">Mulai Praktik Hari Ini</Text>
          <View className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TouchableOpacity className="bg-orange-500 p-4 rounded-lg">
              <View className="flex-row items-center justify-center">
                <FontAwesome5 name="sun" size={20} color="#fff" />
                <Text className="text-white ml-2">Puja Pagi</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="bg-purple-500 p-4 rounded-lg">
              <View className="flex-row items-center justify-center">
                <FontAwesome5 name="cloud-sun" size={20} color="#fff" />
                <Text className="text-white ml-2">Puja Sore</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="bg-blue-500 p-4 rounded-lg">
              <View className="flex-row items-center justify-center">
                <Text className="text-white mr-2">🧘‍♂️</Text>
                <Text className="text-white">Meditasi</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Dashboard
