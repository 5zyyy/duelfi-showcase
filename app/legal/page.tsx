import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Legal - Terms of Service, Privacy Policy & Disclaimer | DuelFi',
  description: 'DuelFi legal documents including Terms of Service, Privacy Policy, and Disclaimer.',
};

export default function LegalPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <NavBar />
      <main className="pt-16 md:pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold text-[var(--fg-primary)] mb-4"
              style={{ fontFamily: 'var(--font-display-heading)' }}
            >
              Legal
            </h1>
            <p
              className="text-lg text-[var(--fg-secondary)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Terms of Service, Privacy Policy, and Disclaimer
            </p>
          </div>

          {/* Terms of Service */}
          <section id="terms" className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-[var(--fg-primary)] mb-6"
              style={{ fontFamily: 'var(--font-display-heading)' }}
            >
              1. Terms of Service
            </h2>
            <div
              className="prose prose-invert max-w-none text-[var(--fg-secondary)] space-y-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <p className="text-sm text-[var(--fg-tertiary)]">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">1.1 Acceptance of Terms</h3>
                <p>
                  By accessing, using, or interacting with DuelFi ("Platform", "Service", "we", "us", "our"), you ("User", "you", "your") acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use the Platform. These Terms constitute a legally binding agreement between you and DuelFi.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">1.2 Eligibility</h3>
                <p>
                  You must be at least 18 years old and have the legal capacity to enter into binding agreements in your jurisdiction to use the Platform. You represent and warrant that you are not located in, or a resident of, any jurisdiction where the use of the Platform is prohibited or restricted by law. You are solely responsible for ensuring that your use of the Platform complies with all applicable laws in your jurisdiction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">1.3 Platform Description</h3>
                <p>
                  DuelFi is a decentralized trading platform that facilitates peer-to-peer trading duels on the Solana blockchain. The Platform provides a venue for users to engage in trading competitions and wager SOL tokens. We do not provide trading advice, investment recommendations, or guarantee any outcomes. All trading activities are conducted at your own risk.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">1.4 User Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are solely responsible for maintaining the security and confidentiality of your wallet, private keys, and account credentials.</li>
                  <li>You are responsible for all activities that occur under your account or wallet address.</li>
                  <li>You must provide accurate, current, and complete information when using the Platform.</li>
                  <li>You are responsible for ensuring you have sufficient SOL tokens to cover all fees, gas costs, and wagers.</li>
                  <li>You are responsible for complying with all applicable tax obligations in your jurisdiction.</li>
                  <li>You acknowledge that all transactions on the blockchain are irreversible and final.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">1.5 Prohibited Activities</h3>
                <p className="mb-2">You agree NOT to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Platform for any illegal purpose or in violation of any applicable laws or regulations.</li>
                  <li>Engage in market manipulation, front-running, or any form of fraudulent trading activity.</li>
                  <li>Attempt to hack, disrupt, or interfere with the Platform's operations or security.</li>
                  <li>Use automated systems, bots, or scripts to interact with the Platform without our express written permission.</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the Platform.</li>
                  <li>Use the Platform to launder money or engage in any financial crimes.</li>
                  <li>Violate any intellectual property rights of DuelFi or third parties.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">1.6 Fees and Payments</h3>
                <p>
                  The Platform may charge fees for certain services, including but not limited to platform fees, transaction fees, and gas fees. All fees are non-refundable. Fees are subject to change at any time without prior notice. You are responsible for all fees associated with your use of the Platform, including blockchain transaction fees (gas fees) which are paid directly to the Solana network.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">1.7 Intellectual Property</h3>
                <p>
                  All content, features, functionality, trademarks, logos, and other intellectual property on the Platform are owned by DuelFi or its licensors and are protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for personal, non-commercial purposes only. You may not copy, modify, distribute, sell, or lease any part of the Platform without our prior written consent.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">1.8 Termination</h3>
                <p>
                  We reserve the right to suspend, terminate, or restrict your access to the Platform at any time, for any reason, without prior notice or liability. You may stop using the Platform at any time. Upon termination, your right to use the Platform will immediately cease. We are not obligated to provide any refunds or compensation upon termination.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">1.9 Disclaimers and Limitations of Liability</h3>
                <p className="mb-2">
                  THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY. WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>
                <p className="mb-2">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DUELFI, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE PLATFORM, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, OR OTHERWISE) AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p>
                  IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF THE PLATFORM EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY, OR $100, WHICHEVER IS GREATER.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">1.10 Indemnification</h3>
                <p>
                  You agree to indemnify, defend, and hold harmless DuelFi, its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from: (a) your use of the Platform; (b) your violation of these Terms; (c) your violation of any third-party right, including without limitation any intellectual property right, privacy right, or other right; or (d) any claim that your use of the Platform caused damage to a third party.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">1.11 Modifications to Terms</h3>
                <p>
                  We reserve the right to modify, update, or change these Terms at any time, in our sole discretion. Material changes will be effective immediately upon posting to the Platform. Your continued use of the Platform after such changes constitutes your acceptance of the modified Terms. It is your responsibility to review these Terms periodically for changes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">1.12 Governing Law and Dispute Resolution</h3>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or the Platform shall be resolved exclusively through binding arbitration in accordance with the rules of the American Arbitration Association (AAA). The arbitration shall be conducted in Delaware, and the arbitrator's decision shall be final and binding. You waive any right to a jury trial and agree to resolve disputes on an individual basis, not as part of a class action.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section id="privacy" className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-[var(--fg-primary)] mb-6"
              style={{ fontFamily: 'var(--font-display-heading)' }}
            >
              2. Privacy Policy
            </h2>
            <div
              className="prose prose-invert max-w-none text-[var(--fg-secondary)] space-y-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <p className="text-sm text-[var(--fg-tertiary)]">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">2.1 Information We Collect</h3>
                <p className="mb-2">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Blockchain Data:</strong> Public wallet addresses, transaction history, and on-chain activity data, which are publicly available on the Solana blockchain.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with the Platform, including IP addresses, browser type, device information, and usage patterns.</li>
                  <li><strong>Account Information:</strong> Information you provide when creating an account or using our services, such as email addresses (if provided) and preferences.</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to collect information about your browsing behavior and preferences.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">2.2 How We Use Information</h3>
                <p className="mb-2">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve the Platform and our services.</li>
                  <li>Process transactions and facilitate trading duels.</li>
                  <li>Detect, prevent, and address technical issues, fraud, and security threats.</li>
                  <li>Comply with legal obligations and enforce our Terms of Service.</li>
                  <li>Analyze usage patterns and improve user experience.</li>
                  <li>Send you administrative messages, updates, and marketing communications (you may opt out at any time).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">2.3 Information Sharing and Disclosure</h3>
                <p className="mb-2">We may share your information in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Public Blockchain Data:</strong> Your wallet address and transaction data are publicly visible on the Solana blockchain and cannot be hidden or removed.</li>
                  <li><strong>Service Providers:</strong> We may share information with third-party service providers who assist us in operating the Platform, subject to confidentiality obligations.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or governmental authority, or to protect our rights, property, or safety, or that of our users or others.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
                  <li><strong>With Your Consent:</strong> We may share information with third parties when you have given us explicit consent to do so.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">2.4 Data Security</h3>
                <p>
                  We implement reasonable security measures to protect your information. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your information. You acknowledge that you use the Platform at your own risk and are responsible for maintaining the security of your wallet and private keys.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">2.5 Third-Party Links and Services</h3>
                <p>
                  The Platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such third parties. We encourage you to review the privacy policies of any third-party services you access through our Platform.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">2.6 Your Rights and Choices</h3>
                <p className="mb-2">You have certain rights regarding your information, subject to applicable law:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may access, update, or correct certain information through your account settings.</li>
                  <li>You may opt out of marketing communications by following the unsubscribe instructions in our emails.</li>
                  <li>You may request deletion of certain information, though we may retain information as required by law or for legitimate business purposes.</li>
                  <li>Note: Blockchain data is immutable and cannot be deleted or modified.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">2.7 Data Retention</h3>
                <p>
                  We retain your information for as long as necessary to provide the Platform and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We may retain certain information indefinitely for security, legal, or business purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">2.8 Children's Privacy</h3>
                <p>
                  The Platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 18, we will take steps to delete such information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">2.9 Changes to Privacy Policy</h3>
                <p>
                  We reserve the right to modify this Privacy Policy at any time. Material changes will be effective immediately upon posting to the Platform. Your continued use of the Platform after such changes constitutes your acceptance of the modified Privacy Policy.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section id="disclaimer" className="mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-[var(--fg-primary)] mb-6"
              style={{ fontFamily: 'var(--font-display-heading)' }}
            >
              3. Disclaimer
            </h2>
            <div
              className="prose prose-invert max-w-none text-[var(--fg-secondary)] space-y-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <p className="text-sm text-[var(--fg-tertiary)]">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">3.1 No Investment Advice</h3>
                <p>
                  DuelFi does not provide investment, financial, trading, or legal advice. All information on the Platform is for informational purposes only and should not be construed as investment advice, financial advice, trading advice, or any other type of advice. You should consult with a qualified financial advisor, legal advisor, or other professional before making any financial decisions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">3.2 Trading Risks</h3>
                <p className="mb-2">
                  Trading cryptocurrencies, including meme coins, involves substantial risk of loss and is not suitable for all investors. You acknowledge and agree that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may lose some or all of your invested capital.</li>
                  <li>Cryptocurrency markets are highly volatile and unpredictable.</li>
                  <li>Past performance does not guarantee future results.</li>
                  <li>There is no guarantee of profits or returns.</li>
                  <li>You should only trade with funds you can afford to lose completely.</li>
                  <li>You are solely responsible for your trading decisions and their consequences.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">3.3 No Warranties</h3>
                <p>
                  THE PLATFORM AND ALL SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED. WE EXPRESSLY DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, RELIABILITY, OR AVAILABILITY. WE DO NOT WARRANT THAT THE PLATFORM WILL MEET YOUR REQUIREMENTS, BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">3.4 Blockchain and Technology Risks</h3>
                <p className="mb-2">You acknowledge and accept the following risks:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Blockchain Risks:</strong> The Solana blockchain may experience congestion, delays, forks, or other technical issues that could affect transactions.</li>
                  <li><strong>Smart Contract Risks:</strong> Smart contracts may contain bugs, vulnerabilities, or may not function as intended, potentially resulting in loss of funds.</li>
                  <li><strong>Wallet Risks:</strong> Loss of private keys, wallet compromise, or technical failures may result in permanent loss of funds with no recovery possible.</li>
                  <li><strong>Regulatory Risks:</strong> Changes in laws or regulations may adversely affect the Platform, cryptocurrencies, or your ability to use the Platform.</li>
                  <li><strong>Technology Risks:</strong> The Platform may experience downtime, bugs, security breaches, or other technical failures.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">3.5 Token Disclaimer</h3>
                <p className="mb-2">
                  IF AND WHEN THE DUELFI TOKEN ($DUELFI) IS LAUNCHED:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The token has no intrinsic value and is not backed by any assets or guarantees.</li>
                  <li>The token may lose all or substantially all of its value.</li>
                  <li>We make no representations or warranties regarding the token's value, utility, or future performance.</li>
                  <li>Token purchases are final and non-refundable.</li>
                  <li>We are not responsible for any losses incurred from purchasing, holding, or trading the token.</li>
                  <li>The token is not a security, investment contract, or regulated financial instrument in any jurisdiction.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">3.6 No Guarantees</h3>
                <p>
                  We make no guarantees, representations, or warranties regarding: (a) the accuracy, completeness, or reliability of any information on the Platform; (b) the results that may be obtained from using the Platform; (c) the availability, security, or performance of the Platform; (d) the value, utility, or performance of any cryptocurrencies or tokens; or (e) any other matter related to the Platform or your use thereof.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">3.7 Limitation of Liability</h3>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DUELFI, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND LICENSORS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE PLATFORM, REGARDLESS OF THE THEORY OF LIABILITY AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">3.8 Regulatory Compliance</h3>
                <p>
                  You are solely responsible for ensuring that your use of the Platform complies with all applicable laws, regulations, and rules in your jurisdiction. We make no representation that the Platform is appropriate or available for use in all jurisdictions. You acknowledge that cryptocurrency regulations vary by jurisdiction and may change at any time.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">3.9 Tax Obligations</h3>
                <p>
                  You are solely responsible for determining and paying any taxes, duties, or fees that may apply to your use of the Platform, including but not limited to income taxes, capital gains taxes, transaction taxes, and any other applicable taxes in your jurisdiction. We are not responsible for withholding, collecting, reporting, or remitting any taxes related to your use of the Platform.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">3.10 Acknowledgment of Risks</h3>
                <p>
                  BY USING THE PLATFORM, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND ACCEPT ALL RISKS ASSOCIATED WITH TRADING CRYPTOCURRENCIES, USING BLOCKCHAIN TECHNOLOGY, AND PARTICIPATING IN TRADING DUELS. YOU ACKNOWLEDGE THAT YOU ARE SOLELY RESPONSIBLE FOR YOUR TRADING DECISIONS AND THEIR CONSEQUENCES, AND THAT DUELFI SHALL NOT BE LIABLE FOR ANY LOSSES OR DAMAGES YOU MAY INCUR.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <div
              className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-6 md:p-8"
            >
              <h3
                className="text-xl font-semibold text-[var(--fg-primary)] mb-4"
                style={{ fontFamily: 'var(--font-display-heading)' }}
              >
                Contact Us
              </h3>
              <p
                className="text-[var(--fg-secondary)] mb-4"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                If you have any questions about these legal documents, please contact us:
              </p>
              <ul
                className="text-[var(--fg-secondary)] space-y-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <li>Email: duelfiteam@gmail.com</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

