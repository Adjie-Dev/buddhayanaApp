import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Modal, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.75;

type NavbarProps = {
    activeSection: string;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
    setActiveSection: (section: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ 
    activeSection, 
    isMobileMenuOpen, 
    setIsMobileMenuOpen,
    setActiveSection // Destructure prop baru
}) => {
    const slideAnim = useRef(new Animated.Value(SIDEBAR_WIDTH)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;
    
    const navItems = [
        { id: 'Dashboard', label: 'Beranda', icon: 'home' },
        { id: 'PujaPagi', label: 'Puja Pagi', icon: 'white-balance-sunny' },
        { id: 'PujaSore', label: 'Puja Sore', icon: 'moon-waning-crescent' },
        { id: 'Meditasi', label: 'Meditasi', icon: 'heart' }
    ];

    // Animasi slide dari kanan ke kiri (buka dan tutup)
    useEffect(() => {
        if (isMobileMenuOpen) {
            // Animasi buka - slide masuk dari kanan
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                })
            ]).start();
        } else {
            // Animasi tutup - slide keluar ke kanan
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: SIDEBAR_WIDTH,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                })
            ]).start();
        }
    }, [isMobileMenuOpen, slideAnim, opacityAnim]);

    const handleMenuItemPress = (sectionId: string) => {
        // Ganti active section
        setActiveSection(sectionId);
        
        // Tutup sidebar setelah memilih
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Header dengan hamburger menu */}
            <View className="bg-white shadow-lg">
                <View className="flex-row items-center justify-between px-4 py-4 mt-7">
                    {/* Logo */}
                    <View className="flex-row items-center">
                        <MaterialCommunityIcons name="dharmachakra" size={28} color="#ea580c" />
                        <Text className="text-xl font-bold text-gray-800 ml-2">Buddhayana Digital</Text>
                    </View>
                    
                    {/* Hamburger Menu Button */}
                    <TouchableOpacity
                        onPress={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2"
                    >
                        <MaterialCommunityIcons 
                            name={isMobileMenuOpen ? 'close' : 'menu'} 
                            size={24} 
                            color="#374151" 
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Sidebar Modal */}
            <Modal
                animationType="none"
                transparent={true}
                visible={isMobileMenuOpen}
                onRequestClose={() => setIsMobileMenuOpen(false)}
                statusBarTranslucent={true}
            >
                <View className="flex-1">
                    {/* Overlay dengan fade animation */}
                    <Animated.View 
                        className="flex-1 bg-black"
                        style={{ opacity: opacityAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 0.5]
                        }) }}
                    >
                        <TouchableOpacity
                            className="flex-1"
                            activeOpacity={1}
                            onPress={() => setIsMobileMenuOpen(false)}
                        />
                    </Animated.View>
                    
                    {/* Sidebar */}
                    <Animated.View
                        className="bg-white border-l border-gray-200 absolute right-0 top-0 bottom-0"
                        style={{
                            width: SIDEBAR_WIDTH,
                            transform: [{ translateX: slideAnim }]
                        }}
                    >
                        {/* Sidebar Header */}
                        <View className="flex-row items-center justify-between px-4 py-6 border-b border-gray-200">
                            <View className="flex-row items-center mt-7">
                                <MaterialCommunityIcons name="dharmachakra" size={24} color="#ea580c" />
                                <Text className="text-lg font-bold text-gray-800 ml-2">Buddhayana Digital</Text>
                            </View>
                            <TouchableOpacity onPress={() => setIsMobileMenuOpen(false)}>
                                <MaterialCommunityIcons name="close" size={24} color="#6b7280" />
                            </TouchableOpacity>
                        </View>
                        
                        {/* Navigation Items */}
                        <View className="pt-4">
                            {navItems.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    onPress={() => handleMenuItemPress(item.id)}
                                    className={`flex-row items-center px-6 py-4 mx-2 rounded-lg ${
                                        activeSection === item.id 
                                            ? 'bg-orange-50' 
                                            : ''
                                    }`}
                                    activeOpacity={0.7}
                                >
                                    <MaterialCommunityIcons
                                        name={item.icon}
                                        size={20}
                                        color={activeSection === item.id ? '#ea580c' : '#6b7280'}
                                    />
                                    <Text 
                                        className={`ml-4 text-base font-medium ${
                                            activeSection === item.id 
                                                ? 'text-orange-600' 
                                                : 'text-gray-700'
                                        }`}
                                    >
                                        {item.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Info section - opsional */}
                        <View className="absolute bottom-8 left-0 right-0 px-4">
                            <View className="bg-orange-50 rounded-lg p-3">
                                <Text className="text-orange-800 text-sm text-center">
                                    Pilih menu untuk berpindah halaman
                                </Text>
                            </View>
                        </View>
                    </Animated.View>
                </View>
            </Modal>
        </>
    );
};

export default Navbar;