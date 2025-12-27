'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <article className="max-w-2xl mx-auto px-6 py-16">
        <WhySection />
        <DifferentSection />
        <ActivitiesSection />
        <GuidelinesSection />
        <LogisticsSection />
        <QuotesSection />
        <FAQSection />
        <OrganizersSection />
      </article>
      <CTASection />
      <Footer />
    </main>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/retreat-image.jpg)' }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-3xl mx-auto text-center space-y-6 text-white">
        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm tracking-wider rounded-full">
          VEGANUARY 2026
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Vegan Retreat
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
          A gathering for vegans to connect, reflect, and celebrate
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 text-lg text-white/90">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>January 1-4, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Near Bangalore</span>
          </div>
        </div>
        <div className="pt-4">
          <a
            href="/register"
            className="inline-block px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-200 font-medium"
          >
            Register Your Interest
          </a>
        </div>
      </div>
    </section>
  )
}

function WhySection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why a Vegan Retreat?</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          Being vegan is more than a diet—it's a way of life. But it often comes with its own set of challenges: constantly checking ingredients, explaining your choices, and sometimes feeling like the odd one out.
        </p>
        <p>
          This retreat is a space where you don't have to think twice. Where every meal is thoughtfully prepared, where everyone understands, and where you can simply be yourself.
        </p>
        <p>
          It's a chance to have fun, share stories, and connect with others who walk this path. A few days where the weight of meal planning lifts, and you can focus on what truly matters—community, nature, and joy.
        </p>
      </div>
    </section>
  )
}

function DifferentSection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">What Makes This Different?</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          This isn't your typical getaway. It's not polished or perfect. It's real.
        </p>
        <p>
          We're not event planners. We're vegans who've lived in farms, slept in tents, and found peace in remote corners of the world. We believe the outdoors heal and help us connect with our deeper selves.
        </p>
        <p>
          This is a self-organized gathering—by vegans, for vegans. We're creating something together, and that means flexibility, authenticity, and the understanding that not everything will go according to plan. And that's okay.
        </p>
        <p className="font-medium text-gray-900">
          What you'll get is genuine connection, shared meals made with love, and experiences that matter more than perfection ever could.
        </p>
      </div>
    </section>
  )
}

