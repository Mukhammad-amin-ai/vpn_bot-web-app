import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/CustomCard";
import { Copy, Bot, Key } from "lucide-react";

export const Notebook = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bot className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">
              Telegram Bot Token Setup
            </h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow these simple steps to create a Telegram bot and get your bot
            token for Outline VPN integration
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3">
                <span className="bg-white text-blue-600 font-bold px-3 py-1 rounded-full text-sm">
                  1
                </span>
                {/* <MessageCircle className="h-5 w-5" /> */}
                Open Telegram and Find BotFather
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-400 mb-4">
                    Open your Telegram app and search for{" "}
                    <strong>@BotFather</strong> in the search bar. BotFather is
                    the official bot that helps you create and manage other
                    bots.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-400 mb-2">Search for:</p>
                    <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      @BotFather
                    </code>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                  <img
                    src="/placeholder.svg?height=300&width=200"
                    alt="Telegram search for BotFather"
                    width={200}
                    height={300}
                    className="mx-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-green-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3">
                <span className="bg-white text-green-600 font-bold px-3 py-1 rounded-full text-sm">
                  2
                </span>
                {/* <Bot className="h-5 w-5" /> */}
                Start Conversation with BotFather
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-400 mb-4">
                    Click on BotFather and start a conversation by clicking the{" "}
                    <strong>START</strong> button or typing <code>/start</code>.
                    You'll see a welcome message with available commands.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      Click START or type:
                    </p>
                    <code className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      /start
                    </code>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                  <img
                    src="/placeholder.svg?height=300&width=200"
                    alt="BotFather start conversation"
                    width={200}
                    height={300}
                    className="mx-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3">
                <span className="bg-white text-purple-600 font-bold px-3 py-1 rounded-full text-sm">
                  3
                </span>
                {/* <Bot className="h-5 w-5" /> */}
                Create New Bot
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-400 mb-4">
                    Type <code>/newbot</code> to create a new bot. BotFather
                    will ask you to provide a name for your bot and then a
                    username.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg space-y-2">
                    <div>
                      <p className="text-sm text-gray-600">Command:</p>
                      <code className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                        /newbot
                      </code>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Example bot name:</p>
                      <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                        Outline VPN Bot
                      </code>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        Example username (must end with 'bot'):
                      </p>
                      <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
                        outline_vpn_bot
                      </code>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                  <img
                    src="/placeholder.svg?height=300&width=200"
                    alt="Creating new bot with BotFather"
                    width={200}
                    height={300}
                    className="mx-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-orange-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3">
                <span className="bg-white text-orange-600 font-bold px-3 py-1 rounded-full text-sm">
                  4
                </span>
                {/* <Key className="h-5 w-5" /> */}
                Get Your Bot Token
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-400 mb-4">
                    After successfully creating your bot, BotFather will provide
                    you with a bot token. This token is what you'll use to
                    authenticate your Outline VPN bot.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
                    <p className="text-yellow-800 text-sm font-medium mb-2">
                      ⚠️ Important:
                    </p>
                    <p className="text-yellow-700 text-sm">
                      Keep your bot token secure and never share it publicly.
                      Anyone with this token can control your bot.
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      Token format example:
                    </p>
                    <code className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                      123456789:ABCdefGHIjklMNOpqrsTUVwxyz
                    </code>
                    <Copy className="inline h-4 w-4 ml-2 text-gray-500 cursor-pointer" />
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                  <img
                    src="/placeholder.svg?height=300&width=200"
                    alt="Bot token received from BotFather"
                    width={200}
                    height={300}
                    className="mx-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Step */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  You're All Set!
                </h3>
                <p className="text-gray-600 mb-4">
                  Copy your bot token and use it in your Outline VPN
                  configuration. Your bot is now ready to help manage your VPN
                  connections.
                </p>
                <div className="bg-white p-4 rounded-lg border-2 border-dashed border-gray-300 max-w-md mx-auto">
                  <p className="text-sm text-gray-500 mb-2">Next step:</p>
                  <p className="text-gray-700 font-medium">
                    Add your bot token to your Outline VPN bot configuration
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>
            Need help? Make sure your bot username ends with 'bot' and is
            unique.
          </p>
        </div>
      </div>
    </div>
  );
};
