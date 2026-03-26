import { useState, useCallback } from 'react';
import type { ChatMessage } from '../types';

const CANNED_RESPONSES: Record<string, string> = {
  default:
    "Thanks for reaching out! I can help you learn about SYSCOM's services, products, and capabilities. What would you like to know?",
  services:
    "SYSCOM offers six core service areas: Enterprise Content Management, Business Process Automation, Enterprise Capture, Content Migration, Platform Integration, and AI & Intelligent Automation. Which area interests you most?",
  migration:
    "Our AnySource Migrator (ASM) is the industry's most comprehensive content migration platform. It moves documents, metadata, security, and folder structures between 20+ ECM platforms. Want to learn more about ASM?",
  asm:
    "AnySource Migrator supports IBM CM8, FileNet, Documentum, SharePoint, and many more platforms. It preserves full metadata and security settings during migration, with audit trail and validation reporting built in.",
  products:
    "SYSCOM builds and owns three core products: AnySource Migrator (ASM) for content migration, AIS Bridge as a modern ImagePlus replacement, and IBIG for service-oriented content delivery. Which product interests you?",
  ai:
    "SYSCOM's AI & Intelligent Automation practice applies computer vision, natural language processing, and intelligent classification to transform how organizations process content. Our CTO leads this initiative.",
  about:
    "SYSCOM has been solving enterprise content challenges since 1982. Based in Baltimore, we serve government, financial services, and healthcare clients. Our 70%+ employee retention rate over 5 years speaks to our culture.",
  contact:
    "You can reach SYSCOM at (410) 539-3737 or sales@syscom.com. Our office is at 400 East Pratt Street, Suite 600, Baltimore, MD 21202. We'd love to hear from you!",
  government:
    "SYSCOM has deep experience with state and federal government agencies. We handle document processing, records management, and compliance solutions for agencies managing millions of citizen documents.",
};

function findResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes('migrat') || lower.includes('move content'))
    return CANNED_RESPONSES.migration;
  if (lower.includes('asm') || lower.includes('anysource'))
    return CANNED_RESPONSES.asm;
  if (lower.includes('product')) return CANNED_RESPONSES.products;
  if (lower.includes('service')) return CANNED_RESPONSES.services;
  if (lower.includes('ai') || lower.includes('automat') || lower.includes('intelligen'))
    return CANNED_RESPONSES.ai;
  if (lower.includes('about') || lower.includes('history') || lower.includes('who'))
    return CANNED_RESPONSES.about;
  if (lower.includes('contact') || lower.includes('reach') || lower.includes('phone'))
    return CANNED_RESPONSES.contact;
  if (lower.includes('gov') || lower.includes('federal') || lower.includes('state'))
    return CANNED_RESPONSES.government;
  return CANNED_RESPONSES.default;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        "Hello! I'm SYSCOM's virtual assistant. Ask me about our services, products, or how we can help with your enterprise content challenges.",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback((content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate API response delay
    // TODO: Replace with Claude API integration
    // Integration point: POST to /api/chat with { message: content, history: messages }
    // Expected response: { reply: string }
    // Use the Anthropic SDK: import Anthropic from '@anthropic-ai/sdk'
    // const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
    // const response = await client.messages.create({
    //   model: 'claude-sonnet-4-20250514',
    //   max_tokens: 1024,
    //   system: 'You are SYSCOM\'s helpful assistant...',
    //   messages: history
    // })
    setTimeout(() => {
      const response = findResponse(content);
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  }, []);

  return { messages, isTyping, sendMessage };
}
