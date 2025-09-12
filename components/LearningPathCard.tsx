import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BookOpen, Clock, Target, ArrowRight } from 'lucide-react-native';

interface LearningPathCardProps {
  path: {
    title: string;
    courses: number;
    duration: string;
    progress: number;
    skills: string[];
    description: string;
  };
}

export function LearningPathCard({ path }: LearningPathCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{path.title}</Text>
          <Text style={styles.description}>{path.description}</Text>
        </View>
        <ArrowRight size={20} color="#9CA3AF" />
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <BookOpen size={16} color="#9CA3AF" />
          <Text style={styles.statText}>{path.courses} courses</Text>
        </View>
        <View style={styles.statItem}>
          <Clock size={16} color="#9CA3AF" />
          <Text style={styles.statText}>{path.duration}</Text>
        </View>
        <View style={styles.statItem}>
          <Target size={16} color="#9CA3AF" />
          <Text style={styles.statText}>{path.progress}% complete</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[styles.progressFill, { width: `${path.progress}%` }]}
          />
        </View>
      </View>

      <View style={styles.skillsContainer}>
        {path.skills.map((skill, index) => (
          <View key={index} style={styles.skillChip}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionText}>
          {path.progress === 0 ? 'Start Path' : 'Continue Path'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F9FAFB',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#9CA3AF',
    lineHeight: 20,
  },
  stats: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#374151',
    borderRadius: 3,
  },
  progressFill: {
    height: 6,
    backgroundColor: '#8B5CF6',
    borderRadius: 3,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 16,
  },
  skillChip: {
    backgroundColor: '#374151',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  skillText: {
    fontSize: 11,
    color: '#A78BFA',
    fontWeight: '600',
  },
  actionButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
});