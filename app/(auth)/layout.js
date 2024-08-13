import { Inter } from 'next/font/google';
import '../globals.css';
import { connectMongo } from '@/services/connectMongo';
import Navbar from '@/components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Stay swift',
  description: 'A fairy reception',
};

export default async function RootLayout({ children }) {
  await connectMongo();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar rightMenu={false} />
        <main>{children}</main>
      </body>
    </html>
  );
}
