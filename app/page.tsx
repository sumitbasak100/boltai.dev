"use client"

import { useState, useRef, useEffect, type KeyboardEvent } from "react"
import Link from "next/link"
import {
  Clock,
  ArrowRight,
  Zap,
  Moon,
  Sun,
  Monitor,
  Smartphone,
  ChevronDown,
} from "lucide-react"

const examplePrompts = [
  "A modern e-commerce product page with image gallery and add to cart",
  "A fitness tracking dashboard with charts and progress metrics",
  "A social media profile page with posts and followers",
  "A restaurant menu app with categories and ordering system",
]

const faqItems = [
  {
    question: "What is Bolt AI?",
    answer:
      "Bolt AI is an advanced online platform that uses artificial intelligence to help designers, developers, and startups create UI/UX designs, wireframes, and interactive prototypes quickly and effortlessly.",
  },
  {
    question: "How does Bolt AI work?",
    answer:
      "Bolt AI uses generative AI models trained on thousands of design patterns and best practices. Simply describe your idea or upload design references, and the platform generates tailored prototypes or wireframes that match your vision.",
  },
  {
    question: "Who can use Bolt AI?",
    answer:
      "Bolt AI is designed for product designers, developers, entrepreneurs, agencies, and anyone looking to bring digital product ideas to life—no design experience required.",
  },
  {
    question: "What can I create with Bolt AI?",
    answer:
      "You can generate website layouts, mobile app designs, dashboard interfaces, landing pages, wireframes, and even clickable prototypes ready for presentation or development handoff.",
  },
  {
    question: "Can I customize the AI-generated designs?",
    answer:
      "Yes! Bolt AI provides editable components and an intuitive drag-and-drop editor, allowing you to tweak colors, typography, spacing, and layouts to match your brand style.",
  },
  {
    question: "Does Bolt AI support collaboration?",
    answer:
      "Absolutely. Teams can share, comment, and collaborate on designs in real time, making it easy to gather feedback and iterate faster.",
  },
  {
    question: "Can I export my designs?",
    answer:
      "Yes, Bolt AI allows you to export your projects in multiple formats, including Figma, Sketch, PNG, SVG, and interactive prototype links.",
  },
  {
    question: "How accurate are the AI-generated wireframes?",
    answer:
      "Bolt AI's models are trained on modern design principles, ensuring that generated wireframes are functional, consistent, and ready for refinement. You can easily adjust them to suit your project's needs.",
  },
  {
    question: "Is Bolt AI suitable for beginners?",
    answer:
      "Definitely. Bolt AI's interface is user-friendly and doesn't require prior design experience. Beginners can use text prompts to generate high-quality UI concepts within minutes.",
  },
  {
    question: "Does Bolt AI integrate with other design tools?",
    answer:
      "Yes, Bolt AI integrates with popular tools like Figma, Adobe XD, and Notion, as well as developer platforms for smoother design-to-development handoff.",
  },
  {
    question: "What pricing plans does Bolt AI offer?",
    answer:
      "Bolt AI offers a free plan with limited exports and premium plans with advanced AI features, unlimited projects, and team collaboration options. You can check the pricing page for details.",
  },
  {
    question: "How secure is my data on Bolt AI?",
    answer:
      "Your privacy and data security are top priorities. Bolt AI uses encrypted connections, secure cloud storage, and strict access controls to keep your projects safe and confidential.",
  },
]

