export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-24 text-white/80">
      <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
      <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Ascend app and website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Subscription and Billing</h2>
          <p>
            Some aspects of the Service are billed on a subscription basis ("Ascendant Tier"). You will be billed in advance on a recurring and periodic basis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. AI Coach Usage</h2>
          <p>
            The AI Coach is provided for self-improvement and productivity purposes only. It is not a substitute for professional medical, psychological, or psychiatric advice.
          </p>
        </section>
      </div>
    </div>
  );
}
