import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const Help = () => {
  const faqItems = [
    {
      question: "Что делать, если подозреваю у себя TSW?",
      answer:
        "Обратитесь к врачу-дерматологу для профессиональной консультации. Не прекращайте лечение самостоятельно без медицинского наблюдения.",
    },
    {
      question: "Как долго длится процесс восстановления?",
      answer:
        "Длительность восстановления индивидуальна и может занимать от нескольких месяцев до нескольких лет. Важно набраться терпения и получать поддержку.",
    },
    {
      question: "Можно ли использовать какие-либо препараты?",
      answer:
        "Любые препараты должны назначаться только врачом. Самолечение может быть опасным для вашего здоровья.",
    },
    {
      question: "Где найти поддержку?",
      answer:
        "Присоединяйтесь к нашему сообществу, консультируйтесь с врачами и не стесняйтесь обращаться за помощью к близким.",
    },
  ];

  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Помощь и поддержка
            </h1>
            <p className="text-xl text-slate-600">
              Ответы на частые вопросы и контактная информация
            </p>
          </div>

          {/* Экстренная помощь */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="AlertTriangle" size={24} className="text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-red-900 mb-3">
                  Экстренная помощь
                </h2>
                <p className="text-red-800 mb-4">
                  Если у вас серьезные симптомы или вы чувствуете себя очень
                  плохо, немедленно обратитесь к врачу или вызовите скорую
                  помощь.
                </p>
                <div className="flex space-x-4">
                  <span className="text-red-900 font-semibold">
                    Скорая помощь: 103
                  </span>
                  <span className="text-red-900 font-semibold">
                    Единая служба: 112
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Часто задаваемые вопросы
            </h2>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-slate-200 pb-6 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Контакты и поддержка */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Онлайн поддержка
                </h3>
              </div>

              <p className="text-slate-600 mb-4">
                Присоединяйтесь к нашему сообществу для получения поддержки от
                людей с похожим опытом.
              </p>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Перейти в сообщество
              </button>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Телефон доверия
                </h3>
              </div>

              <p className="text-slate-600 mb-4">
                Психологическая поддержка для людей, переживающих трудности со
                здоровьем.
              </p>

              <p className="text-lg font-semibold text-slate-900">
                8-800-200-01-22
              </p>
              <p className="text-sm text-slate-500">Круглосуточно, бесплатно</p>
            </div>
          </div>

          {/* Полезные советы */}
          <div className="mt-8 bg-sky-50 border border-sky-200 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Общие рекомендации
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-900 mb-2">
                  Физическое здоровье
                </h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Соблюдайте рекомендации врача</li>
                  <li>• Ведите дневник симптомов</li>
                  <li>• Избегайте триггеров</li>
                  <li>• Поддерживайте гигиену кожи</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-2">
                  Эмоциональная поддержка
                </h4>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Общайтесь с близкими</li>
                  <li>• Присоединяйтесь к группам поддержки</li>
                  <li>• Практикуйте релаксацию</li>
                  <li>• Не стесняйтесь просить помощи</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
