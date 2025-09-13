import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { User, CreditCard as Edit3, Save, LogOut, Settings, Award, Target } from 'lucide-react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    title: 'Software Developer',
    experience: '3 years',
    location: 'San Francisco, CA',
    bio: 'Passionate software developer with expertise in React and Node.js. Always eager to learn new technologies and contribute to meaningful projects.',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS'],
    goals: ['Senior Developer Role', 'Learn Machine Learning', 'Get AWS Certification'],
  });

  const [editedProfile, setEditedProfile] = useState(userProfile);

  const handleSave = () => {
    setUserProfile(editedProfile);
    setIsEditing(false);
    Alert.alert('Success', 'Profile updated successfully!');
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: () => router.replace('/auth/signin')
        }
      ]
    );
  };

  const stats = [
    { label: 'Certificates', value: '5', icon: Award },
    { label: 'Goals Completed', value: '12', icon: Target },
    { label: 'Skills Mastered', value: '8', icon: User },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#1E40AF', '#3B82F6']}
        style={styles.header}>
        <View style={styles.avatarContainer}>
          <User size={48} color="#ffffff" />
        </View>
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.email}>{userProfile.email}</Text>
        
        <TouchableOpacity 
          style={styles.editButton} 
          onPress={() => isEditing ? handleSave() : setIsEditing(true)}>
          {isEditing ? <Save size={16} color="#1E40AF" /> : <Edit3 size={16} color="#1E40AF" />}
          <Text style={styles.editButtonText}>
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <View key={index} style={styles.statCard}>
                <IconComponent size={24} color="#60A5FA" />
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            );
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Title</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={editedProfile.title}
                  onChangeText={(text) => setEditedProfile({...editedProfile, title: text})}
                />
              ) : (
                <Text style={styles.infoValue}>{userProfile.title}</Text>
              )}
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Experience</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={editedProfile.experience}
                  onChangeText={(text) => setEditedProfile({...editedProfile, experience: text})}
                />
              ) : (
                <Text style={styles.infoValue}>{userProfile.experience}</Text>
              )}
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Location</Text>
              {isEditing ? (
                <TextInput
                  style={styles.infoInput}
                  value={editedProfile.location}
                  onChangeText={(text) => setEditedProfile({...editedProfile, location: text})}
                />
              ) : (
                <Text style={styles.infoValue}>{userProfile.location}</Text>
              )}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bio</Text>
          <View style={styles.infoCard}>
            {isEditing ? (
              <TextInput
                style={[styles.infoInput, styles.bioInput]}
                value={editedProfile.bio}
                onChangeText={(text) => setEditedProfile({...editedProfile, bio: text})}
                multiline
                numberOfLines={4}
              />
            ) : (
              <Text style={styles.bioText}>{userProfile.bio}</Text>
            )}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {userProfile.skills.map((skill, index) => (
              <View key={index} style={styles.skillChip}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Career Goals</Text>
          <View style={styles.goalsContainer}>
            {userProfile.goals.map((goal, index) => (
              <View key={index} style={styles.goalItem}>
                <Target size={16} color="#60A5FA" />
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.actionsSection}>
          <TouchableOpacity style={styles.actionButton}>
            <Settings size={20} color="#9CA3AF" />
            <Text style={styles.actionButtonText}>Settings</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <LogOut size={20} color="#EF4444" />
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 20,
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
  email: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 20,
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
    color: '#1E40AF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#F9FAFB',
  },
  statLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F9FAFB',
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  infoLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
    color: '#F9FAFB',
    fontWeight: '600',
  },
  infoInput: {
    fontSize: 14,
    color: '#F9FAFB',
    backgroundColor: '#374151',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    minWidth: 120,
    textAlign: 'right',
  },
  bioInput: {
    textAlign: 'left',
    minWidth: '100%',
    minHeight: 80,
  },
  bioText: {
    fontSize: 14,
    color: '#D1D5DB',
    lineHeight: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillChip: {
    backgroundColor: '#1F2937',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#60A5FA',
  },
  skillText: {
    fontSize: 12,
    color: '#60A5FA',
    fontWeight: '600',
  },
  goalsContainer: {
    gap: 8,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    padding: 12,
    borderRadius: 8,
    gap: 12,
  },
  goalText: {
    fontSize: 14,
    color: '#F9FAFB',
    fontWeight: '500',
  },
  actionsSection: {
    marginTop: 32,
    marginBottom: 32,
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  actionButtonText: {
    fontSize: 16,
    color: '#F9FAFB',
    fontWeight: '500',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 12,
    gap: 12,
    borderWidth: 1,
    borderColor: '#EF4444',
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#EF4444',
    fontWeight: '500',
  },
});