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
			<body>{children}</body>
		</html>
	);
}
