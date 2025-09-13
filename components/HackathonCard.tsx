import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Trophy, Calendar, MapPin, Users, DollarSign, Code } from 'lucide-react-native';

interface HackathonCardProps {
  hackathon: {
    title: string;
    position: string;
    date: string;
    location: string;
    project: string;
    teamSize: number;
    prize: string;
    technologies: string[];
    description: string;
  };
}

export function HackathonCard({ hackathon }: HackathonCardProps) {
  const getPositionColor = (position: string) => {
    if (position.includes('1st')) return '#F59E0B';
    if (position.includes('2nd')) return '#9CA3AF';
    if (position.includes('3rd')) return '#CD7C2F';
    return '#60A5FA';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{hackathon.title}</Text>
          <Text style={styles.project}>{hackathon.project}</Text>
        </View>
        <View style={[
          styles.positionBadge,
          { backgroundColor: getPositionColor(hackathon.position) + '20' }
        ]}>
          <Trophy size={16} color={getPositionColor(hackathon.position)} />
          <Text style={[
            styles.positionText,
            { color: getPositionColor(hackathon.position) }
          ]}>
            {hackathon.position}
          </Text>
        </View>
      </View>

      <Text style={styles.description}>{hackathon.description}</Text>

      <View style={styles.details}>
        <View style={styles.detailRow}>
          <View style={styles.detailItem}>
            <Calendar size={16} color="#9CA3AF" />
            <Text style={styles.detailText}>{formatDate(hackathon.date)}</Text>
          </View>
          <View style={styles.detailItem}>
            <MapPin size={16} color="#9CA3AF" />
            <Text style={styles.detailText}>{hackathon.location}</Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <View style={styles.detailItem}>
            <Users size={16} color="#9CA3AF" />
            <Text style={styles.detailText}>{hackathon.teamSize} members</Text>
          </View>
          <View style={styles.detailItem}>
            <DollarSign size={16} color="#9CA3AF" />
            <Text style={styles.detailText}>{hackathon.prize}</Text>
          </View>
        </View>
      </View>

      <View style={styles.technologiesContainer}>
        <Code size={16} color="#9CA3AF" />
        <View style={styles.techChips}>
          {hackathon.technologies.map((tech, index) => (
            <View key={index} style={styles.techChip}>
              <Text style={styles.techText}>{tech}</Text>
            </View>
          ))}
        </View>
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
    fontSize: 16,
    fontWeight: '700',
    color: '#F9FAFB',
    marginBottom: 2,
  },
  project: {
    fontSize: 14,
    color: '#60A5FA',
    fontWeight: '600',
  },
  positionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  positionText: {
    fontSize: 12,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 12,
    lineHeight: 20,
  },
  details: {
    gap: 8,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    gap: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    flex: 1,
  },
  detailText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  technologiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  techChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    flex: 1,
  },
  techChip: {
    backgroundColor: '#374151',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  techText: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '600',
  },
});