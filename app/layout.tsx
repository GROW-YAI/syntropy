import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/features/navbar";
import Footer from "./components/features/footer";
import BoafoWidgetInitializer from "./components/BoafoWidgetInitializer";
import React from "react";

export const metadata: Metadata = {
		title: "Syntropy Engineering Solutions",
		description: "Expert welding and metal fabrication services in Ghana",
};

export default function RootLayout({
		children,
}: {
		children: ReactNode;
}) {
		return (
				<html lang="en">
						<body>
								<BoafoWidgetInitializer />
								<Navbar />
								{children}
								<Footer />
						</body>
				</html>
		);
}
