export const metadata = {
  title: "Terms of Service | Nexora Studio",
  description: "The terms and conditions governing use of Nexora Studio's website and services.",
};

export default function TermsPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[var(--violet)]/10 text-[var(--violet)] border border-[var(--violet)]/20 mb-4">
          Legal
        </span>
        <h1 className="text-4xl font-bold text-white mt-4 mb-2">Terms of Service</h1>
        <p className="text-[var(--text-muted)]">Last updated: January 2025</p>
      </div>

      <div className="space-y-10 text-[var(--text-muted)]">
        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using the Nexora Studio website (nexorastudio.com) or engaging with our services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our website or services.
          </p>
        </Section>

        <Section title="2. Services">
          <p>
            Nexora Studio provides software development, IT consulting, design, and related professional services. The scope, deliverables, timelines, and pricing for specific engagements are governed by separate written agreements (Statements of Work, project contracts, or service agreements) entered into between Nexora Studio and each client.
          </p>
          <p>
            These Terms govern use of our website and general business communications only. Client-specific terms are defined in individual engagement agreements.
          </p>
        </Section>

        <Section title="3. Intellectual Property">
          <p>
            All content on this website — including text, graphics, logos, images, and code — is the property of Nexora Studio and is protected by applicable intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, or create derivative works from any content on this site without our explicit written consent.
          </p>
          <p>
            Intellectual property related to client deliverables is governed separately in individual engagement agreements.
          </p>
        </Section>

        <Section title="4. Use of the Website">
          <p>
            You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not:
          </p>
          <SubList items={[
            "Use the site for any unlawful, fraudulent, or harmful purpose",
            "Attempt to gain unauthorized access to our systems or data",
            "Transmit any viruses, malware, or disruptive code",
            "Scrape, crawl, or systematically collect data from our website without permission",
            "Use automated tools to send unsolicited communications through our contact forms",
          ]} />
        </Section>

        <Section title="5. Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, Nexora Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use this website.
          </p>
          <p>
            Our total liability for any claim arising from use of this website shall not exceed the greater of $100 USD or the amount you paid to us in the three months preceding the claim.
          </p>
        </Section>

        <Section title="6. Disclaimer of Warranties">
          <p>
            This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>
        </Section>

        <Section title="7. Third-Party Links">
          <p>
            Our website may contain links to third-party websites. These links are provided for convenience only. Nexora Studio has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
          </p>
        </Section>

        <Section title="8. Privacy">
          <p>
            Your use of this website is also governed by our{" "}
            <a href="/privacy" className="text-[var(--accent)] hover:underline">Privacy Policy</a>
            , which is incorporated into these Terms by reference.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Nexora Studio is registered, without regard to conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
          </p>
        </Section>

        <Section title="10. Changes to Terms">
          <p>
            We reserve the right to modify these Terms at any time. Changes become effective when posted to this page, indicated by the &quot;Last updated&quot; date. Your continued use of the website after changes constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            Questions about these Terms of Service may be directed to:
          </p>
          <div className="glass border border-white/10 rounded-xl p-4 mt-4 not-prose">
            <p className="text-white font-medium">Nexora Studio</p>
            <a href="mailto:hello@nexorastudio.com" className="text-[var(--accent)] text-sm hover:underline">
              hello@nexorastudio.com
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
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--violet)] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
