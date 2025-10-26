import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why PaidFree?</h2>
            <p className="mt-4 text-gray-600">
              We believe the best tools should be accessible to everyone. That’s why at PaidFree,
              everything is free — forever. Build momentum without budgets, and create without
              constraints.
            </p>
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
