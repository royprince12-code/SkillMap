import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bot, User } from 'lucide-react-native';

interface ChatMessageProps {
  message: {
    id: string;
    type: 'user' | 'ai';
    content: string;
    timestamp: string;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.type === 'user';

  return (
    <View style={[styles.container, isUser ? styles.userMessage : styles.aiMessage]}>
      <View style={styles.iconContainer}>
        {isUser ? (
          <User size={20} color="#ffffff" />
        ) : (
          <Bot size={20} color="#60A5FA" />
        )}
      </View>
      
      <View style={styles.messageContent}>
        <Text style={[styles.messageText, isUser ? styles.userText : styles.aiText]}>
          {message.content}
        </Text>
        <Text style={styles.timestamp}>{message.timestamp}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 12,
  },
  userMessage: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  aiMessage: {
    alignSelf: 'flex-start',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B82F6',
  },
  messageContent: {
    flex: 1,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 4,
  },
  userText: {
    backgroundColor: '#3B82F6',
    color: '#ffffff',
    padding: 12,
    borderRadius: 16,
    borderBottomRightRadius: 4,
  },
  aiText: {
    backgroundColor: '#1F2937',
    color: '#F9FAFB',
    padding: 12,
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  timestamp: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 4,
    paddingLeft: 12,
  },
});