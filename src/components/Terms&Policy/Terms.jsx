import { ArrowLeftSquare } from "lucide-react";

function TermsAndConditions() {
  return (
    <div className="max-w-xl mx-auto text-base">
       <header className="flex justify-between items-center px-4 py-4 w-full h-full bg-white shadow-md max-md:px-2 mb-2 sticky top-0 z-10">
      {/* Arrow Button */}
      <button onClick={() => window.history.back()} className="text-zinc-900 hover:text-gray-700">
        <ArrowLeftSquare size={28} color="#1f2937" />
      </button>

      {/* Title */}
      <h1 className="text-lg font-medium text-zinc-900 tracking-normal">
        Terms & Conditions
      </h1>
      
      {/* Placeholder for spacing */}
      <div className="w-8"></div>
    </header>
      <p className="pl-2 pr-2 mb-2 font-semibold">Effective Date: 06-03-2025</p>
      <p className="pl-2 pr-2 mb-2">
        Welcome to QRBridge! These Terms and Conditions ("Terms") govern your use of our website, application, and services (collectively, "QRBridge"). By accessing or using QRBridge, you agree to comply with these Terms. If you do not agree, please refrain from using our services.
      </p>
      <h2 className="pl-2 pr-2 text-lg font-semibold mt-4">1. Definitions</h2>
      <ul className="pl-2 pr-2 list-disc ml-6">
      <li className="pl-2 pr-2 mb-2">"QRBridge" refers to our platform, including our website, web application, and associated services.</li >
      <li  className="pl-2 pr-2 mb-2">"User" refers to any individual or entity accessing or using QRBridge.</li >
      <li  className="pl-2 pr-2 mb-2">"QR Code" refers to the unique codes generated and registered through our platform.</li >
      </ul>
      <h2 className="pl-2 pr-2 text-lg font-semibold mt-4">2. Use of Services</h2>
      <ul className="pl-2 pr-2 list-disc ml-6">
      <li  className="pl-2 pr-2 mb-2">Users must be at least 18 years old or have parental consent to use QRBridge.</li >
      <li  className="pl-2 pr-2 mb-2">QR codes generated through our platform must not contain illegal, harmful, or offensive content.</li >
      <li  className="pl-2 pr-2 mb-2">Users are responsible for the accuracy of the data linked to their QR codes.</li >
      <li  className="pl-2 pr-2 mb-2">You may not use QRBridge for any fraudulent, misleading, or unauthorized purposes.</li >
      <li  className="pl-2 pr-2 mb-2">We reserve the right to suspend or terminate accounts violating these Terms.</li >
      </ul>
      <h2 className="pl-2 pr-2 text-lg font-semibold mt-4">3. User Responsibilities</h2>
      <ul className="pl-2 pr-2 list-disc ml-6">
      <li  className="pl-2 pr-2 mb-2">You are solely responsible for the information linked to your QR codes.</li >
      <li  className="pl-2 pr-2 mb-2">Ensure that sensitive personal or confidential data is not embedded in QR codes, as QRBridge cannot control third-party access.</li >
      <li  className="pl-2 pr-2 mb-2">Users must not misuse the service to engage in activities such as hacking, phishing, or other cyber threats.</li >
      </ul>
      <h2 className="pl-2 pr-2 text-lg font-semibold mt-4">4. Data Privacy & Security</h2>
      <ul className="pl-2 pr-2 list-disc ml-6">
      <li  className="mb-2 pl-2 pr-2 ">By using QRBridge, you agree to our Privacy Policy, which explains how we collect, store, and process data.</li >
      <li  className="mb-2 pl-2 pr-2 ">We do not sell or share your personal data without consent, except as required by law.</li>
      <li  className="mb-2 pl-2 pr-2 ">QRBridge employs encryption and security measures to safeguard user data.</li >
      <li  className="mb-2 pl-2 pr-2 ">Users are responsible for securing their accounts and passwords.</li >
      </ul>
      <h2 className="pl-2 pr-2 text-lg font-semibold mt-4">5. Intellectual Property</h2>
      <ul className="pl-2 pr-2 list-disc ml-6">
      <li  className="mb-2 pl-2 pr-2 ">All trademarks, logos, and content associated with QRBridge are the property of QRBridge and may not be copied or used without permission.</li >
      <li  className="mb-2 pl-2 pr-2 ">Users may not claim ownership of QR codes generated through the platform.</li >
      <li  className="mb-2 pl-2 pr-2 ">Unauthorized reproduction, resale, or commercial use of QRBridge services is prohibited.</li >
      </ul>
      <h2 className="pl-2 pr-2 text-lg font-semibold mt-4">6. Limitations of Liability</h2>
      <ul className="pl-2 pr-2 list-disc ml-6">
      <li className="mb-2 pl-2 pr-2 ">QRBridge is provided "as is" and "as available." We do not guarantee uninterrupted service, error-free performance, or complete security.</li>
      <li className="mb-2 pl-2 pr-2 ">We are not liable for any direct, indirect, incidental, or consequential damages resulting from the use of QRBridge.</li>
      <li className="mb-2 pl-2 pr-2 ">QRBridge is not responsible for third-party websites linked through QR codes.</li>
      <li className="mb-2 pl-2 pr-2 ">Users assume all risks related to third-party QR code scanning and interactions.</li>
      </ul>
      <h2 className="pl-2 pr-2 text-lg font-semibold mt-4">7. Fees and Payments</h2>
      <ul className="pl-2 pr-2 list-disc ml-6">
      <li className="mb-2 pl-2 pr-2 ">Some services may require payments, which will be clearly outlined before purchase.</li>
      <li className="mb-2 pl-2 pr-2 ">Payments are non-refundable unless otherwise stated.</li>
      <li className="mb-2 pl-2 pr-2 ">We are not responsible for transaction failures due to third-party payment processors.</li>
      </ul>
      <h2 className="pl-2 pr-2 text-lg font-semibold mt-4">8. Termination & Account Suspension</h2>
      <ul className="pl-2 pr-2 list-disc ml-6">
      <li className="mb-2 pl-2 pr-2 ">QRBridge reserves the right to suspend or terminate any user account for violations of these Terms or misuse of our services.</li>
      <li className="mb-2 pl-2 pr-2 ">Users may delete their accounts at any time, but QRBridge may retain necessary data per legal obligations.</li>
      </ul>
      <h2 className="pl-2 pr-2 text-lg font-semibold mt-4">9. Changes to Terms</h2>
      <ul className="pl-2 pr-2 list-disc ml-6">
      <li className="mb-2 pl-2 pr-2 ">We may update these Terms periodically. Changes will be posted on our website.</li>
      <li className="mb-2 pl-2 pr-2 ">Continued use of QRBridge after updates implies acceptance of the revised Terms.</li>
      </ul>
      <h2 className="pl-2 pr-2 text-lg font-semibold mt-4">10. Governing Law & Dispute Resolution</h2>
      <ul className="pl-2 pr-2 list-disc ml-6">
      <li className="mb-2 pl-2 pr-2 ">These Terms are governed by the laws of India.</li>
      <li className="mb-2 pl-2 pr-2 ">Any disputes arising from QRBridge services shall be resolved through arbitration in accordance with Indian laws.</li>
      </ul>
      <h2 className="pl-2 pr-2 text-lg font-semibold mt-4">11. Contact Information</h2>
      <p className="mb-2 pl-2 pr-2 ">For any queries or concerns, contact us at: <a href="mailto:qrbridge@gmail.com" className="text-blue-600 underline">qrbridge@gmail.com</a></p>
      <p className="mt-4 pl-2 pr-2 ">By using QRBridge, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.</p>
    </div>
  );
}

export default TermsAndConditions;