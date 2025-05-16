import { Footer } from '@/components/template/footer.template';
import { Header } from '@/components/template/header.template';
import { AppProvider } from '@/context';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Dev Store',
  description: 'A simple e-commerce store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${roboto.className} antialiased`}>
        <AppProvider>
          <Header />
          <div className="my-8">{children}</div>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
