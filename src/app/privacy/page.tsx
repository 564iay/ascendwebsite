export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-24 text-white/80">
      <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
      <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
          <p>
            Ascend collects information to provide better AI guidance and gamification experiences. This includes your account details, habits tracked, and interaction logs with the AI Coach.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Data</h2>
          <p>
            Your data is primarily used to train your personalized AI model. We do not sell your personal data to third-party advertisers. Your habit data is encrypted at rest and in transit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
          <p>
            We implement bank-grade security measures. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
          </p>
        </section>
      </div>
    </div>
  );
}
