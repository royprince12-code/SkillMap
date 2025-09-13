import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import { MapPin, Briefcase, Star, MessageCircle, ExternalLink, Clock, Globe } from 'lucide-react-native';

interface MentorCardProps {
  mentor: {
    name: string;
    title: string;
    company: string;
    location: string;
    experience: string;
    expertise: string[];
    rating: number;
    sessions: number;
    linkedinId: string;
    bio: string;
    availability: string;
    languages: string[];
    image: string;
  };
}

export function MentorCard({ mentor }: MentorCardProps) {
  const handleLinkedInPress = () => {
    const linkedinUrl = `https://linkedin.com/in/${mentor.linkedinId}`;
    Linking.openURL(linkedinUrl);
  };

  const handleMessagePress = () => {
    // In a real app, this would open a messaging interface
    console.log('Message mentor:', mentor.name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: mentor.image }} style={styles.avatar} />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{mentor.name}</Text>
          <Text style={styles.title}>{mentor.title}</Text>
          <Text style={styles.company}>{mentor.company}</Text>
          
          <View style={styles.rating}>
            <Star size={16} color="#F59E0B" fill="#F59E0B" />
            <Text style={styles.ratingText}>{mentor.rating}</Text>
            <Text style={styles.sessionsText}>({mentor.sessions} sessions)</Text>
          </View>
        </View>
      </View>

      <Text style={styles.bio}>{mentor.bio}</Text>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <MapPin size={16} color="#9CA3AF" />
          <Text style={styles.detailText}>{mentor.location}</Text>
        </View>
        <View style={styles.detailItem}>
          <Briefcase size={16} color="#9CA3AF" />
          <Text style={styles.detailText}>{mentor.experience} experience</Text>
        </View>
        <View style={styles.detailItem}>
          <Clock size={16} color="#9CA3AF" />
          <Text style={styles.detailText}>Available {mentor.availability}</Text>
        </View>
        <View style={styles.detailItem}>
          <Globe size={16} color="#9CA3AF" />
          <Text style={styles.detailText}>{mentor.languages.join(', ')}</Text>
        </View>
      </View>

      <View style={styles.expertiseContainer}>
        <Text style={styles.expertiseTitle}>Expertise</Text>
        <View style={styles.expertiseChips}>
          {mentor.expertise.slice(0, 4).map((skill, index) => (
            <View key={index} style={styles.expertiseChip}>
              <Text style={styles.expertiseText}>{skill}</Text>
            </View>
          ))}
          {mentor.expertise.length > 4 && (
            <Text style={styles.moreExpertise}>+{mentor.expertise.length - 4} more</Text>
          )}
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.linkedinButton} onPress={handleLinkedInPress}>
          <ExternalLink size={16} color="#0077B5" />
          <Text style={styles.linkedinButtonText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.messageButton} onPress={handleMessagePress}>
          <MessageCircle size={16} color="#ffffff" />
          <Text style={styles.messageButtonText}>Message</Text>
        </TouchableOpacity>
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#374151',
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F9FAFB',
    marginBottom: 2,
  },
  title: {
    fontSize: 14,
    color: '#60A5FA',
    fontWeight: '600',
    marginBottom: 2,
  },
  company: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 6,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F9FAFB',
  },
  sessionsText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  bio: {
    fontSize: 14,
    color: '#D1D5DB',
    lineHeight: 20,
    marginBottom: 12,
  },
  details: {
    gap: 8,
    marginBottom: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  expertiseContainer: {
    marginBottom: 16,
  },
  expertiseTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F9FAFB',
    marginBottom: 8,
  },
  expertiseChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    alignItems: 'center',
  },
  expertiseChip: {
    backgroundColor: '#374151',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  expertiseText: {
    fontSize: 12,
    color: '#60A5FA',
    fontWeight: '600',
  },
  moreExpertise: {
    fontSize: 12,
    color: '#9CA3AF',
    fontStyle: 'italic',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  linkedinButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#374151',
    paddingVertical: 10,
    borderRadius: 8,
    gap: 6,
    borderWidth: 1,
    borderColor: '#0077B5',
  },
  linkedinButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0077B5',
  },
  messageButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E40AF',
    paddingVertical: 10,
    borderRadius: 8,
    gap: 6,
  },
  messageButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
});