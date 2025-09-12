import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Star, Clock, Play, CircleCheck as CheckCircle } from 'lucide-react-native';

interface CourseCardProps {
  course: {
    title: string;
    provider: string;
    duration: string;
    rating: number;
    price: string;
    image: string;
    progress: number;
    skills: string[];
  };
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: course.image }} style={styles.image} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.provider}>{course.provider}</Text>
        </View>

        <View style={styles.meta}>
          <View style={styles.rating}>
            <Star size={14} color="#F59E0B" fill="#F59E0B" />
            <Text style={styles.ratingText}>{course.rating}</Text>
          </View>
          <View style={styles.duration}>
            <Clock size={14} color="#9CA3AF" />
            <Text style={styles.durationText}>{course.duration}</Text>
          </View>
          <Text style={styles.price}>{course.price}</Text>
        </View>

        {course.progress > 0 && (
          <View style={styles.progressSection}>
            <View style={styles.progressBar}>
              <View 
                style={[styles.progressFill, { width: `${course.progress}%` }]}
              />
            </View>
            <Text style={styles.progressText}>{course.progress}% complete</Text>
          </View>
        )}

        <View style={styles.skillsContainer}>
          {course.skills.map((skill, index) => (
            <View key={index} style={styles.skillChip}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.actionButton}>
          {course.progress === 0 ? (
            <Play size={16} color="#ffffff" />
          ) : course.progress === 100 ? (
            <CheckCircle size={16} color="#ffffff" />
          ) : (
            <Play size={16} color="#ffffff" />
          )}
          <Text style={styles.actionText}>
            {course.progress === 0 ? 'Start Course' :
             course.progress === 100 ? 'Completed' : 'Continue'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
    backgroundColor: '#374151',
  },
  content: {
    padding: 16,
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#F9FAFB',
    marginBottom: 2,
  },
  provider: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#F9FAFB',
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  durationText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: '#10B981',
    marginLeft: 'auto',
  },
  progressSection: {
    marginBottom: 12,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#374151',
    borderRadius: 2,
    marginBottom: 4,
  },
  progressFill: {
    height: 4,
    backgroundColor: '#10B981',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'right',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 16,
  },
  skillChip: {
    backgroundColor: '#374151',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  skillText: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '600',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
});