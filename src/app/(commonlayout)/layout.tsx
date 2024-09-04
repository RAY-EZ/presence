import Header from "@/components/header";

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col justify-center w-full h-full">
            <div className="grow sm:grid container gap-5 grid-flow-row container_grid justify-center xm:[&>*]:mb-5 xm:[& :last-child]mb-0">
                <Header />
                {props.children}
            </div>
        </main>
    );
}
