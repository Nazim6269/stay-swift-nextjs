import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import Logout from '../auth/Logout';

const Navbar = async ({ rightMenu }) => {
  const session = await auth();
  return (
    <nav>
      <Link href="/">
        <Image
          src="/stayswift.svg"
          alt="Stay Swift Logo"
          width={200}
          height={200}
        />
      </Link>

      {rightMenu && (
        <ul>
          <li>
            <Link href="#">Recommended Places</Link>
          </li>

          <li>
            <Link href="#">About Us</Link>
          </li>

          <li>
            <Link href="#">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          {session?.user ? (
            <div>
              <span className="mx-1">{session?.user?.name}</span>
              <span> | </span>
              <Logout />
            </div>
          ) : (
            <li>
              <Link href="/login" class="login">
                Login
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
