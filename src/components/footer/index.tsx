import dynamic from "next/dynamic";
import { createClient } from "../../prismicio";

const ThemeButtonGroup = dynamic(() => import("./themeButton"), { ssr: false });

export default async function Footer(): Promise<JSX.Element> {
    const client = createClient();
    const data = await client.getSingle("footer");

    return (
        <footer className="w-full text-center p-5 flex justify-center items-center">
            <p className="text-xl font-medium tracking-wide self-center text-center flex-1">
                {data.data.cc_text}
            </p>
            <ThemeButtonGroup />
        </footer>
    );
}
