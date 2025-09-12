import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Send, Bot, User, Lightbulb, MessageSquare } from 'lucide-react-native';
import { ChatMessage } from '@/components/ChatMessage';
import { QuickPrompt } from '@/components/QuickPrompt';

export default function CoachScreen() {
  const [message, setMessage] = useState('');
  type ChatType = 'ai' | 'user';
  type ChatHistoryItem = {
    id: string;
    type: ChatType;
    content: string;
    timestamp: string;
  };

  const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm your AI Career Coach. I can help you with career guidance, resume feedback, interview preparation, and skill development. What would you like to work on today?",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const quickPrompts = [
    {
      title: "Resume Review",
      prompt: "Can you review my resume and suggest improvements?",
      icon: "📄"
    },
    {
      title: "Interview Prep",
      prompt: "Help me prepare for a software engineering interview",
      icon: "🎯"
    },
    {
      title: "Salary Negotiation",
      prompt: "How should I approach salary negotiation?",
      icon: "💰"
    },
    {
      title: "Career Change",
      prompt: "I want to transition to a different role. What should I consider?",
      icon: "🚀"
    },
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      type: 'user' as const,
      content: message,
      timestamp: new Date().toLocaleTimeString(),
    };

    setChatHistory(prev => [...prev, userMessage]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai' as const,
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString(),
      };
      setChatHistory(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('resume')) {
      return "I'd be happy to help with your resume! Here are some key areas to focus on:\n\n• Use action verbs and quantify achievements\n• Tailor your resume to each job application\n• Keep it concise (1-2 pages)\n• Highlight relevant technical skills\n\nWould you like me to review specific sections of your resume?";
    } else if (lowerMessage.includes('interview')) {
      return "Great! Interview preparation is crucial. Here's what I recommend:\n\n• Research the company and role thoroughly\n• Practice common technical and behavioral questions\n• Prepare STAR method examples\n• Have thoughtful questions ready to ask\n\nWhat type of interview are you preparing for? Technical, behavioral, or both?";
    } else if (lowerMessage.includes('salary')) {
      return "Salary negotiation can be tricky but rewarding. Here are my tips:\n\n• Research market rates for your role and location\n• Highlight your unique value and achievements\n• Consider the full compensation package\n• Be prepared to justify your ask\n\nWhat's your current experience level and target role?";
    } else if (lowerMessage.includes('career change')) {
      return "Career transitions require careful planning. Let's think through this:\n\n• Identify transferable skills from your current role\n• Research the new field thoroughly\n• Consider additional training or certifications\n• Network with professionals in your target field\n\nWhat career path are you considering moving into?";
    } else {
      return "That's a great question! Based on your profile and goals, I'd suggest focusing on:\n\n• Building stronger leadership skills\n• Expanding your technical expertise\n• Networking within your industry\n• Setting clear career milestones\n\nCould you provide more specific details about what you're looking to achieve?";
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Bot size={32} color="#60A5FA" />
          <View>
            <Text style={styles.title}>AI Career Coach</Text>
            <Text style={styles.subtitle}>Your personal career advisor</Text>
          </View>
        </View>
      </View>

      <ScrollView 
        style={styles.chatContainer} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.chatContent}>
        
        {chatHistory.length === 1 && (
          <View style={styles.quickPromptsContainer}>
            <Text style={styles.quickPromptsTitle}>Quick Start</Text>
            <View style={styles.quickPromptsGrid}>
              {quickPrompts.map((prompt, index) => (
                <QuickPrompt 
                  key={index} 
                  prompt={prompt}
                  onPress={() => handleQuickPrompt(prompt.prompt)}
                />
              ))}
            </View>
          </View>
        )}

        {chatHistory.map((chat, index) => (
          <ChatMessage key={chat.id} message={chat} />
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Ask me about your career..."
          multiline
          maxLength={500}
        />
        <TouchableOpacity 
          style={[styles.sendButton, !message.trim() && styles.sendButtonDisabled]}
          onPress={handleSendMessage}
          disabled={!message.trim()}>
          <Send size={20} color={message.trim() ? '#ffffff' : '#9ca3af'} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  header: {
    backgroundColor: '#1F2937',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 0,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#F9FAFB',
  },
  subtitle: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  chatContent: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  quickPromptsContainer: {
    marginBottom: 24,
  },
  quickPromptsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#D1D5DB',
    marginBottom: 12,
  },
  quickPromptsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#1F2937',
    borderTopWidth: 0,
    gap: 12,
  },
  input: {
    flex: 1,
    borderWidth: 0,
    backgroundColor: '#374151',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    maxHeight: 100,
    color: '#F9FAFB',
  },
  sendButton: {
    backgroundColor: '#3B82F6',
    padding: 12,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#374151',
  },
});