import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: "Главная", path: "/", icon: "Home" },
    { name: "Информация", path: "/information", icon: "FileText" },
    { name: "Ресурсы", path: "/resources", icon: "Link" },
    { name: "Сообщество", path: "/community", icon: "Users" },
    { name: "Помощь", path: "/help", icon: "Heart" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-semibold text-slate-900">
                TSW Поддержка
              </h1>
            </div>

            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-sky-50 text-sky-700"
                        : "text-slate-600 hover:text-sky-600 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon name={item.icon as any} size={16} />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>

            <div className="md:hidden">
              <Icon name="Menu" size={24} className="text-slate-600" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-white border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-slate-500">
            <p>
              © 2025 TSW Поддержка. Информация предоставлена в образовательных
              целях.
            </p>
            <p className="mt-1">
              Всегда консультируйтесь с врачом перед принятием медицинских
              решений.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
