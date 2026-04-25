import {
  Award,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Layers,
  Mail,
  MapPin,
  Phone,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";
import heroImage from "./assets/hero.png";
import "./index.css";

const genAiProjects = [
  {
    title: "AI Knowledge Chatbot",
    desc: "Production-ready RAG chatbot with semantic search, vector embeddings, contextual LLM responses, and Spring Boot APIs.",
    tech: ["LLMs", "RAG", "Vector DB", "Spring Boot"],
    icon: BrainCircuit,
  },
  {
    title: "AI Agent Automation",
    desc: "Multi-step AI agents for reasoning, decision-making, external API execution, and tool-calling automation workflows.",
    tech: ["AI Agents", "Tool Calling", "REST APIs", "Workflow"],
    icon: Bot,
  },
  {
    title: "Document Processing AI",
    desc: "LLM pipelines for structured extraction, summarisation, information retrieval, and scalable document workflow automation.",
    tech: ["Document AI", "Summarisation", "LLMs", "Backend Services"],
    icon: FileText,
  },
];

const skillGroups = [
  {
    title: "Generative AI",
    items: ["LLMs", "RAG", "Prompt Engineering", "AI Agents", "Semantic Search"],
    icon: Sparkles,
  },
  {
    title: "AWS",
    items: ["Bedrock", "Lambda", "API Gateway", "S3"],
    icon: Cloud,
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Microservices", "REST APIs"],
    icon: Server,
  },
  {
    title: "Frontend",
    items: ["ReactJS", "Angular", "JavaScript"],
    icon: Code2,
  },
  {
    title: "Data",
    items: ["MySQL", "Oracle", "SQL Optimization", "Data Pipelines"],
    icon: Database,
  },
  {
    title: "DevOps",
    items: ["Docker", "Kubernetes", "Jenkins"],
    icon: Workflow,
  },
];

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Accenture UK",
    period: "2024 - Present",
    points: [
      "Developing cloud-native Java and Spring Boot microservices for enterprise-grade platforms.",
      "Designing REST APIs and integrating intelligent data processing and AI-driven features.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Level E Research",
    period: "2022 - 2024",
    points: [
      "Built backend services for financial analytics and investment platforms using Spring Boot.",
      "Integrated ML models and real-time market data APIs into production systems.",
    ],
  },
  {
    role: "Technology Analyst",
    company: "Infosys",
    period: "2018 - 2021",
    points: [
      "Developed REST-based microservices and migrated legacy systems to scalable architectures.",
      "Worked on high-availability systems with performance and reliability optimization.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Apalya Technologies",
    period: "2018",
    points: [
      "Developed backend services for OTT billing, subscriptions, and database-backed platform modules.",
    ],
  },
];

const proofPoints = [
  { label: "Years engineering", value: "6+" },
  { label: "Current focus", value: "GenAI + AWS" },
  { label: "Certified", value: "AWS AI Practitioner" },
];

function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-zinc-100">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.20),transparent_32%),linear-gradient(135deg,#0a0a0a_0%,#101828_52%,#111827_100%)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 py-8 sm:px-8 lg:px-10">
          <nav className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <a href="#" className="text-lg font-semibold tracking-wide text-white">
              Vamsikrishna
            </a>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-zinc-300">
              <a className="hover:text-teal-300" href="#genai">GenAI Work</a>
              <a className="hover:text-teal-300" href="#skills">Skills</a>
              <a className="hover:text-teal-300" href="#experience">Experience</a>
              <a className="hover:text-teal-300" href="#contact">Contact</a>
            </div>
          </nav>

          <div className="grid gap-10 pb-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 flex flex-wrap gap-3 text-sm text-zinc-300">
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <MapPin size={16} className="text-teal-300" />
                  Newcastle, UK
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <BriefcaseBusiness size={16} className="text-amber-300" />
                  Senior Software Engineer
                </span>
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
                Java Microservices | Generative AI | AWS
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Building cloud-native backend systems with practical GenAI intelligence.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Senior Software Engineer with 6+ years of Java full-stack experience,
                specializing in scalable Spring Boot microservices, AWS-based intelligent
                systems, RAG applications, vector search, and AI agent architectures.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#genai"
                  className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-5 py-3 font-semibold text-neutral-950 transition hover:bg-teal-300"
                >
                  <Sparkles size={18} />
                  View GenAI Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
                >
                  <Mail size={18} />
                  Contact
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <div className="grid gap-0 sm:grid-cols-[0.86fr_1.14fr]">
                  <div className="flex items-end justify-center bg-zinc-900 px-8 pt-8">
                    <img
                      src={heroImage}
                      alt="Vamsikrishna portfolio visual"
                      className="h-auto max-h-80 w-full max-w-72 object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                      Resume Snapshot
                    </p>
                    <div className="mt-5 grid gap-4">
                      {proofPoints.map((item) => (
                        <div key={item.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                          <p className="text-2xl font-bold text-white">{item.value}</p>
                          <p className="mt-1 text-sm text-zinc-400">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {["Spring Boot", "AWS Bedrock", "Vector Search"].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-neutral-900/80 px-4 py-3 text-sm font-semibold text-zinc-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="genai" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">GenAI Projects</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Applied LLM systems, not demo-only experiments.</h2>
          </div>
          <p className="max-w-2xl text-zinc-400">
            The portfolio now foregrounds the resume's strongest GenAI proof: RAG, AI agents,
            document intelligence, and Spring Boot-backed production APIs.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {genAiProjects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.title} className="rounded-lg border border-white/10 bg-zinc-900 p-6 transition hover:border-teal-300/70">
                <Icon className="mb-5 h-9 w-9 text-teal-300" />
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 min-h-28 leading-7 text-zinc-400">{project.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-lg bg-neutral-800 px-3 py-1 text-sm text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-zinc-900/60">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Core Skills</p>
            <h2 className="mt-3 text-3xl font-bold text-white">A backend-first stack with AI delivery depth.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <section key={group.title} className="rounded-lg border border-white/10 bg-neutral-950 p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon className="h-6 w-6 text-teal-300" />
                    <h3 className="text-lg font-bold text-white">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mb-8 grid gap-4 md:grid-cols-[0.7fr_1fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Experience</p>
            <h2 className="mt-3 text-3xl font-bold text-white">From enterprise platforms to AI-enabled products.</h2>
          </div>
          <p className="text-zinc-400">
            Career progression across Accenture UK, Level E Research, Infosys, and Apalya,
            with a consistent through-line in backend services, scalable APIs, data systems,
            and production reliability.
          </p>
        </div>

        <div className="grid gap-4">
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="rounded-lg border border-white/10 bg-zinc-900 p-5">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <p className="mt-1 flex items-center gap-2 text-zinc-300">
                    <Building2 size={16} className="text-amber-300" />
                    {job.company}
                  </p>
                </div>
                <p className="rounded-lg border border-white/10 px-3 py-1 text-sm font-semibold text-zinc-300">
                  {job.period}
                </p>
              </div>
              <ul className="mt-4 grid gap-2 text-zinc-400 md:grid-cols-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-7">
                    <Layers className="mt-1 h-4 w-4 shrink-0 text-teal-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-900">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 sm:px-8 md:grid-cols-3 lg:px-10">
          <div className="flex items-start gap-4">
            <Cpu className="mt-1 h-6 w-6 text-teal-300" />
            <div>
              <h3 className="font-bold text-white">System Design</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">Scalable microservices, REST APIs, high availability, and legacy modernization.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Cloud className="mt-1 h-6 w-6 text-amber-300" />
            <div>
              <h3 className="font-bold text-white">Cloud AI</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">AWS Bedrock, Lambda, API Gateway, S3, intelligent processing, and AI features.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Award className="mt-1 h-6 w-6 text-indigo-300" />
            <div>
              <h3 className="font-bold text-white">Certification</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">AWS Certified AI Practitioner with hands-on GenAI delivery experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(20,184,166,0.14),rgba(251,191,36,0.10),rgba(39,39,42,0.85))] p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Contact</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Open to GenAI, Java backend, and AWS engineering roles.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-4 py-3 font-semibold text-neutral-950 hover:bg-teal-300" href="mailto:vamsi.kp1995@gmail.com">
                <Mail size={18} /> Email
              </a>
              <a className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 font-semibold text-white hover:border-teal-300" href="tel:+447448217892">
                <Phone size={18} /> Phone
              </a>
              <a className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 font-semibold text-white hover:border-teal-300" href="https://github.com/work-vamsikrishnapujari" target="_blank" rel="noreferrer">
                <Code2 size={18} /> GitHub
              </a>
              <a className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 font-semibold text-white hover:border-teal-300" href="/Vamsikrishna_GenAI_Resume_Detailed.docx">
                <ExternalLink size={18} /> Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
