export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  highlightBadge: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "IntekCT delivered our Next.js fintech portal 3 weeks ahead of schedule and passed our third-party penetration audit with zero critical vulnerabilities. Their DevSecOps approach is unmatched.",
    author: "Alex Morgan [EDIT ME]",
    role: "Chief Technology Officer",
    company: "Apex Vault Protocol",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlightBadge: "Passed Pentest 100%",
  },
  {
    id: "test-2",
    quote: "Most agencies build beautiful UIs that leak data under pressure. IntekCT built a stunning, hyper-fast healthcare application that achieved HIPAA compliance on day one.",
    author: "Dr. Sarah Chen [EDIT ME]",
    role: "VP of Product",
    company: "MediSecure Systems",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlightBadge: "HIPAA Compliant",
  },
  {
    id: "test-3",
    quote: "Working with IntekCT felt like having an elite elite DevSecOps team inside our company. Their communication was crystal clear and the speed of delivery blew us away.",
    author: "David Vance [EDIT ME]",
    role: "Founder & CEO",
    company: "Veloce Commerce",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlightBadge: "3.2x Revenue Growth",
  },
];
