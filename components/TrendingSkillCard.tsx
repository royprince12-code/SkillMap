import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TrendingUp, ArrowUp, Minus } from 'lucide-react-native';

interface TrendingSkillCardProps {
  skill: {
    skill: string;
    growth: string;
    demand: string;
    avgSalary: string;
    trend: 'rising' | 'stable' | 'falling';
  };
}

export function TrendingSkillCard({ skill }: TrendingSkillCardProps) {
  const getTrendIcon = () => {
    switch (skill.trend) {
      case 'rising':
        return <ArrowUp size={16} color="#10B981" />;
      case 'stable':
        return <Minus size={16} color="#F59E0B" />;
      default:
        return <ArrowUp size={16} color="#EF4444" style={{ transform: [{ rotate: '180deg' }] }} />;
    }
  };

  const getDemandColor = (demand: string) => {
    switch (demand.toLowerCase()) {
      case 'very high':
        return '#10B981';
      case 'high':
        return '#3B82F6';
      case 'medium':
        return '#F59E0B';
      default:
        return '#6B7280';
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <View style={styles.skillInfo}>
          <Text style={styles.skillName}>{skill.skill}</Text>
          <View style={styles.metrics}>
            <Text style={styles.growth}>{skill.growth}</Text>
            <View style={[
              styles.demandBadge,
              { backgroundColor: getDemandColor(skill.demand) + '20' }
            ]}>
              <Text style={[
                styles.demandText,
                { color: getDemandColor(skill.demand) }
              ]}>
                {skill.demand}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.trendContainer}>
          {getTrendIcon()}
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.salary}>Avg Salary: {skill.avgSalary}</Text>
        <TouchableOpacity style={styles.learnButton}>
          <Text style={styles.learnButtonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
    marginBottom: 6,
  },
  metrics: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  growth: {
    fontSize: 14,
    fontWeight: '700',
    color: '#10B981',
  },
  demandBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  demandText: {
    fontSize: 12,
    fontWeight: '600',
  },
  trendContainer: {
    backgroundColor: '#374151',
    padding: 8,
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  salary: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  learnButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  learnButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#60A5FA',
  },
});