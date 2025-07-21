import {
  MessageCircle,
  Users,
  Shield,
  Settings,
  Smartphone,
  Globe,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
} from "../../../components/CustomAccordion";

const faqData = [
  {
    id: "what-is-outline",
    question: "Что такое Outline VPN?",
    answer:
      "Outline — это безопасный VPN-сервис с открытым исходным кодом, созданный для обхода блокировок и защиты вашей конфиденциальности в интернете. Вы можете использовать его на компьютере и телефоне.",
    icon: Shield,
  },
  {
    id: "how-to-connect",
    question: "Как подключиться к Outline по ключу?",
    answer:
      "1. Скачайте приложение Outline для Android, iOS, Windows или macOS.\n2. Откройте ссылку подключения, которую вы получили от бота.\n3. Подтвердите подключение — VPN будет активирован автоматически.",
    icon: Smartphone,
  },
  {
    id: "where-to-download",
    question: "Где скачать приложение Outline?",
    answer:
      "Вы можете скачать приложение с официального сайта [getoutline.org](https://getoutline.org/ru/), либо из App Store или Google Play, набрав 'Outline VPN'.",
    icon: Globe,
  },
  {
    id: "multiple-devices",
    question: "Можно ли использовать ключ на нескольких устройствах?",
    answer:
      "Обычно ключ рассчитан только на одно устройство. Если вы подключите его на другом, старое подключение может быть отключено.",
    icon: Users,
  },
  {
    id: "how-safe",
    question: "Насколько безопасен Outline VPN?",
    answer:
      "Outline использует современные протоколы шифрования. Ваши данные защищены и недоступны третьим лицам, включая интернет-провайдеров.",
    icon: Shield,
  },
  {
    id: "connection-problems",
    question: "Что делать, если VPN не подключается?",
    answer:
      "1. Убедитесь, что ключ активен.\n2. Попробуйте перезапустить приложение.\n3. Проверьте интернет-соединение.\nЕсли проблема не решается — напишите в поддержку бота.",
    icon: Settings,
  },
];

export const FAQ = () => {
  return (
    <div className="mx-auto p-3 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white">
          Часто задаваемые вопросы
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Найдите ответы на распространенные вопросы о Telegram. Если вы не
          можете найти если вы ищете то, что вам нужно, не стесняйтесь
          обращаться в нашу службу поддержки.
        </p>
      </div>

      {/* FAQ Accordion */}
      <Card className="shadow-sm bg-white">
        <Accordion type="single" collapsible className="w-full bg-black">
          {faqData.map((faq, index) => {
            const IconComponent = faq.icon;
            return (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className={` border-gray-100 ${
                  index === faqData.length - 1 ? "border-b-0" : ""
                }`}
              >
                <AccordionTrigger className="cursor-pointer hover:bg-gray-50 px-3 py-4 rounded-none group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-white group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-3 pb-6 pt-2">
                  <div className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Card>
    </div>
  );
};
