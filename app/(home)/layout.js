import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import '../globals.css';
import { connectMongo } from '@/services/connectMongo';

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
        <Navbar rightMenu={true} />
        <main>{children}</main>
      </body>
    </html>
  );
}
