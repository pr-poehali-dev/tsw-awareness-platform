import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const quickLinks = [
    {
      title: "Что такое TSW?",
      description: "Основная информация о синдроме отмены топических стероидов",
      link: "/information",
      color: "bg-rose-50 border-rose-200 hover:border-rose-300",
    },
    {
      title: "Научные исследования",
      description: "Переводы статей из PubMed и других медицинских журналов",
      link: "/information",
      color: "bg-green-50 border-green-200 hover:border-green-300",
    },
    {
      title: "Полезные ресурсы",
      description:
        "YouTube каналы, Telegram группы и другие источники поддержки",
      link: "/resources",
      color: "bg-purple-50 border-purple-200 hover:border-purple-300",
    },
  ];

  return (
    <Layout>
      <HeroSection />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Быстрый доступ к информации
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {quickLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`block p-6 rounded-xl border-2 transition-all hover:shadow-md ${item.color}`}
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center text-rose-600 text-sm font-medium">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
            <Icon
              name="AlertTriangle"
              size={32}
              className="text-amber-600 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Важное напоминание
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Информация на этом сайте предоставлена исключительно в
              образовательных целях. Она не заменяет профессиональную
              медицинскую консультацию, диагностику или лечение. Всегда
              консультируйтесь с квалифицированным врачом по вопросам,
              касающимся вашего здоровья.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
