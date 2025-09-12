import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { User, CreditCard as Edit3, Plus, Star, Award } from 'lucide-react-native';
import { ProfileHeader } from '@/components/ProfileHeader';
import { SkillCard } from '@/components/SkillCard';
import { GoalCard } from '@/components/GoalCard';

export default function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'Alex Johnson',
    title: 'Software Developer',
    experience: '3 years',
    location: 'San Francisco, CA',
  });

  const skills = [
    { name: 'JavaScript', level: 85, category: 'Technical' },
    { name: 'React', level: 80, category: 'Technical' },
    { name: 'Python', level: 70, category: 'Technical' },
    { name: 'Leadership', level: 65, category: 'Soft Skill' },
    { name: 'Communication', level: 90, category: 'Soft Skill' },
  ];

  const goals = [
    { title: 'Senior Developer Role', progress: 60, deadline: '2024' },
    { title: 'Learn Machine Learning', progress: 30, deadline: '2024' },
    { title: 'Get AWS Certification', progress: 45, deadline: '2024' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#3B82F6', '#8B5CF6']}
        style={styles.header}>
        <View style={styles.headerContent}>
          <ProfileHeader 
            profile={userProfile} 
            isEditing={isEditing}
            onToggleEdit={() => setIsEditing(!isEditing)}
          />
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Skills Assessment</Text>
            <TouchableOpacity style={styles.addButton}>
              <Plus size={20} color="#60A5FA" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Career Goals</Text>
          <View style={styles.goalsContainer}>
            {goals.map((goal, index) => (
              <GoalCard key={index} goal={goal} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementsContainer}>
            <View style={styles.achievementItem}>
              <Award size={24} color="#10B981" />
              <Text style={styles.achievementText}>Completed React Certification</Text>
            </View>
            <View style={styles.achievementItem}>
              <Star size={24} color="#F59E0B" />
              <Text style={styles.achievementText}>Top Performer Q3 2023</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F9FAFB',
  },
  addButton: {
    backgroundColor: '#374151',
    padding: 8,
    borderRadius: 12,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  goalsContainer: {
    gap: 12,
  },
  achievementsContainer: {
    gap: 12,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  achievementText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F3F4F6',
  },
});