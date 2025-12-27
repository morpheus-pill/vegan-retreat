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
  const shareText = "Join me at the Vegan Retreat 2026! A gathering for vegans to connect, reflect, and celebrate. January 1-4, 2026 at The Lilac Farm near Bangalore."
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://veganretreat2026.com'
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`

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
            <span>The Lilac Farm, Near Bangalore</span>
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="https://instagram.com/indicpilgrim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            DM on Instagram
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-green-500/80 backdrop-blur-sm rounded-full hover:bg-green-500 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Share on WhatsApp
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
          <p><strong>The Lilac Farm</strong> — a 13-acre vegan farmstay near Somashettihalli, about 2 hours from Bangalore. Run by a mother-daughter duo, this zero-waste farm offers rustic charm with recycled-material cottages, farm-to-table dining, and activities like hiking and stargazing. The venue is pet-friendly.</p>
          <a href="https://www.thelilacfarm.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.thelilacfarm.com</a>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">💰 Charges</h3>
          <p>This is a paid retreat with minimal charges covering accommodation and vegan meals.</p>
          <p className="mt-2">
            Any sum leftover after everyone's contribution will go to animal sanctuaries and vegan activists. We can all use this event as an opportunity to raise funds and support the work of those fighting for animal rights.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">👥 Group Size</h3>
          <p>Limited to approximately <strong>30 participants</strong> (including children). May expand to ~50 based on interest.</p>
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

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  return (
    <section className="mb-12 py-8 border-y border-gray-200">
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prevQuote}
          className="text-gray-400 hover:text-gray-600 transition-colors p-2"
          aria-label="Previous quote"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-center flex-1 max-w-xl">
          <blockquote className="text-xl md:text-2xl font-medium mb-4 transition-opacity duration-500">
            "{quotes[currentQuote].text}"
          </blockquote>
          <cite className="text-gray-600 not-italic">— {quotes[currentQuote].author}</cite>
        </div>
        <button
          onClick={nextQuote}
          className="text-gray-400 hover:text-gray-600 transition-colors p-2"
          aria-label="Next quote"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    { question: "Who can attend?", answer: "Anyone who wants to be vegan or is already vegan. This is a perfect opportunity to celebrate Veganuary!" },
    { question: "I'm not fully vegan yet. Can I still come?", answer: "Yes! We welcome anyone committed to being vegan throughout the retreat." },
    { question: "Can I bring my family?", answer: "Yes! Children under 12 are exempted from the strict vegan requirement." },
    { question: "What about pets?", answer: "The Lilac Farm is pet-friendly! You can bring vaccinated animals. Just inform us in advance." },
    { question: "Is the venue wheelchair accessible?", answer: "The Lilac Farm is a rustic farmstay. Please mention any special accessibility requirements in your registration and we'll do our best to accommodate." },
    { question: "How are costs calculated?", answer: "This is non-commercial. Costs cover accommodation, meals, and activities. Any surplus goes to animal sanctuaries and vegan activists." },
    { question: "What if someone violates guidelines?", answer: "Organizers will discuss with participants and make a final, binding decision." },
    { question: "How can I help spread the word?", answer: "Share this page with fellow vegans and in vegan groups! Use the WhatsApp share button to spread the word." }
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
  const shareText = "Join me at the Vegan Retreat 2026! A gathering for vegans to connect, reflect, and celebrate. January 1-4, 2026 at The Lilac Farm near Bangalore."
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://veganretreat2026.com'
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`

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
            href="https://instagram.com/indicpilgrim"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-200 font-medium"
          >
            Contact on Instagram
          </a>
        </div>

        <div className="pt-6 border-t border-gray-700 mt-8">
          <p className="text-gray-400 mb-4">Know someone who'd love this?</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Share on WhatsApp
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
            href="https://instagram.com/indicpilgrim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            @indicpilgrim
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
