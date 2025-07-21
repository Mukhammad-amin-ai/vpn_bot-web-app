import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/CustomCard";

import Download from "../../../assets/images/download-app.jpg";
import KeyVPN from "../../../assets/images/key.png";
import Activate from "../../../assets/images/mobile.jpg";
export const Phone = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-[20px] font-bold text-white">
              Инструкция по подключению <br /> VPN через Outline
            </h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            🔒 <strong>Outline</strong> — это безопасное VPN-приложение,
            позволяющее подключаться к интернету через зашифрованное соединение.
            Оно доступно на:
          </p>
          <div className="text-white mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
            <div>📱 Android</div>
            <div>📱 iOS</div>
            <div>💻 Windows</div>
            <div>💻 macOS</div>
            <div>💻 divnux</div>
            <div>🌐 ChromeOS</div>
          </div>
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
                Скачайте Outline Client
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-2">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-400 mb-4">
                    Перейдите на официальный сайт или магазин приложений и
                    скачайте клиент Outline, соответствующий вашей операционной
                    системе.
                  </p>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">
                      Ссылка на скачивание:
                    </p>
                    <code className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      <a href="https://play.google.com/store/apps/details?id=org.outline.android.client">
                        Outline
                      </a>
                    </code>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                  {/* Изображение загрузки клиента */}
                  <img
                    src={Download}
                    alt="Скачивание клиента Outline"
                    className="rounded-lg shadow-md mx-auto"
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
                Получите ключ доступа от Telegram-бота
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-2">
              <p className="text-gray-400 mb-4">
                После успешной оплаты в Telegram-боте, вы получите уникальный
                ключ доступа. Он выглядит примерно так:
              </p>
              <div className="bg-gray-100 p-3 rounded-lg text-sm break-all">
                <img src={KeyVPN} alt="" />
              </div>
              <p className="text-gray-400 mt-4">
                Скопируйте этот ключ — он понадобится в следующем шаге.
              </p>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3">
                <span className="bg-white text-purple-600 font-bold px-3 py-1 rounded-full text-sm">
                  3
                </span>
                Добавьте ключ в приложение Outline
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-2">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-gray-400 mb-4">
                    Откройте клиент Outline и нажмите «+» или «Добавить ключ
                    доступа». Вставьте ключ, который вы получили, и подтвердите.
                  </p>
                  <p className="text-gray-400">
                    Также можно просто нажать на ссылку с ключом в Telegram —
                    приложение предложит открыть её.
                  </p>
                </div>
                <div className="bg-gray-200 rounded-lg p-4">
                  {/* Изображение поля ввода ключа */}
                  <img
                    src={Activate}
                    alt="Вставка ключа доступа в Outline"
                    className="rounded-lg shadow-md mx-auto"
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
                Подключитесь к VPN
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-2">
              <p className="text-gray-400 mb-4">
                После добавления ключа, в приложении появится сервер. Нажмите
                кнопку «Подключиться» — и вы мгновенно получите безопасный
                доступ к интернету!
              </p>
              <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded text-green-700">
                ✅ VPN подключен — вы в безопасности!
              </div>
            </CardContent>
          </Card>

          {/* Final note */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-6 text-center">
              <div className="text-lg font-semibold text-gray-700 mb-2">
                💡 Полезные советы
              </div>
              <ul className="text-gray-600 space-y-2 text-sm max-w-xl mx-auto">
                <li>
                  📌 Ключ доступа можно использовать повторно, пока действует
                  подписка
                </li>
                <li>
                  📌 Если вы потеряли ключ — обратитесь к боту для
                  восстановления
                </li>
                <li>
                  📌 Чтобы проверить работу VPN, откройте{" "}
                  <a
                    href="https://whatismyip.com"
                    className="text-blue-600 underline"
                  >
                    whatismyip.com
                  </a>{" "}
                  до и после подключения
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>
            Нужна помощь? Свяжитесь с нашей поддержкой прямо в Telegram-боте.
          </p>
        </div>
      </div>
    </div>
  );
};
