import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Target, TrendingUp, DollarSign, MapPin, Clock } from 'lucide-react-native';
import { CareerCard } from '@/components/CareerCard';
import { SkillMatchCard } from '@/components/SkillMatchCard';

export default function CareersScreen() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const careerRecommendations = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      match: 92,
      salary: '$120k - $160k',
      location: 'San Francisco, CA',
      type: 'Full-time',
      skills: ['JavaScript', 'React', 'Node.js', 'Python'],
      description: 'Lead development of scalable web applications',
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      match: 88,
      salary: '$90k - $130k',
      location: 'Remote',
      type: 'Full-time',
      skills: ['React', 'Python', 'PostgreSQL', 'AWS'],
      description: 'Build end-to-end solutions for growing startup',
    },
    {
      title: 'Frontend Team Lead',
      company: 'Design Co',
      match: 85,
      salary: '$110k - $140k',
      location: 'New York, NY',
      type: 'Full-time',
      skills: ['React', 'TypeScript', 'Leadership', 'UI/UX'],
      description: 'Lead frontend team and drive technical decisions',
    },
  ];

  const skillGaps = [
    { skill: 'TypeScript', currentLevel: 40, targetLevel: 80, priority: 'High' },
    { skill: 'AWS', currentLevel: 30, targetLevel: 70, priority: 'Medium' },
    { skill: 'Docker', currentLevel: 20, targetLevel: 60, priority: 'Medium' },
  ];

  const filters = [
    { id: 'all', label: 'All Recommendations' },
    { id: 'high-match', label: 'High Match (90%+)' },
    { id: 'remote', label: 'Remote Only' },
    { id: 'senior', label: 'Senior Level' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Career Recommendations</Text>
        <Text style={styles.subtitle}>AI-powered matches based on your skills</Text>
      </View>

      <View style={styles.content}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filtersContainer}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.id}
              style={[
                styles.filterButton,
                selectedFilter === filter.id && styles.filterButtonActive
              ]}
              onPress={() => setSelectedFilter(filter.id)}>
              <Text style={[
                styles.filterText,
                selectedFilter === filter.id && styles.filterTextActive
              ]}>
                {filter.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Matches</Text>
          <View style={styles.careersContainer}>
            {careerRecommendations.map((career, index) => (
              <CareerCard key={index} career={career} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skill Gaps to Address</Text>
          <Text style={styles.sectionSubtitle}>
            Improve these skills to unlock better opportunities
          </Text>
          <View style={styles.skillGapsContainer}>
            {skillGaps.map((gap, index) => (
              <SkillMatchCard key={index} skillGap={gap} />
            ))}
          </View>
        </View>

        <View style={styles.marketInsights}>
          <Text style={styles.sectionTitle}>Market Insights</Text>
          <View style={styles.insightCard}>
            <TrendingUp size={24} color="#10B981" />
            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>Job Market Trend</Text>
              <Text style={styles.insightText}>
                Software engineering roles increased 15% this quarter
              </Text>
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
  filtersContainer: {
    marginBottom: 24,
  },
  filterButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 0,
  },
  filterButtonActive: {
    backgroundColor: '#3B82F6',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  filterTextActive: {
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
  careersContainer: {
    gap: 16,
  },
  skillGapsContainer: {
    gap: 12,
  },
  marketInsights: {
    marginBottom: 32,
  },
  insightCard: {
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
  insightContent: {
    flex: 1,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F9FAFB',
    marginBottom: 2,
  },
  insightText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
});