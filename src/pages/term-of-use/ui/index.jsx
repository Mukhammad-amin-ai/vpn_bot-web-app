import {
  Shield,
  Globe,
  Lock,
  AlertTriangle,
  FileText,
  Users,
  Clock,
  Mail,
  Wifi,
  EyeOff,
  AlertCircle,
  UserCheck,
} from "lucide-react";
import { Card } from "../../../components/CustomCard";

const termsData = [
  {
    id: 1,
    icon: Shield,
    title: "Общие положения",
    content: [
      "Используя наш VPN-сервис, вы соглашаетесь с данными условиями. Если вы не согласны с ними, пожалуйста, не используйте сервис.",
      "Мы оставляем за собой право изменять эти условия в любое время. Обновления будут публиковаться на этой странице.",
    ],
  },
  {
    id: 2,
    icon: Wifi,
    title: "Использование сервиса",
    content: [
      "Сервис предоставляется исключительно для законных целей. Запрещается использовать VPN для доступа к запрещённому контенту, хакерским атакам, распространению вредоносного ПО и других незаконных действий.",
      "Мы не несем ответственности за действия, совершенные пользователями через VPN.",
    ],
  },
  {
    id: 3,
    icon: EyeOff,
    title: "Конфиденциальность и безопасность",
    content: [
      "Мы не ведём журналов активности и не храним вашу личную информацию.",
      "Однако мы можем обрабатывать технические данные, необходимые для поддержки и функционирования сервиса.",
    ],
  },
  {
    id: 4,
    icon: Globe,
    title: "Ограничения и блокировки",
    content: [
      "Мы можем ограничить доступ к сервису в случае нарушения условий использования.",
      "Некоторые регионы или интернет-провайдеры могут ограничивать или блокировать использование VPN.",
    ],
  },
  {
    id: 5,
    icon: AlertCircle,
    title: "Отказ от ответственности",
    content: [
      "Сервис предоставляется «как есть». Мы не гарантируем постоянную доступность или скорость соединения.",
      "Мы не несем ответственности за потери данных, убытки или другие последствия использования сервиса.",
    ],
  },
  {
    id: 6,
    icon: UserCheck,
    title: "Пользовательские обязанности",
    content: [
      "Вы обязуетесь использовать VPN ответственно и соблюдать местное законодательство.",
      "Вы не должны передавать свои учётные данные третьим лицам.",
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
        <h1 className="text-3xl font-bold text-white">
          Пользовательское соглашение
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Пожалуйста, внимательно прочитайте эти условия перед использованием
          нашего VPN-сервиса. Используя наш сервис, вы соглашаетесь с этими
          положениями и условиями.
        </p>
        <div className="text-sm text-gray-500">Last updated: 20-07-2025</div>
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
