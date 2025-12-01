import Link from 'next/link'
import { Container } from '@/components/Container'
import Image from "next/image";
import avatarImage from '@/images/zamspacelogo.png'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-10">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row max-w-5xl mx-auto">

              {/* Navigation Links */}
              <div className="flex items-center gap-3">
                <NavLink href="/">
                  <Image
                    src={avatarImage}   // ✅ Put your actual logo file in /public
                    alt="ZamSpace Logo"
                    width={120}       // ✅ Control logo width here
                    height={40}       // ✅ Control logo height here
                    className="object-contain"
                    priority
                  />
                </NavLink>
              </div>

              {/* Copyright */}
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} ZamSpace. All rights reserved.
              </p>

            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
