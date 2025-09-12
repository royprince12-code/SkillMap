import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { User, CreditCard as Edit3 } from 'lucide-react-native';

interface ProfileHeaderProps {
  profile: {
    name: string;
    title: string;
    experience: string;
    location: string;
  };
  isEditing: boolean;
  onToggleEdit: () => void;
}

export function ProfileHeader({ profile, isEditing, onToggleEdit }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <User size={48} color="#ffffff" />
      </View>
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.title}>{profile.title}</Text>
      <Text style={styles.details}>
        {profile.experience} • {profile.location}
      </Text>
      <TouchableOpacity style={styles.editButton} onPress={onToggleEdit}>
        <Edit3 size={16} color="#3B82F6" />
        <Text style={styles.editButtonText}>
          {isEditing ? 'Save' : 'Edit Profile'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 16,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 8,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B82F6',
  },
});