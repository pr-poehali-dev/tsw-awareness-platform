import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const Information = () => {
  const articles = [
    {
      title: "Механизмы развития TSW: современные исследования",
      author: "Dr. Smith et al.",
      journal: "Journal of Dermatology",
      year: "2024",
      summary:
        "Подробный анализ патофизиологических механизмов синдрома отмены топических стероидов...",
      status: "Переведено",
    },
    {
      title: "Клинические проявления и диагностика TSW",
      author: "Dr. Johnson et al.",
      journal: "Dermatology Review",
      year: "2023",
      summary:
        "Систематический обзор клинических признаков и методов диагностики...",
      status: "В работе",
    },
    {
      title: "Стратегии лечения и поддержки при TSW",
      author: "Dr. Brown et al.",
      journal: "Clinical Dermatology",
      year: "2024",
      summary: "Современные подходы к лечению и поддержке пациентов с TSW...",
      status: "Запланировано",
    },
  ];

  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Научная информация о TSW
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Переводы актуальных исследований из PubMed и других медицинских
              журналов
            </p>
          </div>

          <div className="grid gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={24} className="text-sky-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                    Что такое TSW?
                  </h2>
                  <div className="prose max-w-none text-slate-700">
                    <p className="mb-4">
                      <strong>Синдром отмены топических стероидов (TSW)</strong>{" "}
                      — это состояние, которое может развиться после длительного
                      использования топических кортикостероидов и их резкой
                      отмены.
                    </p>
                    <p className="mb-4">Основные признаки включают:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Покраснение и воспаление кожи</li>
                      <li>Жжение и зуд</li>
                      <li>Отечность и болезненность</li>
                      <li>Шелушение и трещины на коже</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Переводы научных статей
              </h2>

              <div className="space-y-6">
                {articles.map((article, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-lg p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-slate-500 mb-2">
                          {article.author} • {article.journal} • {article.year}
                        </p>
                        <p className="text-slate-700 text-sm">
                          {article.summary}
                        </p>
                      </div>
                      <div className="ml-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            article.status === "Переведено"
                              ? "bg-green-100 text-green-800"
                              : article.status === "В работе"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {article.status}
                        </span>
                      </div>
                    </div>

                    {article.status === "Переведено" && (
                      <button className="flex items-center text-sky-600 text-sm font-medium hover:text-sky-700">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать перевод
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Information;
