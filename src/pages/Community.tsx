import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Community = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState("");

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsRegistered(true);
    }
  };

  const forumPosts = [
    {
      title: "Мой опыт восстановления: 6 месяцев без стероидов",
      author: "Анна М.",
      replies: 12,
      lastActivity: "2 часа назад",
      category: "Истории выздоровления",
    },
    {
      title: "Какие увлажняющие средства помогают?",
      author: "Дмитрий К.",
      replies: 8,
      lastActivity: "4 часа назад",
      category: "Уход за кожей",
    },
    {
      title: "Поддержка в трудные дни",
      author: "Елена В.",
      replies: 15,
      lastActivity: "1 день назад",
      category: "Эмоциональная поддержка",
    },
  ];

  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Сообщество поддержки
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Место для общения, поддержки и обмена опытом
            </p>
          </div>

          {!isRegistered ? (
            <div className="max-w-md mx-auto bg-white rounded-xl border border-slate-200 p-8 mb-12">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-sky-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                  Присоединяйтесь к сообществу
                </h2>
                <p className="text-slate-600">
                  Зарегистрируйтесь для участия в форуме
                </p>
              </div>

              <form onSubmit={handleRegistration} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email адрес
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-600 text-white py-3 rounded-lg font-medium hover:bg-sky-700 transition-colors"
                >
                  Зарегистрироваться
                </button>
              </form>

              <p className="text-xs text-slate-500 text-center mt-4">
                Регистрируясь, вы соглашаетесь с правилами сообщества
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Боковая панель */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24">
                  <h3 className="font-semibold text-slate-900 mb-4">
                    Категории форума
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Истории выздоровления",
                      "Уход за кожей",
                      "Эмоциональная поддержка",
                      "Вопросы врачам",
                    ].map((category) => (
                      <button
                        key={category}
                        className="block w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg"
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Icon
                          name="User"
                          size={16}
                          className="text-green-600"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">
                          Добро пожаловать!
                        </p>
                        <p className="text-sm text-slate-500">{email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Основной контент */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl border border-slate-200 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-slate-900">
                      Последние обсуждения
                    </h2>
                    <button className="bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sky-700 transition-colors">
                      Создать тему
                    </button>
                  </div>

                  <div className="space-y-4">
                    {forumPosts.map((post, index) => (
                      <div
                        key={index}
                        className="border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold text-slate-900 mb-1">
                              {post.title}
                            </h3>
                            <p className="text-sm text-slate-500">
                              от {post.author} в категории {post.category}
                            </p>
                          </div>
                          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                            {post.replies} ответов
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <button className="text-sky-600 text-sm font-medium hover:text-sky-700">
                            Читать обсуждение
                          </button>
                          <span className="text-xs text-slate-500">
                            {post.lastActivity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Community;
