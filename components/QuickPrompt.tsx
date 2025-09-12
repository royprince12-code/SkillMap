import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface QuickPromptProps {
  prompt: {
    title: string;
    prompt: string;
    icon: string;
  };
  onPress: () => void;
}

export function QuickPrompt({ prompt, onPress }: QuickPromptProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.icon}>{prompt.icon}</Text>
      <Text style={styles.title}>{prompt.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#374151',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  icon: {
    fontSize: 16,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: '#D1D5DB',
  },
});