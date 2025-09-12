import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MapPin, DollarSign, Clock, Star } from 'lucide-react-native';

interface CareerCardProps {
  career: {
    title: string;
    company: string;
    match: number;
    salary: string;
    location: string;
    type: string;
    skills: string[];
    description: string;
  };
}

export function CareerCard({ career }: CareerCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{career.title}</Text>
          <Text style={styles.company}>{career.company}</Text>
        </View>
        <View style={styles.matchBadge}>
          <Star size={16} color="#F59E0B" fill="#F59E0B" />
          <Text style={styles.matchText}>{career.match}%</Text>
        </View>
      </View>
      
      <Text style={styles.description}>{career.description}</Text>
      
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <DollarSign size={16} color="#9CA3AF" />
          <Text style={styles.detailText}>{career.salary}</Text>
        </View>
        <View style={styles.detailItem}>
          <MapPin size={16} color="#9CA3AF" />
          <Text style={styles.detailText}>{career.location}</Text>
        </View>
        <View style={styles.detailItem}>
          <Clock size={16} color="#9CA3AF" />
          <Text style={styles.detailText}>{career.type}</Text>
        </View>
      </View>
      
      <View style={styles.skillsContainer}>
        {career.skills.slice(0, 4).map((skill, index) => (
          <View key={index} style={styles.skillChip}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
        {career.skills.length > 4 && (
          <Text style={styles.moreSkills}>+{career.skills.length - 4} more</Text>
        )}
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
    marginBottom: 8,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F9FAFB',
    marginBottom: 2,
  },
  company: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  matchBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  matchText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#D97706',
  },
  description: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 12,
    lineHeight: 20,
  },
  details: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center',
  },
  skillChip: {
    backgroundColor: '#374151',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  skillText: {
    fontSize: 12,
    color: '#60A5FA',
    fontWeight: '600',
  },
  moreSkills: {
    fontSize: 12,
    color: '#9CA3AF',
    fontStyle: 'italic',
  },
});