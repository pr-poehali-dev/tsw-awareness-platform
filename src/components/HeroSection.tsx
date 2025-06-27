import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-rose-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon name="Heart" size={32} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Поддержка при
            <span className="text-rose-600"> TSW</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Научно обоснованная информация и поддержка сообщества для людей,
            столкнувшихся с синдромом отмены топических стероидов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-rose-200 transition-colors">
            <Icon
              name="BookOpen"
              size={32}
              className="text-rose-500 mx-auto mb-4"
            />
            <h3 className="font-semibold text-slate-900 mb-2">
              Научные переводы
            </h3>
            <p className="text-sm text-slate-600">
              Переводы исследований с PubMed на русский язык
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-rose-200 transition-colors">
            <Icon
              name="Users"
              size={32}
              className="text-rose-500 mx-auto mb-4"
            />
            <h3 className="font-semibold text-slate-900 mb-2">Сообщество</h3>
            <p className="text-sm text-slate-600">
              Общение и поддержка людей с похожим опытом
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-rose-200 transition-colors">
            <Icon
              name="Shield"
              size={32}
              className="text-rose-500 mx-auto mb-4"
            />
            <h3 className="font-semibold text-slate-900 mb-2">Безопасность</h3>
            <p className="text-sm text-slate-600">
              Проверенная информация от медицинских источников
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
