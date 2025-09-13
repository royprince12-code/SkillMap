import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react-native';
import { router } from 'expo-router';

export default function SignInScreen() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    if (!email || !password || (isSignUp && !name)) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Success', 
        isSignUp ? 'Account created successfully!' : 'Welcome back!',
        [{ text: 'OK', onPress: () => router.replace('/(tabs)/learning') }]
      );
    }, 1500);
  };

  const handleGoogleAuth = () => {
    Alert.alert('Google Sign In', 'Google authentication would be implemented here');
  };

  const handleLinkedInAuth = () => {
    Alert.alert('LinkedIn Sign In', 'LinkedIn authentication would be implemented here');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1E40AF', '#3B82F6', '#60A5FA']}
        style={styles.header}>
        <Text style={styles.logo}>CareerPath AI</Text>
        <Text style={styles.tagline}>Your AI-powered career companion</Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, !isSignUp && styles.toggleButtonActive]}
            onPress={() => setIsSignUp(false)}>
            <Text style={[styles.toggleText, !isSignUp && styles.toggleTextActive]}>
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, isSignUp && styles.toggleButtonActive]}
            onPress={() => setIsSignUp(true)}>
            <Text style={[styles.toggleText, isSignUp && styles.toggleTextActive]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          {isSignUp && (
            <View style={styles.inputContainer}>
              <User size={20} color="#9CA3AF" />
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#6B7280"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            </View>
          )}

          <View style={styles.inputContainer}>
            <Mail size={20} color="#9CA3AF" />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#6B7280"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Lock size={20} color="#9CA3AF" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#6B7280"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff size={20} color="#9CA3AF" />
              ) : (
                <Eye size={20} color="#9CA3AF" />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.authButton, loading && styles.authButtonDisabled]}
            onPress={handleAuth}
            disabled={loading}>
            <Text style={styles.authButtonText}>
              {loading ? 'Please wait...' : (isSignUp ? 'Create Account' : 'Sign In')}
            </Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton} onPress={handleGoogleAuth}>
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={handleLinkedInAuth}>
              <Text style={styles.socialButtonText}>LinkedIn</Text>
            </TouchableOpacity>
          </View>

          {!isSignUp && (
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 4,
    marginBottom: 32,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  toggleButtonActive: {
    backgroundColor: '#1E40AF',
  },
  toggleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  toggleTextActive: {
    color: '#ffffff',
  },
  form: {
    gap: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#F9FAFB',
  },
  authButton: {
    backgroundColor: '#1E40AF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  authButtonDisabled: {
    opacity: 0.6,
  },
  authButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    gap: 16,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#374151',
  },
  dividerText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  socialButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  socialButton: {
    flex: 1,
    backgroundColor: '#1F2937',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#374151',
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F9FAFB',
  },
  forgotPassword: {
    alignItems: 'center',
    marginTop: 16,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#60A5FA',
    fontWeight: '500',
  },
});