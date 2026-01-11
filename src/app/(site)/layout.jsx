import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function SiteLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen relative">
            <ScrollToTop />

            <Sidebar />

            <div className="flex-1 flex flex-col md:pl-20 transition-all duration-300">
                <main className="flex-grow px-4 md:px-0">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
}
