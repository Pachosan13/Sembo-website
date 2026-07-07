import { RouterProvider, useRouter } from "./components/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import HomeView from "./components/HomeView";
import ServiceView from "./components/ServiceView";
import ProjectsView from "./components/ProjectsView";
import AboutView from "./components/AboutView";
import ContactView from "./components/ContactView";
import FAQView from "./components/FAQView";

function AppContent() {
  const { currentPath } = useRouter();

  // Route View Switcher
  const renderView = () => {
    if (currentPath === "/") {
      return <HomeView />;
    }
    if (currentPath === "/proyectos") {
      return <ProjectsView />;
    }
    if (currentPath === "/nosotros") {
      return <AboutView />;
    }
    if (currentPath === "/contacto") {
      return <ContactView />;
    }
    if (currentPath === "/preguntas-frecuentes") {
      return <FAQView />;
    }
    if (currentPath.startsWith("/servicios/")) {
      return <ServiceView />;
    }
    
    // Fallback to home
    return <HomeView />;
  };

  return (
    <div className="min-h-screen bg-brand-navy flex flex-col font-sans selection:bg-brand-cyan selection:text-brand-navy">
      {/* Header (Sticky) */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
