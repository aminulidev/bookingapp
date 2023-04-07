import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata = {
	title: "Booking App",
	description: "Hotel Booking App. Your Perfect Resourt.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ClientOnly>
					<Navbar />
				</ClientOnly>

				{children}
			</body>
		</html>
	);
}
