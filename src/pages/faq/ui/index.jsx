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
    id: "what-is-telegram",
    question: "What is Telegram?",
    answer:
      "Telegram is a cloud-based instant messaging app that focuses on speed, security, and privacy. It allows you to send messages, photos, videos, and files of any type, as well as create groups for up to 200,000 members or channels for broadcasting to unlimited audiences.",
    icon: MessageCircle,
  },
  {
    id: "is-telegram-free",
    question: "Is Telegram free to use?",
    answer:
      "Yes, Telegram is completely free to use. There are no subscription fees, no ads, and no premium features that require payment. The service is funded by its founder and remains committed to staying free for all users.",
    icon: Users,
  },
  {
    id: "how-secure",
    question: "How secure is Telegram?",
    answer:
      "Telegram uses advanced encryption protocols. All chats are encrypted, and Secret Chats use end-to-end encryption with additional security features like self-destructing messages. Your data is stored across multiple data centers around the globe.",
    icon: Shield,
  },
  {
    id: "group-limits",
    question: "What are the group and channel limits?",
    answer:
      "Telegram groups can have up to 200,000 members, while channels can have unlimited subscribers. You can also create supergroups with advanced admin tools, pinned messages, and public links for easy joining.",
    icon: Users,
  },
  {
    id: "file-sharing",
    question: "What files can I share on Telegram?",
    answer:
      "You can share files of any type up to 2GB each. This includes documents, videos, audio files, photos, and more. There's no limit on the number of files you can send, and they're stored in the cloud for easy access.",
    icon: Settings,
  },
  {
    id: "multiple-devices",
    question: "Can I use Telegram on multiple devices?",
    answer:
      "Yes! Telegram syncs seamlessly across all your devices. You can use it on your phone, tablet, computer, and web browser simultaneously. All your chats and media are instantly available everywhere.",
    icon: Smartphone,
  },
  {
    id: "global-availability",
    question: "Is Telegram available worldwide?",
    answer:
      "Telegram is available in most countries around the world. The app supports over 100 languages and works reliably even in areas with poor internet connectivity thanks to its optimized protocols.",
    icon: Globe,
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
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Find answers to common questions about Telegram. If you can't find
          what you're looking for, feel free to contact our support team.
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
