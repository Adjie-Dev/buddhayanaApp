import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type NavbarProps = {
    activeSection: string;
    setActiveSection: (id: string) => void;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
    };

    const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
    const navItems = [
        { id: 'home', label: 'Beranda', icon: 'home' },
        { id: 'morning', label: 'Puja Pagi', icon: 'white-balance-sunny' },
        { id: 'evening', label: 'Puja Sore', icon: 'moon-waning-crescent' },
        { id: 'meditation', label: 'Meditasi', icon: 'heart' }
    ];

    return (
        <View className="bg-white border-t border-gray-200">
        {/* Header atas dengan logo KDAB */}
        <View className="flex-row items-center justify-left py-4 px-9 mt-4">
            <MaterialCommunityIcons name="dharmachakra" size={24} color="#ea580c" />
            <Text className="text-lg font-bold text-orange-600 ml-2">BuddhayanaApp</Text>
        </View>

        {/* Navbar */}
        <View className="flex-row justify-around py-3">
            {navItems.map((item) => (
            <TouchableOpacity
                key={item.id}
                onPress={() => setActiveSection(item.id)}
                className={`items-center px-2 ${activeSection === item.id ? 'bg-orange-50 rounded-lg' : ''}`}
            >
                <MaterialCommunityIcons
                name={item.icon}
                size={22}
                color={activeSection === item.id ? '#ea580c' : '#6b7280'}
                />
                <Text className={`text-xs mt-1 ${activeSection === item.id ? 'text-orange-600 font-semibold' : 'text-gray-700'}`}>
                {item.label}
                </Text>
            </TouchableOpacity>
            ))}
        </View>
        </View>
    );
};

export default Navbar;
