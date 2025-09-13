import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Award, Calendar, ExternalLink, CircleCheck as CheckCircle } from 'lucide-react-native';

interface CertificationCardProps {
  certificate: {
    title: string;
    issuer: string;
    issueDate: string;
    expiryDate: string | null;
    credentialId: string;
    image: string;
    skills: string[];
    verified: boolean;
  };
}

export function CertificationCard({ certificate }: CertificationCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: certificate.image }} style={styles.image} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{certificate.title}</Text>
            <Text style={styles.issuer}>{certificate.issuer}</Text>
          </View>
          {certificate.verified && (
            <View style={styles.verifiedBadge}>
              <CheckCircle size={16} color="#10B981" />
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          )}
        </View>

        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Calendar size={16} color="#9CA3AF" />
            <Text style={styles.detailText}>
              Issued: {formatDate(certificate.issueDate)}
            </Text>
          </View>
          {certificate.expiryDate && (
            <View style={styles.detailItem}>
              <Calendar size={16} color="#9CA3AF" />
              <Text style={styles.detailText}>
                Expires: {formatDate(certificate.expiryDate)}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.skillsContainer}>
          {certificate.skills.map((skill, index) => (
            <View key={index} style={styles.skillChip}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.credentialId}>ID: {certificate.credentialId}</Text>
          <TouchableOpacity style={styles.viewButton}>
            <ExternalLink size={16} color="#60A5FA" />
            <Text style={styles.viewButtonText}>View Certificate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
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
  issuer: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  verifiedText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#16A34A',
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
    color: '#60A5FA',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  credentialId: {
    fontSize: 11,
    color: '#6B7280',
    fontFamily: 'monospace',
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#60A5FA',
  },
});