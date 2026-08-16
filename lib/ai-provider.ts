export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are the AI Assistant for IntekCT — a premier Full Stack Web Application Development & Cybersecurity (DevSecOps) startup.
Your core mission is to assist visitors, answer questions about engineering and security services, explain our DevSecOps approach, qualify prospective leads, and encourage booking a discovery call.

Key IntekCT facts:
- Core Theme: "Sophisticated Strength" — high-performance modern web apps shielded by unbreakable security from Day One.
- Services: Full Stack App Development (Next.js, React, Node), Secure API Engineering, Penetration Testing & Vulnerability Audits, DevSecOps Automated CI/CD Pipelines, Cloud Infrastructure (AWS, Vercel), UI/UX with built-in data privacy.
- Pricing Tiers: We provide custom scope-based pricing tailored to your project requirements (MVP & Hardened Launch, Full Stack DevSecOps Suite, Enterprise Fortress). Never state specific dollar prices.
- Differentiators: Security-first approach, zero-trust architecture, Lighthouse 90+ performance, direct developer communication, zero compromise on speed.
- Booking Link: Visitors can schedule a project call at https://cal.com/intekct/project-discovery or fill out the contact form.

Tone & Style: Concise, confident, technically credible, professional, helpful, and sleek. Keep responses focused and readable (2-4 paragraphs maximum, use bullet points where helpful). Never break character.`;

export async function generateAIResponse(messages: ChatMessage[]): Promise<string> {
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  // 1. Try Anthropic API if key is present
  if (anthropicKey && anthropicKey !== "your_anthropic_api_key_here") {
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": anthropicKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-3-5-sonnet-20241022",
          max_tokens: 600,
          system: SYSTEM_PROMPT,
          messages: messages
            .filter((m) => m.role !== "system")
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.content && data.content[0] && data.content[0].text) {
          return data.content[0].text;
        }
      }
    } catch (err) {
      console.warn("Anthropic API call failed, falling back:", err);
    }
  }

  // 2. Try OpenAI API if key is present
  if (openaiKey && openaiKey !== "your_openai_api_key_here") {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          max_tokens: 600,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.filter((m) => m.role !== "system"),
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.choices && data.choices[0] && data.choices[0].message?.content) {
          return data.choices[0].message.content;
        }
      }
    } catch (err) {
      console.warn("OpenAI API call failed, falling back:", err);
    }
  }

  // 3. Fallback Intelligent Mock AI Response Engine (Works when no API key is provided)
  const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";

  if (lastUserMessage.includes("price") || lastUserMessage.includes("cost") || lastUserMessage.includes("tier") || lastUserMessage.includes("quote")) {
    return "Our pricing is custom-tailored to your exact project scope and security requirements:\n\n" +
      "• **MVP & Hardened Launch (Custom Scope)**: Full stack Next.js app, responsive UI, basic OWASP audit, and automated CI/CD pipeline.\n" +
      "• **Full Stack DevSecOps Suite (Tailored Scope)**: Complete web platform, custom APIs, AI integration, black-box pentest audit, zero-trust auth, and compliance check.\n" +
      "• **Enterprise Fortress (Enterprise Scope)**: Dedicated lead engineers, AWS/GCP cloud VPC, 24/7 SLA telemetry defense, and continuous security audits.\n\n" +
      "Would you like to discuss your project scope or book a discovery call to receive a custom proposal?";
  }

  if (lastUserMessage.includes("service") || lastUserMessage.includes("build") || lastUserMessage.includes("stack") || lastUserMessage.includes("react") || lastUserMessage.includes("next")) {
    return "IntekCT specializes in 6 core engineering capabilities:\n\n" +
      "1. **Full Stack App Development**: High-speed Next.js 14, React, Node.js & cloud architecture.\n" +
      "2. **Secure API Engineering**: OAuth2, zero-trust token validation & encrypted payload pipelines.\n" +
      "3. **Penetration Testing**: Proactive OWASP Top 10 vulnerability audits & exploit remediation.\n" +
      "4. **DevSecOps & CI/CD**: Automated SAST/DAST security scanning built into GitHub Actions.\n" +
      "5. **Cloud Security Infra**: AWS/Vercel zero-trust IAM, WAF edge protection, and isolation.\n" +
      "6. **Secure UI/UX Design**: Stunning Framer Motion interfaces built with HIPAA/GDPR data privacy.\n\n" +
      "What specific application or security challenge are you looking to solve?";
  }

  if (lastUserMessage.includes("security") || lastUserMessage.includes("pentest") || lastUserMessage.includes("audit") || lastUserMessage.includes("vulnerability") || lastUserMessage.includes("hack")) {
    return "Security is not an afterthought at IntekCT — it's built into every line of code from Day One:\n\n" +
      "• **Threat Modeling**: We map STRIDE attack surfaces before writing code.\n" +
      "• **Automated Pipelines**: SAST dependency scanners run on every git commit.\n" +
      "• **Pre-Launch Pentesting**: Our certified security team conducts black-box exploits before production release.\n" +
      "• **WAF & Encryption**: Data is encrypted at rest (AES-256) and in transit (TLS 1.3) with edge WAF firewalls.\n\n" +
      "Shall we perform a security assessment or build a hardened web application for you?";
  }

  if (lastUserMessage.includes("book") || lastUserMessage.includes("contact") || lastUserMessage.includes("call") || lastUserMessage.includes("hire") || lastUserMessage.includes("demo")) {
    return "Awesome! We'd love to partner with you. You can connect with us directly:\n\n" +
      "📱 **WhatsApp / Call**: [+91 95942 92262](https://wa.me/919594292262)\n" +
      "✉️ **Email**: intekcttechnology@gmail.com\n\n" +
      "Or fill out our contact form on the page and we will get back to you within 2 hours!";
  }

  return "Welcome to IntekCT! I am your AI Assistant capability demo.\n\n" +
    "We engineer high-converting web applications with enterprise-grade cybersecurity (DevSecOps) built right in. Whether you need a Next.js web application built from scratch, automated security pipelines, or a thorough penetration test, we've got you covered.\n\n" +
    "How can I help you with your project today?";
}
