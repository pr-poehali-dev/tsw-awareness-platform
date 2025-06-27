import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const Resources = () => {
  const youtubeChannels = [
    {
      name: "TSW Journey",
      description: "Личный опыт восстановления и практические советы",
      subscribers: "12K",
      url: "#",
    },
    {
      name: "Дерматология простым языком",
      description: "Врач-дерматолог объясняет сложные вопросы",
      subscribers: "45K",
      url: "#",
    },
  ];

  const telegramChannels = [
    {
      name: "TSW Поддержка Россия",
      description: "Русскоязычное сообщество для взаимной поддержки",
      members: "2.3K",
      url: "#",
    },
    {
      name: "Новости дерматологии",
      description: "Актуальные исследования и новости медицины",
      members: "5.1K",
      url: "#",
    },
  ];

  const additionalResources = [
    {
      name: "International TSW Network",
      description: "Международная организация поддержки TSW",
      type: "Веб-сайт",
      url: "#",
    },
    {
      name: "PubMed",
      description: "База данных медицинских исследований",
      type: "База данных",
      url: "#",
    },
  ];

  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Полезные ресурсы
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Тщательно отобранные источники информации и поддержки
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* YouTube каналы */}
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Icon name="Play" size={20} className="text-red-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  YouTube каналы
                </h2>
              </div>

              <div className="space-y-4">
                {youtubeChannels.map((channel, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-slate-900">
                        {channel.name}
                      </h3>
                      <span className="text-sm text-slate-500">
                        {channel.subscribers} подписчиков
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      {channel.description}
                    </p>
                    <a
                      href={channel.url}
                      className="inline-flex items-center text-red-600 text-sm font-medium hover:text-red-700"
                    >
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Перейти на канал
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Telegram каналы */}
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-rose-600"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Telegram каналы
                </h2>
              </div>

              <div className="space-y-4">
                {telegramChannels.map((channel, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-slate-900">
                        {channel.name}
                      </h3>
                      <span className="text-sm text-slate-500">
                        {channel.members} участников
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      {channel.description}
                    </p>
                    <a
                      href={channel.url}
                      className="inline-flex items-center text-rose-600 text-sm font-medium hover:text-rose-700"
                    >
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Присоединиться
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Дополнительные ресурсы */}
          <div className="mt-8 bg-white rounded-xl border border-slate-200 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Дополнительные ресурсы
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {additionalResources.map((resource, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-slate-900">
                      {resource.name}
                    </h3>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    {resource.description}
                  </p>
                  <a
                    href={resource.url}
                    className="inline-flex items-center text-rose-600 text-sm font-medium hover:text-rose-700"
                  >
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Открыть ресурс
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
