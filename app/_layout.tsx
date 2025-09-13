import { useEffect } from 'react';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { User } from 'lucide-react-native';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady();

  const handleProfilePress = () => {
    router.push('/profile');
  };

  return (
    <>
      <Stack screenOptions={{ 
        headerShown: false,
        headerStyle: { backgroundColor: '#1E40AF' },
        headerTintColor: '#ffffff',
      }}>
        <Stack.Screen name="auth/signin" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ 
          headerShown: true,
          title: 'Profile',
          headerRight: () => (
            <TouchableOpacity style={styles.profileButton} onPress={handleProfilePress}>
              <User size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
        }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  profileButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
