import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
    category: string;
  };
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.skillName}>{skill.name}</Text>
        <Text style={styles.level}>{skill.level}%</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View 
          style={[
            styles.progressBar, 
            { 
              width: `${skill.level}%`,
              backgroundColor: skill.category === 'Technical' ? '#3B82F6' : '#10B981'
            }
          ]} 
        />
      </View>
      <Text style={styles.category}>{skill.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 12,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F9FAFB',
    flex: 1,
  },
  level: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9CA3AF',
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: '#374151',
    borderRadius: 2,
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    borderRadius: 2,
  },
  category: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
});