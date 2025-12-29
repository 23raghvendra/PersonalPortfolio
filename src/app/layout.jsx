import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
    title: {
        template: "%s | Raghvendra",
        default: "Raghvendra | Software Engineer",
    },
    description: "Senior Software Engineer specializing in scalable, high-performance web applications.",
    metadataBase: new URL("https://yourwebsite.com"),
    openGraph: {
        title: "Raghvendra | Software Engineer",
        description: "Building scalable, reliable products with modern web technologies.",
        url: "https://yourwebsite.com",
        siteName: "Raghvendra Portfolio",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Raghvendra | Software Engineer",
        creator: "@raghvendra",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${sans.variable} ${outfit.variable} font-sans antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300 selection:bg-indigo-500/30`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
