export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  initials: string;
  // Path inside /public/images/team/.
  photo: string;
}

export const team: TeamMember[] = [
  {
    name: "Irshad Ahmad",
    role: "Founder/CEO",
    specialty: "Oracle, COBOL, SQL, web & legacy systems — 35+ years experience",
    initials: "IA",
    photo: "/images/team/irshad.jpg",
  },
    {
    name: "Maooz Usman",
    role: "Co-Founder",
    specialty: "ASP.NET, Angular, Spring Boot, Microservices - 12+ years experience",
    initials: "MU",
    photo: "/images/team/maooz.jpeg",
  },
  {
    name: "Hamza Ahmad",
    role: "AI/ML Engineer",
    specialty: "Applied machine learning and AI product strategy",
    initials: "HA",
    photo: "/images/team/hamza.jpg",
  },
  {
    name: "Abdullah Yasin",
    role: "Software Engineer",
    specialty: "ASP.NET, Angular",
    initials: "AY",
    photo: "/images/team/abdullah.jpg",
  },
  {
    name: "Ahmad Haseeb Butt",
    role: "Computer Vision Engineer",
    specialty: "Computer vision & vision-language models",
    initials: "AH",
    photo: "/images/team/ahmad.jpg",
  },
  {
    name: "Moiz Asif",
    role: "AI/ML Engineer",
    specialty: "NLP, RAG & LLM systems",
    initials: "MA",
    photo: "/images/team/moiz.png",
  },
];
