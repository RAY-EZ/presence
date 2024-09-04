import Footer from "@/components/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

config.autoAddCss = false;
export const metadata: Metadata = {
    title: "Sushil Kumar",
    description: "My Portfolio website",
};

const Analytic = dynamic(
    async () => {
        const Google = await import("@next/third-parties/google");
        return {
            default: Google.GoogleAnalytics,
        };
    },
    { ssr: true },
);

export default function RootLayout(props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <html lang="en" className="light">
            <body className="bg-white dark:bg-black flex flex-col min-h-screen">
                <div id="children" className=" grow">
                    {props.children}
                </div>
                <div id="model">{props.modal}</div>
                <Footer />
                {process.env.GTAG && <Analytic gaId={process.env.GTAG} />}
            </body>
        </html>
    );
}
