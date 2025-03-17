import { ArrowLeftSquare } from "lucide-react";

function PrivacyPolicy() {
  return (
    <div className="max-w-md mx-auto text-base">
     <header className="flex justify-between items-center px-4 py-4 w-full h-full bg-white shadow-md max-md:px-2 mb-2 sticky top-0 z-10">
      {/* Arrow Button */}
      <button onClick={() => window.history.back()} className="text-zinc-900 hover:text-gray-700">
        <ArrowLeftSquare size={28} color="#1f2937" />
      </button>

      {/* Title */}
      <h1 className="text-lg font-medium text-zinc-900 tracking-normal">
        Privacy Policy
      </h1>
      
      {/* Placeholder for spacing */}
      <div className="w-8"></div>
    </header>
      <p className="pl-2 pr-2 mb-2">
        Thank you for using QRBridge. Your privacy is important to us, and this policy explains how we collect, use, and manage your data.
      </p>
      <h2 className="pl-2 pr-2  text-[5px] text-lg font-semibold mt-4">1.Data We Collect and How We Use It</h2>
      <h3 className="pl-2 pr-2  text-[5px] text-lg font-semibold mt-4">Technical Information</h3>
      <p className="pl-2 pr-2 mb-2">When you access our website, we collect certain technical data such as device details, IP address, and app usage data. This data is used exclusively for website performance analysis, security enhancement, and protection against unauthorized access or cyber threats. It is not linked to personally identifiable information.</p>
      <h3 className="pl-2 pr-2 text-[5px] text-lg font-semibold mt-4">QR Code Data</h3>
      <p className="pl-2 pr-2 mb-2">Any data you input to activate and manage QR codes is solely processed by our system. We do not store, share, or use this data beyond its intended purpose. However, users should ensure they do not include sensitive personal or confidential information in QR codes, as we cannot control third-party access to generated codes.</p>
      <h3 className="pl-2 pr-2 text-[5px] text-lg font-semibold mt-4">Optional Personal Data</h3>
      <p className="pl-2 pr-2 mb-2">If you submit contact forms on our website or provide your name, email, or phone number, we use this information solely to enhance support, communication, and follow-ups to personalize your user experience.</p>
      <h3 className="pl-2 pr-2 text-[5px] text-lg font-semibold mt-4">Location Data</h3>
      <p className="pl-2 pr-2 mb-2">We do not collect your location information except when you provide it for location-based QR codes.</p>

      <h2 className="pl-2 pr-2 text-[5px] text-lg font-semibold mt-4">2. Data Safety and Sharing</h2>
      <p className="pl-2 pr-2 mb-2">We implement industry-standard encryption and security measures to protect your data. Our security practices are continuously updated to align with regulatory requirements and technological advancements.</p>
      <ul className="pl-2 pr-2 list-disc ml-6">
        <li>Users are responsible for any confidential data shared when generating QR codes.</li>
        <li>We do not share your data with advertisers or any third party without your consent.</li>
        <li>We comply with the Indian IT Act, SPDI Rules, and DPDPA, 2023 for data protection.</li>
        <li>We do not knowingly collect personal data from children under 18 without verified parental consent. If you believe a child has provided personal data, please contact us at qrbridge@gmail.com for its immediate removal.</li>
        <li>We are not responsible for third-party websites or services linked through scanned QR codes. Users should verify the authenticity of external links before engaging.</li>
        <li>In the event of a security breach, we will notify affected users in accordance with applicable laws.</li>
      </ul>

      <h2 className="pl-2 pr-2 text-[5px] text-lg font-semibold mt-4">3. Data Sharing & Legal Compliance</h2>
      <p className="pl-2 pr-2 mb-2">We do not sell, trade, or share your personal data with third parties without your consent or a legally permissible basis.</p>
      <ul className="pl-2 pr-2 list-disc ml-6">
        <li>Our technical service providers may access data strictly under confidentiality agreements.</li>
        <li>Any data you provide via contact forms will be retained until you request deletion, revoke consent, or when its storage is no longer necessary.</li>
        <li>We use Google Analytics to analyze website usage. Google Analytics processes pseudonymized data, including your truncated IP address, through cookies. This data is stored on Google servers. For more information, refer to <a href="https://policies.google.com/privacy" className="text-blue-600 underline">
        Google's Privacy Policy
        </a>.</li>
        <li>If required by law, or government request, we may disclose data in compliance with applicable regulations. Where legally permitted, we will notify you before such disclosure.</li>
      </ul>

      <h2 className="pl-2 pr-2 text-[5px] text-lg font-semibold mt-4">4. Your Rights</h2>
      <p className="pl-2 pr-2 mb-2">Under DPDPA, 2023, you have the right to:</p>
      <ul className="pl-2 pr-2 list-disc ml-6">
        <li>Access, correct, or delete your data.</li>
        <li>Withdraw consent at any time.</li>
        <li>Raise complaints about data misuse.</li>
        <li>To exercise your rights, contact us <a href="mailto:qrbridge@gmail.com" className="text-blue-600 underline">
          qrbridge@gmail.com
        </a>. Requests will be processed within a reasonable timeframe as required by law.</li>
      </ul>

      <h2 className="pl-2 pr-2 text-[5px] text-lg font-semibold mt-4">5. Cookies & Tracking</h2>
      <p className="pl-2 pr-2 mb-2">We use cookies to enhance performance and analytics.</p>
      <ul className="pl-2 pr-2 list-disc ml-6">
        <li>You can manage cookie preferences via browser settings.</li>
        <li>You may opt out of Google Analytics tracking using the <a href="https://tools.google.com/dlpage/gaoptout" className="pl-2 pr-2 text-blue-600 underline">
        Google Analytics Opt-Out Browser Add-on.
        </a></li>
        <li>Some features of our service may not function properly if you disable cookies.</li>
      </ul>

      <h2 className="pl-2 pr-2 text-[5px] text-lg font-semibold mt-4">6. Policy Updates</h2>
      <p className="pl-2 pr-2 mb-2">We update this policy periodically to reflect changes in legal and regulatory requirements or our services.</p>
      <ul className="pl-2 pr-2 list-disc ml-6">
        <li>Significant changes will be notified on our website.</li>
        <li>Continued use of our app or website implies agreement with the latest policy.</li>
      </ul>

      <h2 className="pl-2 pr-2 text-[5px] text-lg font-semibold mt-4">7. Contact Us</h2>
      <p className="pl-2 pr-2 mb-2">
        For any privacy-related concerns, contact us at:
        <a href="mailto:qrbridge@gmail.com" className="text-blue-600 underline">
          qrbridge@gmail.com
        </a>
      </p>
      <p className="pl-2 pr-2 mb-2">By using QRBridge, you agree to this Privacy Policy.</p>
    </div>
  );
}

export default PrivacyPolicy;