export default function BoltAIPage() {
  const [prompt, setPrompt] = useState("")
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [platform, setPlatform] = useState<"web" | "mobile">("web")
  const [hasError, setHasError] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const autoResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  useEffect(() => {
    autoResize()
  }, [prompt])

  const handleGenerate = () => {
    const trimmedPrompt = prompt.trim()

    if (!trimmedPrompt) {
      setHasError(true)
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 380)
      textareaRef.current?.focus()
      return
    }

    window.open(
      `https://rapid.new/?prompt=${encodeURIComponent(trimmedPrompt)}&theme=${theme}&platform=${platform}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleGenerate()
    }
  }

  const handleExampleClick = (example: string) => {
    setPrompt(example)
    setHasError(false)
    textareaRef.current?.focus()
    document.getElementById("promptCard")?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-[#111827] font-sans antialiased">
      {/* Hero Section */}
      <header className="relative min-h-[620px] text-white overflow-hidden">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
          src="https://27207d2309f319f969ea5ca92b9d1685.cdn.bubble.io/f1760984634689x793524454583991700/rocket-hero-bg-DNDCMZYk%20%281%29.jpg"
          alt=""
          aria-hidden="true"
        />
        {/* Dark Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(6, 14, 35, 0.52) 0%, rgba(6, 14, 35, 0.30) 45%, rgba(6, 14, 35, 0.18) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Content wrapper */}
        <div className="relative z-[2]">
          {/* Announcement Bar */}
          <a
            href="https://rapid.new"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-black/40 backdrop-blur-[14px] border-b border-white/10 px-6 py-2.5 text-[13px] text-white/90 hover:bg-black/60 transition-colors cursor-pointer"
          >
            <Clock className="w-[13px] h-[13px]" />
            <span>
              BoltAI is not{" "}
              <strong className="text-emerald-400 font-semibold underline underline-offset-2">
                Rapid.new
              </strong>{" "}
              — visit Rapid.new for full-stack AI app generation
            </span>
            <ArrowRight className="w-[13px] h-[13px] opacity-75" />
          </a>

          {/* Navigation */}
          <nav className="flex items-center justify-between px-5 md:px-11 py-4 md:py-[18px] max-w-[1280px] mx-auto">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-[17px] text-white">
              <span className="w-[32px] h-[32px] rounded-[8px] bg-white grid place-items-center flex-shrink-0">
                <Zap className="w-[17px] h-[17px] text-[#111827] fill-[#111827]" />
              </span>
              <span>Bolt AI</span>
            </Link>

            <div className="flex items-center gap-7 text-sm font-medium">
              <div className="flex items-center gap-2">
                <a
                  href="https://rapid.new/?auth=login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-[7px] rounded-full text-[13px] font-semibold text-white/90 bg-white/10 border border-white/25 backdrop-blur-sm hover:bg-white/20 hover:border-white/45 hover:text-white transition-all"
                >
                  Log in
                </a>
                <a
                  href="https://rapid.new/?auth=signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-[7px] rounded-full text-[13px] font-semibold text-[#111827] bg-white hover:bg-emerald-50 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Sign up free
                </a>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="max-w-[720px] mx-auto mt-8 px-4 md:px-6 pb-20 text-center">
            <h1 className="text-[36px] md:text-[58px] font-bold leading-[1.08] mb-5 tracking-tight">
              Design Amazing{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                UIs and Prototypes
              </span>{" "}
              with BoltAI
            </h1>
            <p className="text-base opacity-90 mb-8 font-normal">
              Transform your ideas into pixel-perfect UI designs instantly with AI.
            </p>

            {/* Prompt Card */}
            <div
              id="promptCard"
              className={`bg-white rounded-[18px] p-5 pb-4 shadow-[0_24px_80px_-8px_rgba(0,0,0,0.50),0_0_0_1px_rgba(255,255,255,0.06)] max-w-[600px] mx-auto text-[#111827] transition-shadow ${
                hasError ? "shadow-[0_24px_80px_-8px_rgba(0,0,0,0.50),0_0_0_2px_#ef4444]" : ""
              }`}
            >
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value)
                  setHasError(false)
                }}
                onKeyDown={handleKeyDown}
                placeholder={
                  hasError
                    ? "Please enter a prompt first…"
                    : "A modern dashboard with analytics, charts, and user management..."
                }
                className={`block w-full border-none outline-none text-[14.5px] text-gray-700 bg-transparent resize-none min-h-[76px] leading-relaxed px-1 pb-4 ${
                  hasError ? "placeholder:text-red-300" : "placeholder:text-gray-400"
                }`}
                rows={3}
                aria-label="Describe your UI idea"
              />
              <div className="h-px bg-gray-100 mb-3" />
              <div className="flex items-center gap-2 flex-wrap">
                {/* Theme Toggle */}
                <div className="inline-flex bg-gray-100 rounded-full p-[3px] gap-0.5">
                  <button
                    onClick={() => setTheme("dark")}
                    className={`px-3 py-[7px] rounded-full text-[12.5px] font-medium inline-flex items-center gap-[5px] transition-all ${
                      theme === "dark"
                        ? "bg-white text-[#111827] shadow-[0_1px_4px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Moon className="w-[13px] h-[13px]" />
                    Dark
                  </button>
                  <button
                    onClick={() => setTheme("light")}
                    className={`px-3 py-[7px] rounded-full text-[12.5px] font-medium inline-flex items-center gap-[5px] transition-all ${
                      theme === "light"
                        ? "bg-white text-[#111827] shadow-[0_1px_4px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Sun className="w-[13px] h-[13px]" />
                    Light
                  </button>
                </div>

                {/* Platform Toggle */}
                <div className="inline-flex bg-gray-100 rounded-full p-[3px] gap-0.5">
                  <button
                    onClick={() => setPlatform("web")}
                    className={`px-3 py-[7px] rounded-full text-[12.5px] font-medium inline-flex items-center gap-[5px] transition-all ${
                      platform === "web"
                        ? "bg-white text-[#111827] shadow-[0_1px_4px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Monitor className="w-[13px] h-[13px]" />
                    Web
                  </button>
                  <button
                    onClick={() => setPlatform("mobile")}
                    className={`px-3 py-[7px] rounded-full text-[12.5px] font-medium inline-flex items-center gap-[5px] transition-all ${
                      platform === "mobile"
                        ? "bg-white text-[#111827] shadow-[0_1px_4px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Smartphone className="w-[13px] h-[13px]" />
                    Mobile
                  </button>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  className={`ml-auto md:ml-auto w-full md:w-auto justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2.5 rounded-full text-[13.5px] font-semibold inline-flex items-center gap-1.5 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(59,130,246,0.48)] transition-all whitespace-nowrap ${
                    isShaking ? "animate-shake" : ""
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  Generate UI
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Example Chips */}
            <p className="text-[12px] font-semibold tracking-wide opacity-80 mt-8 mb-4">
              Try these examples:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[750px] mx-auto px-2">
              {examplePrompts.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="bg-white/10 border border-white/30 backdrop-blur-xl text-white/95 px-5 py-3 rounded-[14px] text-[12px] font-medium text-center leading-snug hover:bg-white/20 hover:border-white/50 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.20)] transition-all cursor-pointer"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* FAQ Section */}
      <section className="py-14 md:py-20 px-4 md:px-6 max-w-[820px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-2.5 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-[16px]">Everything you need to know about BoltAI</p>
        </div>

        <div className="space-y-2.5">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white border rounded-xl overflow-hidden transition-all ${
                openFaq === index
                  ? "border-gray-300 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.07)]"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-5 py-4 font-semibold text-[16px] flex justify-between items-center gap-4 text-left"
              >
                {item.question}
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${
                    openFaq === index ? "rotate-180 text-gray-500" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="text-white text-center py-16 md:py-[90px] px-5 md:px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(118deg, #1d4ed8 0%, #2563eb 45%, #1e40af 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative max-w-[700px] mx-auto">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-4 tracking-tight">
            Start building faster today
          </h2>
          <p className="text-[20px] opacity-90 mb-8">
            Join 50,000+ designers and developers who are shipping products 10x faster with
            AI-powered design
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3.5 rounded-full font-semibold text-[16px] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-all cursor-pointer"
          >
            Get Started for Free
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="mt-4 text-[13px] opacity-80">No credit card required • Free forever</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-[#94a3b8] py-8 px-5 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-[17px] text-[#e2e8f0]">
            <span className="w-[32px] h-[32px] rounded-[8px] bg-white grid place-items-center flex-shrink-0">
              <Zap className="w-[17px] h-[17px] text-[#111827] fill-[#111827]" />
            </span>
            Bolt AI
          </Link>
          <div className="flex gap-7 text-sm">
            <Link href="/" className="hover:text-[#e2e8f0] transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#e2e8f0] transition-colors">
              About
            </Link>
            <Link href="/privacy" className="hover:text-[#e2e8f0] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#e2e8f0] transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-[#e2e8f0] transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <p className="max-w-[1280px] mx-auto mt-5 pt-5 border-t border-[#1e293b] text-center text-[13px] text-[#64748b]">
          2026 Bolt AI. All rights reserved.
        </p>
      </footer>

      {/* Shake animation */}
      <style jsx global>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          15% {
            transform: translateX(-6px);
          }
          35% {
            transform: translateX(6px);
          }
          55% {
            transform: translateX(-4px);
          }
          75% {
            transform: translateX(4px);
          }
        }
        .animate-shake {
          animation: shake 0.38s ease;
        }
      `}</style>
    </div>
  )
}
