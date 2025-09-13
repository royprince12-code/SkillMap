import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { TrendingUp, TrendingDown, DollarSign, Users, Target, CircleAlert as AlertCircle } from 'lucide-react-native';
import { InsightCard } from '@/components/InsightCard';
import { TrendingSkillCard } from '@/components/TrendingSkillCard';

export default function InsightsScreen() {
  const [timeframe, setTimeframe] = useState('month');

  const marketInsights = [
    {
      title: 'Job Openings',
      value: '1.2M+',
      change: '+12%',
      trend: 'up',
      icon: Users,
      description: 'Tech positions available globally',
    },
    {
      title: 'Avg Salary',
      value: '$125k',
      change: '+8%',
      trend: 'up',
      icon: DollarSign,
      description: 'For software engineers in your area',
    },
    {
      title: 'Competition',
      value: '4.2/10',
      change: '-5%',
      trend: 'down',
      icon: Target,
      description: 'Competition level for your skills',
    },
    {
      title: 'Skill Demand',
      value: 'High',
      change: '+15%',
      trend: 'up',
      icon: TrendingUp,
      description: 'Demand for your primary skills',
    },
  ];

  const trendingSkills = [
    {
      skill: 'AI/Machine Learning',
      growth: '+45%',
      demand: 'Very High',
      avgSalary: '$140k',
      trend: 'rising',
    },
    {
      skill: 'TypeScript',
      growth: '+32%',
      demand: 'High',
      avgSalary: '$115k',
      trend: 'rising',
    },
    {
      skill: 'Kubernetes',
      growth: '+28%',
      demand: 'High',
      avgSalary: '$135k',
      trend: 'rising',
    },
    {
      skill: 'React Native',
      growth: '+25%',
      demand: 'Medium',
      avgSalary: '$110k',
      trend: 'stable',
    },
    {
      skill: 'GraphQL',
      growth: '+22%',
      demand: 'Medium',
      avgSalary: '$120k',
      trend: 'rising',
    },
  ];

  const opportunities = [
    {
      title: 'High Demand Skills Gap',
      description: 'AI/ML skills are in high demand but low supply in your area',
      priority: 'high',
      action: 'Consider learning machine learning fundamentals',
    },
    {
      title: 'Salary Increase Potential',
      description: 'Adding TypeScript could increase your salary potential by 15%',
      priority: 'medium',
      action: 'Enroll in TypeScript course',
    },
    {
      title: 'Remote Work Trend',
      description: '68% more remote positions available for your skill set',
      priority: 'low',
      action: 'Explore remote job opportunities',
    },
  ];

  const timeframes = [
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'quarter', label: 'This Quarter' },
    { id: 'year', label: 'This Year' },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Market Insights</Text>
        <Text style={styles.subtitle}>Real-time job market data and trends</Text>
      </View>

      <View style={styles.content}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.timeframeContainer}>
          {timeframes.map((frame) => (
            <TouchableOpacity
              key={frame.id}
              style={[
                styles.timeframeButton,
                timeframe === frame.id && styles.timeframeButtonActive
              ]}
              onPress={() => setTimeframe(frame.id)}>
              <Text style={[
                styles.timeframeText,
                timeframe === frame.id && styles.timeframeTextActive
              ]}>
                {frame.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Metrics</Text>
          <View style={styles.metricsGrid}>
            {marketInsights.map((insight, index) => (
              <InsightCard key={index} insight={insight} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Skills</Text>
          <Text style={styles.sectionSubtitle}>
            Skills with highest growth and demand
          </Text>
          <View style={styles.skillsContainer}>
            {trendingSkills.map((skill, index) => (
              <TrendingSkillCard key={index} skill={skill} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Opportunities for You</Text>
          <View style={styles.opportunitiesContainer}>
            {opportunities.map((opportunity, index) => (
              <View key={index} style={styles.opportunityCard}>
                <View style={styles.opportunityHeader}>
                  <AlertCircle 
                    size={20} 
                    color={
                      opportunity.priority === 'high' ? '#EF4444' :
                      opportunity.priority === 'medium' ? '#F59E0B' : '#10B981'
                    } 
                  />
                  <Text style={styles.opportunityTitle}>{opportunity.title}</Text>
                  <View style={[
                    styles.priorityBadge,
                    { backgroundColor: 
                      opportunity.priority === 'high' ? '#FEE2E2' :
                      opportunity.priority === 'medium' ? '#FEF3C7' : '#D1FAE5'
                    }
                  ]}>
                    <Text style={[
                      styles.priorityText,
                      { color: 
                        opportunity.priority === 'high' ? '#DC2626' :
                        opportunity.priority === 'medium' ? '#D97706' : '#059669'
                      }
                    ]}>
                      {opportunity.priority.toUpperCase()}
                    </Text>
                  </View>
                </View>
                <Text style={styles.opportunityDescription}>
                  {opportunity.description}
                </Text>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>{opportunity.action}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
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
    backgroundColor: '#1E40AF',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  timeframeContainer: {
    marginBottom: 24,
  },
  timeframeButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 0,
  },
  timeframeButtonActive: {
    backgroundColor: '#3B82F6',
  },
  timeframeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  timeframeTextActive: {
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
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  skillsContainer: {
    gap: 12,
  },
  opportunitiesContainer: {
    gap: 16,
  },
  opportunityCard: {
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  opportunityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  opportunityTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#F9FAFB',
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  priorityText: {
    fontSize: 10,
    fontWeight: '700',
  },
  opportunityDescription: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 12,
    lineHeight: 20,
  },
  actionButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
});