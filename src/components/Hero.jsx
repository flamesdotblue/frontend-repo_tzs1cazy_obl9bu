import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
              <Star className="h-4 w-4" /> Everything is free
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              PaidFree
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              The company where premium feels free. No trials. No paywalls. Just
              beautiful tools that help you move faster.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-white font-medium shadow hover:bg-blue-700"
              >
                <Rocket className="h-5 w-5" /> Get Started — Free Forever
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 font-medium text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50"
              >
                See Features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-blue-100 blur-3xl" />
            <div className="relative rounded-2xl border border-blue-100 bg-white p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-4 shadow-sm"
                  >
                    <div className="h-16 rounded-md bg-gradient-to-tr from-blue-500 to-indigo-500" />
                    <p className="mt-3 text-xs text-gray-500">Included in Free</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Every feature you see here is available at no cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
