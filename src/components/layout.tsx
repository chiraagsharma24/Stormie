import { PropsWithChildren } from "react";

export default function Layout({children}:PropsWithChildren){
    return(
        <div className="bg-gradient-to-br from-background to-muted">
            header
            <main className="min-h-screen container mx-auto px-4 py-8">{children}</main>
            <footer className="border-t backdrop-blur p">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>
                    Designed and Developed by Chirag Sharma
                    </p>
                </div>
            </footer>
        </div>
    );
};