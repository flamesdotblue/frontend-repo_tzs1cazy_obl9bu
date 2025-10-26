import { Infinity, Shield, Sparkles, CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'Unlimited Access',
    description:
      'No caps, no trials, no paywalls. Explore every feature with unlimited usage.',
    icon: Infinity,
  },
  {
    title: 'Private & Secure',
    description:
      'We respect your privacy. Thoughtful defaults and modern best practices.',
    icon: Shield,
  },
  {
    title: 'Delightful by Design',
    description:
      'Clean, fast, and accessible experiences crafted for everyone.',
    icon: Sparkles,
  },
  {
    title: 'Free Forever',
    description:
      'The price is simple: $0. For individuals, teams, and communities.',
    icon: CheckCircle,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Everything you need, nothing you don’t
          </h2>
          <p className="mt-3 text-gray-600">
            We built PaidFree so you can focus on creating — without budgets or billing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 ring-1 ring-blue-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div id="get-started" className="mt-16 flex flex-col items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-700"
          >
            Start for Free
          </a>
          <p className="mt-3 text-xs text-gray-500">No credit card. No hidden fees.</p>
        </div>
      </div>
    </section>
  );
}
