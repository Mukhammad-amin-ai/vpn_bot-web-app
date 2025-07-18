import {
  Shield,
  Globe,
  Lock,
  AlertTriangle,
  FileText,
  Users,
  Clock,
  Mail,
} from "lucide-react";
import { Card } from "../../../components/CustomCard";

const termsData = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    icon: FileText,
    content: [
      "By accessing and using our VPN service, you accept and agree to be bound by the terms and provision of this agreement.",
      "If you do not agree to abide by the above, please do not use this service.",
      "These terms apply to all visitors, users, and others who access or use the service.",
    ],
  },
  {
    id: "service-description",
    title: "2. Service Description",
    icon: Globe,
    content: [
      "Our VPN service provides secure, encrypted internet connections through our global network of servers.",
      "We offer various server locations to help you access content and maintain privacy online.",
      "Service availability may vary by location and is subject to local laws and regulations.",
      "We reserve the right to modify, suspend, or discontinue any part of our service at any time.",
    ],
  },
  {
    id: "privacy-policy",
    title: "3. Privacy & Data Protection",
    icon: Lock,
    content: [
      "We maintain a strict no-logs policy. We do not monitor, record, or store your online activities.",
      "We may collect minimal technical data necessary for service operation and improvement.",
      "Your personal information is protected according to our Privacy Policy.",
      "We use industry-standard encryption to protect your data transmission.",
      "We do not sell, trade, or share your personal information with third parties.",
    ],
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable Use Policy",
    icon: Shield,
    content: [
      "You agree to use our service only for lawful purposes and in accordance with local laws.",
      "Prohibited activities include but are not limited to:",
      "• Illegal downloading or sharing of copyrighted content",
      "• Hacking, phishing, or other malicious activities",
      "• Spamming or sending unsolicited communications",
      "• Accessing or attempting to access restricted networks or systems",
      "• Any activity that violates the rights of others or applicable laws",
    ],
  },
  {
    id: "user-responsibilities",
    title: "5. User Responsibilities",
    icon: Users,
    content: [
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You must notify us immediately of any unauthorized use of your account.",
      "You are responsible for all activities that occur under your account.",
      "You must comply with all applicable local, state, national, and international laws.",
      "You agree to use the service in a manner that does not interfere with other users.",
    ],
  },
  {
    id: "service-availability",
    title: "6. Service Availability",
    icon: Clock,
    content: [
      "We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service.",
      "Scheduled maintenance may temporarily affect service availability.",
      "Service may be limited or unavailable in certain geographic regions.",
      "We are not liable for service interruptions beyond our reasonable control.",
      "Refunds may be available for extended service outages as outlined in our refund policy.",
    ],
  },
  {
    id: "limitations",
    title: "7. Limitations of Liability",
    icon: AlertTriangle,
    content: [
      "Our service is provided 'as is' without warranties of any kind.",
      "We are not liable for any indirect, incidental, or consequential damages.",
      "Our total liability shall not exceed the amount paid for the service.",
      "We do not guarantee that our service will meet your specific requirements.",
      "You use our service at your own risk and discretion.",
    ],
  },
  {
    id: "termination",
    title: "8. Account Termination",
    icon: AlertTriangle,
    content: [
      "We may terminate or suspend your account for violation of these terms.",
      "You may cancel your subscription at any time through your account settings.",
      "Upon termination, your right to use the service ceases immediately.",
      "We reserve the right to delete your account data after termination.",
      "Refunds for terminated accounts are subject to our refund policy.",
    ],
  },
  {
    id: "changes",
    title: "9. Changes to Terms",
    icon: FileText,
    content: [
      "We reserve the right to modify these terms at any time.",
      "Changes will be effective immediately upon posting on our website.",
      "Continued use of the service constitutes acceptance of modified terms.",
      "We will notify users of significant changes via email or service notifications.",
      "It is your responsibility to review these terms periodically.",
    ],
  },
  {
    id: "contact",
    title: "10. Contact Information",
    icon: Mail,
    content: [
      "For questions about these terms, please contact us at:",
      "Email: legal@vpnservice.com",
      "Support: support@vpnservice.com",
      "Address: [Your Company Address]",
      "We will respond to inquiries within 48 hours during business days.",
    ],
  },
];

export const Term = () => {
  return (
    <div className="max-w-4xl mx-auto p-2 space-y-6 min-h-screen">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Please read these terms carefully before using our VPN service. By
          using our service, you agree to these terms and conditions.
        </p>
        <div className="text-sm text-gray-500">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      {/* Terms Content */}
      <div className="space-y-6">
        {termsData.map((section) => {
          const IconComponent = section.icon;
          return (
            <Card
              key={section.id}
              className="shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-1">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Important Notice */}
      <Card className="border-l-4 border-l-blue-50">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-2">
                Important Notice
              </h3>
              <p className="text-gray-400 leading-relaxed">
                These terms constitute a legally binding agreement between you
                and our VPN service. If you have any questions or concerns about
                these terms, please contact our legal team before using the
                service. Your continued use of our service indicates your
                acceptance of these terms and any future modifications.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Footer */}
      <div className="text-center pt-8 border-t border-gray-200">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <Mail className="w-4 h-4" />
            <span>Questions? Contact us at legal@vpnservice.com</span>
          </div>
          <p className="text-xs text-gray-400">
            © 2025 VPN Service. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
