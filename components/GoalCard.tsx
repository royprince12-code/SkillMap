import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Target } from 'lucide-react-native';

interface GoalCardProps {
  goal: {
    title: string;
    progress: number;
    deadline: string;
  };
}

export function GoalCard({ goal }: GoalCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Target size={20} color="#60A5FA" />
        <View style={styles.content}>
          <Text style={styles.title}>{goal.title}</Text>
          <Text style={styles.deadline}>Target: {goal.deadline}</Text>
        </View>
        <Text style={styles.progress}>{goal.progress}%</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View 
          style={[styles.progressBar, { width: `${goal.progress}%` }]} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F9FAFB',
    marginBottom: 2,
  },
  deadline: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  progress: {
    fontSize: 16,
    fontWeight: '700',
    color: '#60A5FA',
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: '#374151',
    borderRadius: 3,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#60A5FA',
    borderRadius: 3,
  },
});