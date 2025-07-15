import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface FloatingControlsProps {
  fontSize: number;
  adjustFontSize: (increase: boolean) => void;
  showTranslation: boolean;
  setShowTranslation: (show: boolean) => void;
}

const FloatingControls: React.FC<FloatingControlsProps> = ({ 
  fontSize, 
  adjustFontSize, 
  showTranslation, 
  setShowTranslation 
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <View style={{
      position: 'absolute',
      bottom: 32,
      right: 20,
      alignItems: 'flex-end',
      zIndex: 9999,
      elevation: 9999,
    }}>
      {isExpanded && (
        <View style={{
          marginBottom: 12,
          backgroundColor: 'white',
          borderRadius: 24,
          padding: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderWidth: 1,
          borderColor: '#fde68a',
        }}>
          <TouchableOpacity
            onPress={() => adjustFontSize(false)}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#fef3c7',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 8,
            }}
          >
            <FontAwesome5 name="minus" size={14} color="#92400e" />
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => adjustFontSize(true)}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#fef3c7',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 8,
            }}
          >
            <FontAwesome5 name="plus" size={14} color="#92400e" />
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => setShowTranslation(!showTranslation)}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: showTranslation ? '#d97706' : '#fef3c7',
            }}
          >
            <FontAwesome5 
              name="language" 
              size={14} 
              color={showTranslation ? 'white' : '#92400e'} 
            />
          </TouchableOpacity>
        </View>
      )}
      
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: '#d97706',
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <FontAwesome5 
          name={isExpanded ? "times" : "cog"} 
          size={18} 
          color="white" 
        />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingControls;