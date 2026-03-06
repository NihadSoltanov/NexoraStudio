export const metadata = {
  title: "Privacy Policy | Nexora Studio",
  description: "How Nexora Studio collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 mb-4">
          Legal
        </span>
        <h1 className="text-4xl font-bold text-white mt-4 mb-2">Privacy Policy</h1>
        <p className="text-[var(--text-muted)]">Last updated: January 2025</p>
      </div>

      <div className="space-y-10 text-[var(--text-muted)]">
        <Section title="1. Introduction">
          <p>
            Nexora Studio (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at nexorastudio.com or contact us through our services.
          </p>
          <p>
            Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect the following types of information:</p>
          <SubList items={[
            "Contact information you provide voluntarily (name, email address, company name, phone number) when you submit an inquiry through our contact form.",
            "Usage data such as IP address, browser type, pages visited, and time spent on our site — collected via standard server logs and analytics tools.",
            "Communications you send us through email or our contact form.",
          ]} />
          <p>
            We do not collect sensitive personal information such as payment card details, social security numbers, or health information through our website.
          </p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <SubList items={[
            "Respond to your inquiries and communicate about potential engagements",
            "Improve our website content and user experience",
            "Comply with applicable legal obligations",
            "Protect against fraudulent, unauthorized, or illegal activity",
          ]} />
        </Section>

        <Section title="4. Data Storage and Security">
          <p>
            Information submitted through our contact form is stored securely on our servers. We implement industry-standard security measures including encryption in transit (TLS), access controls, and regular security reviews to protect your data.
          </p>
          <p>
            No method of electronic storage or transmission is 100% secure. While we implement reasonable safeguards, we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="5. Data Retention">
          <p>
            We retain contact inquiry data for up to 24 months from the date of submission, or for as long as reasonably necessary to fulfill the purpose for which it was collected. You may request deletion of your data at any time by contacting us.
          </p>
        </Section>

        <Section title="6. Third-Party Services">
          <p>
            Our website may use third-party services for analytics (such as Vercel Analytics or Google Analytics). These services may collect usage data subject to their own privacy policies. We do not sell your personal information to third parties.
          </p>
        </Section>

        <Section title="7. Cookies">
          <p>
            Our website may use essential cookies to ensure basic functionality. We do not use tracking cookies for advertising purposes. You may disable cookies in your browser settings, though this may affect site functionality.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <SubList items={[
            "Access the personal information we hold about you",
            "Request correction of inaccurate information",
            "Request deletion of your personal data",
            "Object to or restrict certain processing activities",
            "Receive a copy of your data in a portable format",
          ]} />
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:privacy@nexorastudio.com" className="text-[var(--accent)] hover:underline">
              privacy@nexorastudio.com
            </a>
            .
          </p>
        </Section>

        <Section title="9. Children's Privacy">
          <p>
            Our website is not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We reserve the right to update this Privacy Policy at any time. Changes will be reflected by the &quot;Last updated&quot; date at the top of this page. Your continued use of our website after changes constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            For questions about this Privacy Policy or how we handle your data, contact us at:
          </p>
          <div className="glass border border-white/10 rounded-xl p-4 mt-4 not-prose">
            <p className="text-white font-medium">Nexora Studio</p>
            <a href="mailto:privacy@nexorastudio.com" className="text-[var(--accent)] text-sm hover:underline">
              privacy@nexorastudio.com
            </a>
          </div>
        </Section>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <div className="space-y-3 text-[var(--text-muted)] leading-relaxed">{children}</div>
    </section>
  );
}

function SubList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
