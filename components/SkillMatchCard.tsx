import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TrendingUp, TriangleAlert as AlertTriangle, Target } from 'lucide-react-native';

interface SkillMatchCardProps {
  skillGap: {
    skill: string;
    currentLevel: number;
    targetLevel: number;
    priority: string;
  };
}

export function SkillMatchCard({ skillGap }: SkillMatchCardProps) {
  const gap = skillGap.targetLevel - skillGap.currentLevel;
  const progressPercentage = (skillGap.currentLevel / skillGap.targetLevel) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.skillInfo}>
          <Text style={styles.skillName}>{skillGap.skill}</Text>
          <View style={styles.levelInfo}>
            <Text style={styles.levelText}>
              {skillGap.currentLevel}% → {skillGap.targetLevel}%
            </Text>
            <View style={[
              styles.priorityBadge,
              { backgroundColor: skillGap.priority === 'High' ? '#FEE2E2' : '#FEF3C7' }
            ]}>
              <Text style={[
                styles.priorityText,
                { color: skillGap.priority === 'High' ? '#DC2626' : '#D97706' }
              ]}>
                {skillGap.priority}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.gapIndicator}>
          <Text style={styles.gapText}>Gap: {gap}%</Text>
          <Target size={20} color="#9CA3AF" />
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressTrack}>
          <View 
            style={[
              styles.progressFill,
              { width: `${progressPercentage}%` }
            ]}
          />
        </View>
        <Text style={styles.progressText}>{Math.round(progressPercentage)}% complete</Text>
      </View>

      <TouchableOpacity style={styles.actionButton}>
        <TrendingUp size={16} color="#60A5FA" />
        <Text style={styles.actionText}>Start Learning</Text>
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  skillInfo: {
    flex: 1,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F9FAFB',
    marginBottom: 4,
  },
  levelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  levelText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  priorityBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  priorityText: {
    fontSize: 10,
    fontWeight: '700',
  },
  gapIndicator: {
    alignItems: 'center',
    gap: 4,
  },
  gapText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#EF4444',
  },
  progressContainer: {
    marginBottom: 12,
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#374151',
    borderRadius: 3,
    marginBottom: 4,
  },
  progressFill: {
    height: 6,
    backgroundColor: '#60A5FA',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'right',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#374151',
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#60A5FA',
  },
});