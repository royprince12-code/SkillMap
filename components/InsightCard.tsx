import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TrendingUp, TrendingDown } from 'lucide-react-native';

interface InsightCardProps {
  insight: {
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    icon: React.ComponentType<any>;
    description: string;
  };
}

export function InsightCard({ insight }: InsightCardProps) {
  const IconComponent = insight.icon;
  const TrendIcon = insight.trend === 'up' ? TrendingUp : TrendingDown;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconComponent size={24} color="#60A5FA" />
        <View style={[
          styles.trendContainer,
          { backgroundColor: insight.trend === 'up' ? '#DCFCE7' : '#FEE2E2' }
        ]}>
          <TrendIcon 
            size={14} 
            color={insight.trend === 'up' ? '#16A34A' : '#DC2626'} 
          />
          <Text style={[
            styles.trendText,
            { color: insight.trend === 'up' ? '#16A34A' : '#DC2626' }
          ]}>
            {insight.change}
          </Text>
        </View>
      </View>
      
      <Text style={styles.value}>{insight.value}</Text>
      <Text style={styles.title}>{insight.title}</Text>
      <Text style={styles.description}>{insight.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
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
    marginBottom: 12,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 12,
    gap: 2,
  },
  trendText: {
    fontSize: 12,
    fontWeight: '700',
  },
  value: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 16,
  },
});