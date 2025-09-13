import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Users, Search, MapPin, Briefcase, Star, MessageCircle, Filter } from 'lucide-react-native';
import { MentorCard } from '@/components/MentorCard';

export default function MentorsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const mentors = [
    {
      name: 'Sarah Chen',
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA',
      experience: '8 years',
      expertise: ['React', 'Node.js', 'System Design', 'Leadership'],
      rating: 4.9,
      sessions: 127,
      linkedinId: 'sarah-chen-google',
      bio: 'Passionate about mentoring junior developers and helping them grow their careers in tech.',
      availability: 'Weekends',
      languages: ['English', 'Mandarin'],
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400',
    },
    {
      name: 'Marcus Johnson',
      title: 'Principal Data Scientist',
      company: 'Microsoft',
      location: 'Seattle, WA',
      experience: '12 years',
      expertise: ['Machine Learning', 'Python', 'Data Analysis', 'AI Strategy'],
      rating: 4.8,
      sessions: 89,
      linkedinId: 'marcus-johnson-microsoft',
      bio: 'Helping aspiring data scientists break into the field and advance their careers.',
      availability: 'Evenings',
      languages: ['English', 'Spanish'],
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400',
    },
    {
      name: 'Priya Patel',
      title: 'VP of Product',
      company: 'Stripe',
      location: 'San Francisco, CA',
      experience: '10 years',
      expertise: ['Product Management', 'Strategy', 'User Research', 'Growth'],
      rating: 4.9,
      sessions: 156,
      linkedinId: 'priya-patel-stripe',
      bio: 'Former startup founder turned product leader. Love helping others navigate product careers.',
      availability: 'Flexible',
      languages: ['English', 'Hindi', 'Gujarati'],
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=400',
    },
    {
      name: 'David Kim',
      title: 'Staff Security Engineer',
      company: 'Netflix',
      location: 'Los Gatos, CA',
      experience: '9 years',
      expertise: ['Cybersecurity', 'DevSecOps', 'Cloud Security', 'Incident Response'],
      rating: 4.7,
      sessions: 73,
      linkedinId: 'david-kim-netflix',
      bio: 'Cybersecurity expert helping professionals transition into security roles.',
      availability: 'Weekdays',
      languages: ['English', 'Korean'],
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=400',
    },
    {
      name: 'Emily Rodriguez',
      title: 'Design Director',
      company: 'Airbnb',
      location: 'San Francisco, CA',
      experience: '11 years',
      expertise: ['UX Design', 'Design Systems', 'User Research', 'Team Leadership'],
      rating: 4.9,
      sessions: 134,
      linkedinId: 'emily-rodriguez-airbnb',
      bio: 'Design leader passionate about creating inclusive products and mentoring designers.',
      availability: 'Weekends',
      languages: ['English', 'Spanish'],
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?w=400',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Mentors' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'product', label: 'Product' },
    { id: 'design', label: 'Design' },
    { id: 'data', label: 'Data Science' },
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (selectedFilter === 'all') return matchesSearch;
    
    const filterMap = {
      engineering: ['React', 'Node.js', 'System Design', 'Cybersecurity', 'DevSecOps'],
      product: ['Product Management', 'Strategy', 'User Research', 'Growth'],
      design: ['UX Design', 'Design Systems', 'User Research'],
      data: ['Machine Learning', 'Python', 'Data Analysis', 'AI Strategy'],
    };
    
    const filterSkills = filterMap[selectedFilter] || [];
    const matchesFilter = mentor.expertise.some(skill => 
      filterSkills.some(filterSkill => skill.includes(filterSkill))
    );
    
    return matchesSearch && matchesFilter;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Find Mentors</Text>
        <Text style={styles.subtitle}>Connect with industry experts</Text>
        
        <View style={styles.searchContainer}>
          <Search size={20} color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name or skills..."
            placeholderTextColor="#6B7280"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.filtersContainer}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.id}
              style={[
                styles.filterButton,
                selectedFilter === filter.id && styles.filterButtonActive
              ]}
              onPress={() => setSelectedFilter(filter.id)}>
              <Text style={[
                styles.filterText,
                selectedFilter === filter.id && styles.filterTextActive
              ]}>
                {filter.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Users size={20} color="#60A5FA" />
            <Text style={styles.statText}>{filteredMentors.length} mentors available</Text>
          </View>
        </View>

        <View style={styles.mentorsContainer}>
          {filteredMentors.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
        </View>

        {filteredMentors.length === 0 && (
          <View style={styles.emptyState}>
            <Users size={48} color="#6B7280" />
            <Text style={styles.emptyTitle}>No mentors found</Text>
            <Text style={styles.emptyText}>
              Try adjusting your search or filter criteria
            </Text>
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
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  filtersContainer: {
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#1F2937',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  filterButtonActive: {
    backgroundColor: '#1E40AF',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
  },
  filterTextActive: {
    color: '#ffffff',
  },
  statsContainer: {
    marginBottom: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statText: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  mentorsContainer: {
    gap: 16,
    paddingBottom: 32,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 48,
    gap: 12,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F9FAFB',
  },
  emptyText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
  },
});