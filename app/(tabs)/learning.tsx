import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { BookOpen, Clock, Star, Play, CircleCheck as CheckCircle } from 'lucide-react-native';
import { CourseCard } from '@/components/CourseCard';
import { LearningPathCard } from '@/components/LearningPathCard';

export default function LearningScreen() {
  const [selectedTab, setSelectedTab] = useState('recommended');

  const recommendedCourses = [
    {
      title: 'Advanced React Patterns',
      provider: 'Udemy',
      duration: '12 hours',
      rating: 4.8,
      price: '$89.99',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?w=400',
      progress: 0,
      skills: ['React', 'JavaScript', 'Patterns'],
    },
    {
      title: 'AWS Cloud Practitioner',
      provider: 'Coursera',
      duration: '20 hours',
      rating: 4.7,
      price: '$49.99',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?w=400',
      progress: 25,
      skills: ['AWS', 'Cloud', 'DevOps'],
    },
    {
      title: 'TypeScript Masterclass',
      provider: 'Udemy',
      duration: '15 hours',
      rating: 4.9,
      price: '$79.99',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?w=400',
      progress: 60,
      skills: ['TypeScript', 'JavaScript'],
    },
  ];

  const learningPaths = [
    {
      title: 'Senior Developer Path',
      courses: 8,
      duration: '6 months',
      progress: 35,
      skills: ['Leadership', 'Architecture', 'Mentoring'],
      description: 'Advance to senior developer role with leadership skills',
    },
    {
      title: 'Full-Stack Mastery',
      courses: 12,
      duration: '9 months',
      progress: 15,
      skills: ['Frontend', 'Backend', 'Database', 'DevOps'],
      description: 'Master both frontend and backend development',
    },
    {
      title: 'Cloud Engineer Track',
      courses: 10,
      duration: '8 months',
      progress: 0,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      description: 'Transition to cloud-first development practices',
    },
  ];

  const tabs = [
    { id: 'recommended', label: 'Recommended' },
    { id: 'paths', label: 'Learning Paths' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Learning Center</Text>
        <Text style={styles.subtitle}>Personalized courses and learning paths</Text>
      </View>

      <View style={styles.content}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                selectedTab === tab.id && styles.tabActive
              ]}
              onPress={() => setSelectedTab(tab.id)}>
              <Text style={[
                styles.tabText,
                selectedTab === tab.id && styles.tabTextActive
              ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {selectedTab === 'recommended' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recommended for You</Text>
            <Text style={styles.sectionSubtitle}>
              Based on your career goals and skill gaps
            </Text>
            <View style={styles.coursesContainer}>
              {recommendedCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </View>
          </View>
        )}

        {selectedTab === 'paths' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Structured Learning Paths</Text>
            <Text style={styles.sectionSubtitle}>
              Comprehensive programs to achieve your goals
            </Text>
            <View style={styles.pathsContainer}>
              {learningPaths.map((path, index) => (
                <LearningPathCard key={index} path={path} />
              ))}
            </View>
          </View>
        )}

        {selectedTab === 'in-progress' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Continue Learning</Text>
            <View style={styles.coursesContainer}>
              {recommendedCourses
                .filter(course => course.progress > 0 && course.progress < 100)
                .map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
            </View>
          </View>
        )}

        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Your Learning Stats</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Courses Completed</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>87h</Text>
              <Text style={styles.statLabel}>Hours Learned</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Skills Improved</Text>
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
    backgroundColor: '#1F2937',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomWidth: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#F9FAFB',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  tabsContainer: {
    marginBottom: 24,
  },
  tab: {
    backgroundColor: '#374151',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 0,
  },
  tabActive: {
    backgroundColor: '#3B82F6',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  tabTextActive: {
    color: '#ffffff',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#F9FAFB',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 16,
  },
  coursesContainer: {
    gap: 16,
  },
  pathsContainer: {
    gap: 16,
  },
  statsCard: {
    backgroundColor: '#1F2937',
    padding: 20,
    borderRadius: 16,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F9FAFB',
    marginBottom: 16,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#60A5FA',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
});