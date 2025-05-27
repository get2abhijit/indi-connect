
export const metadata = {
  title: 'IndiConnect Germany',
  description: 'Helping Indian expats in Germany',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