function ActivitiesSection() {
  const activities = [
    { icon: '🥾', title: 'Trekking & Walks', description: 'Explore the landscape together, or take impromptu walks when the mood strikes.' },
    { icon: '🔥', title: 'Fireside Chats', description: 'Share stories, challenges, and joys of being vegan.' },
    { icon: '⛺', title: 'Tenting & Camping', description: 'Sleep under the stars and reconnect with nature.' },
    { icon: '🎬', title: 'Documentaries', description: 'Watch and discuss films that inspire and educate.' },
    { icon: '🎵', title: 'Sing & Dance', description: 'Music, movement, and celebration for those who enjoy it.' },
    { icon: '🎲', title: 'Surprise Tasks & Games', description: 'Playful challenges and activities throughout.' },
    { icon: '🤝', title: 'Make Friends', description: 'Or be a recluse—both are welcome here.' }
  ]

  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What We'll Do Together</h2>
      <p className="text-gray-700 mb-6">
        This retreat is about balance—moments of adventure and stillness, conversation and solitude, structure and spontaneity.
      </p>
      <ul className="space-y-3">
        {activities.map((activity, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-xl">{activity.icon}</span>
            <div>
              <strong>{activity.title}</strong> — {activity.description}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

function GuidelinesSection() {
  const guidelines = [
    { title: 'Open to All Aspiring Vegans', description: 'This retreat is for everyone who wants to embrace veganism. Give 2026 a chance to be vegan!' },
    { title: 'Stay Vegan Throughout', description: 'Whether at the retreat or stepping out, please remain vegan for the duration.' },
    { title: 'No Alcohol, Smoking, or Substances', description: 'We\'re keeping the retreat substance-free to maintain clarity and presence.' },
    { title: 'Be Civil & Courteous', description: 'Kindness and respect go a long way in creating meaningful connections.' },
    { title: 'Temper Your Expectations', description: 'This is self-organized, so things may not be perfect—and that\'s part of the charm.' },
    { title: 'Families Welcome', description: 'Children under 12 are exempted from strict vegan requirements.' },
    { title: 'Animals Welcome', description: 'Bring your pets if vaccinated. Let us know in advance.' },
    { title: 'Respect for Decisions', description: 'The decision of organizers will be final and binding.' }
  ]

  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Guidelines</h2>
      <p className="text-gray-700 mb-6">
        To create a safe, respectful space for everyone:
      </p>
      <ul className="space-y-3">
        {guidelines.map((g, i) => (
          <li key={i}>
            <strong>{g.title}</strong> — {g.description}
          </li>
        ))}
      </ul>
    </section>
  )
}

function LogisticsSection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Practical Details</h2>

      <div className="space-y-6 text-gray-700">
        <div>
          <h3 className="text-xl font-bold mb-2">📅 Dates</h3>
          <p><strong>January 1 - 4, 2026</strong></p>
          <p>Arrive anytime before 6pm on January 1st. Depart by noon on January 4th.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">📍 Location</h3>
          <p>Within a 2-hour radius of Bangalore. The exact venue will be shared soon.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">💰 Charges</h3>
          <p><strong>Approx. ₹10,000 - ₹15,000 per person</strong></p>
          <p>Covers accommodation, all vegan meals, and group activities.</p>
          <p className="text-sm text-gray-500 mt-2">
            This is non-commercial. Any surplus goes to animal sanctuaries and vegan activists.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">👥 Group Size</h3>
          <p>Limited to approximately <strong>30 participants</strong> (including children). May expand to ~50 with a larger venue.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Cancellation Policy</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>100% refund</strong> if cancelled by December 24</li>
            <li><strong>75% refund</strong> if cancelled by December 27</li>
            <li><strong>50% refund</strong> if cancelled after December 27</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function QuotesSection() {
  const quotes = [
    { text: "Compassion is the basis of all morality.", author: "Arthur Schopenhauer" },
    { text: "Animals are not products. Life doesn't have a price.", author: "Maneka Gandhi" },
    { text: "When we kill the animals, we kill something in ourselves.", author: "Philip Wollen" },
    { text: "Being vegan is not about perfection. It's about compassion.", author: "Fiona Oakes" },
    { text: "Every life is precious. Every being deserves kindness.", author: "Robin Singh" }
  ]

  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [quotes.length])

  return (
    <section className="mb-12 py-8 border-y border-gray-200">
      <div className="text-center">
        <blockquote className="text-xl md:text-2xl font-medium mb-4 transition-opacity duration-500">
          "{quotes[currentQuote].text}"
        </blockquote>
        <cite className="text-gray-600 not-italic">— {quotes[currentQuote].author}</cite>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentQuote(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentQuote ? 'bg-gray-900 w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to quote ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    { question: "Who can attend?", answer: "Anyone who wants to be vegan or is already vegan. This is a perfect opportunity to celebrate Veganuary!" },
    { question: "I'm not fully vegan yet. Can I still come?", answer: "Yes! We welcome anyone committed to being vegan throughout the retreat." },
    { question: "Can I bring my family?", answer: "Yes! Children under 12 are exempted from the strict vegan requirement." },
    { question: "What about pets?", answer: "You can bring vaccinated animals. Just inform us in advance." },
    { question: "Is the venue wheelchair accessible?", answer: "Accessibility info will be shared once the venue is finalized. Mention special requirements in your registration." },
    { question: "How are costs calculated?", answer: "This is non-commercial. Costs cover accommodation, meals, and activities. Surplus goes to animal causes." },
    { question: "What if someone violates guidelines?", answer: "Organizers will discuss with participants and make a final, binding decision." },
    { question: "How can I help spread the word?", answer: "Share this page with fellow vegans and in vegan groups!" }
  ]

  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group">
            <summary className="cursor-pointer font-bold flex justify-between items-center py-2 border-b border-gray-200">
              {faq.question}
              <svg
                className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="py-3 text-gray-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

function OrganizersSection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Who's Organizing This?</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className="text-xl font-bold text-gray-900">
          Indic Pilgrim & The Curious Monk
        </p>
        <p>
          Together, we organized the Self Musing Camp in Mysore (December 2020), attended by about 15 people. We've lived in farms, tents, pallet racks, and remote places—often far from comfort, but close to what matters.
        </p>
        <p>
          Indic Pilgrim has been vegan for 5 years. The Curious Monk became vegetarian 2 years ago and continues the journey toward compassion.
        </p>
        <p>
          We're not professionals—just two people who've learned that the outdoors heal. And we want to share that with you.
        </p>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Join Us?</h2>
        <p className="text-gray-300">
          If this excites you, fill out the registration form. Your early response helps us plan better.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="/register"
            className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-200 font-medium"
          >
            Register Your Interest
          </a>
          <a
            href="https://instagram.com/indic.pilgrim"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-200 font-medium"
          >
            Contact on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center text-sm">
      <div className="max-w-2xl mx-auto space-y-4">
        <p>
          Vegan Retreat 2026 | Organized by Indic Pilgrim & The Curious Monk
        </p>
        <p>
          Questions? DM{' '}
          <a
            href="https://instagram.com/indic.pilgrim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            @indic.pilgrim
          </a>
          {' '}on Instagram
        </p>
        <p className="italic text-xs pt-2 border-t border-gray-800">
          "The greatness of a nation can be judged by the way its animals are treated." — Gandhi
        </p>
      </div>
    </footer>
  )
}
