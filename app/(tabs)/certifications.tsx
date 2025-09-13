import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Award, Calendar, ExternalLink, Trophy, Target, Plus } from 'lucide-react-native';
import { CertificationCard } from '@/components/CertificationCard';
import { HackathonCard } from '@/components/HackathonCard';

export default function CertificationsScreen() {
  const [selectedTab, setSelectedTab] = useState('certificates');

  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: '2024-01-15',
      expiryDate: '2027-01-15',
      credentialId: 'AWS-CSA-2024-001',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?w=400',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3'],
      verified: true,
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      issueDate: '2023-11-20',
      expiryDate: '2025-11-20',
      credentialId: 'GCP-PD-2023-045',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?w=400',
      skills: ['GCP', 'Kubernetes', 'Docker', 'DevOps'],
      verified: true,
    },
    {
      title: 'Meta React Developer Certificate',
      issuer: 'Meta (Coursera)',
      issueDate: '2023-09-10',
      expiryDate: null,
      credentialId: 'META-RD-2023-789',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?w=400',
      skills: ['React', 'JavaScript', 'Frontend'],
      verified: true,
    },
  ];

  const hackathons = [
    {
      title: 'TechCrunch Disrupt Hackathon 2024',
      position: '1st Place',
      date: '2024-02-15',
      location: 'San Francisco, CA',
      project: 'AI-Powered Code Review Tool',
      teamSize: 4,
      prize: '$10,000',
      technologies: ['Python', 'OpenAI API', 'React', 'FastAPI'],
      description: 'Built an AI tool that automatically reviews code and suggests improvements',
    },
    {
      title: 'Google Developer Challenge',
      position: '3rd Place',
      date: '2023-12-08',
      location: 'Virtual',
      project: 'Smart Campus Navigation',
      teamSize: 3,
      prize: '$2,500',
      technologies: ['Flutter', 'Firebase', 'Google Maps API'],
      description: 'Mobile app for indoor navigation using AR and machine learning',
    },
    {
      title: 'NASA Space Apps Challenge',
      position: 'Finalist',
      date: '2023-10-07',
      location: 'New York, NY',
      project: 'Mars Weather Predictor',
      teamSize: 5,
      prize: 'Recognition',
      technologies: ['Python', 'TensorFlow', 'NASA APIs'],
      description: 'ML model to predict weather patterns on Mars using NASA data',
    },
  ];

  const tabs = [
    { id: 'certificates', label: 'Certificates' },
    { id: 'hackathons', label: 'Hackathons' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Achievements</Text>
        <Text style={styles.subtitle}>Your certifications and competition wins</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={20} color="#60A5FA" />
          <Text style={styles.addButtonText}>Add New</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tab,
                selectedTab === tab.id && styles.tabActive
              ]}
              onPress={() => setSelectedTab(tab.id)}>
              <Text style={[
                styles.tabText,
                selectedTab === tab.id && styles.tabTextActive
              ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedTab === 'certificates' && (
          <View style={styles.section}>
            <View style={styles.statsRow}>
              <View style={styles.statCard}>
                <Award size={24} color="#60A5FA" />
                <Text style={styles.statNumber}>{certificates.length}</Text>
                <Text style={styles.statLabel}>Certificates</Text>
              </View>
              <View style={styles.statCard}>
                <Trophy size={24} color="#10B981" />
                <Text style={styles.statNumber}>
                  {certificates.filter(c => c.verified).length}
                </Text>
                <Text style={styles.statLabel}>Verified</Text>
              </View>
            </View>

            <View style={styles.certificatesContainer}>
              {certificates.map((cert, index) => (
                <CertificationCard key={index} certificate={cert} />
              ))}
            </View>
          </View>
        )}

        {selectedTab === 'hackathons' && (
          <View style={styles.section}>
            <View style={styles.statsRow}>
              <View style={styles.statCard}>
                <Target size={24} color="#8B5CF6" />
                <Text style={styles.statNumber}>{hackathons.length}</Text>
                <Text style={styles.statLabel}>Competitions</Text>
              </View>
              <View style={styles.statCard}>
                <Trophy size={24} color="#F59E0B" />
                <Text style={styles.statNumber}>
                  {hackathons.filter(h => h.position.includes('Place')).length}
                </Text>
                <Text style={styles.statLabel}>Wins</Text>
              </View>
            </View>

            <View style={styles.hackathonsContainer}>
              {hackathons.map((hackathon, index) => (
                <HackathonCard key={index} hackathon={hackathon} />
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
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
    marginBottom: 16,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    gap: 8,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#60A5FA',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 12,
  },
  tab: {
    backgroundColor: '#1F2937',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#1E40AF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  tabTextActive: {
    color: '#ffffff',
  },
  section: {
    marginBottom: 32,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1F2937',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#F9FAFB',
  },
  statLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  certificatesContainer: {
    gap: 16,
  },
  hackathonsContainer: {
    gap: 16,
  },
});