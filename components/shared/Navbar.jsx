'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Separator } from '../ui/separator'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="nav-container sticky top-0 z-10">
      {/* -------------logo------------ */}
      <div className="nav-logo">
        <Link href="/">Fashion Nail</Link>
      </div>

      {/* --------------------mobile nav-------------- */}
      <div className="mobile-nav">
        <Sheet>
          <SheetTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="sheet-header">
              <SheetClose asChild>
                <Link href="/" className="nav-logo">
                  Fashion Nail
                </Link>
              </SheetClose>
            </SheetHeader>

            <Separator className="my-2" />

            <ul className="nav-list-col">
              <li className="nav-item">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className={pathname === '/' ? 'active-link' : ''}
                  >
                    Home
                  </Link>
                </SheetClose>
              </li>
              <li className="nav-item">
                <SheetClose asChild>
                  <Link
                    href="/services"
                    className={pathname === '/services' ? 'active-link' : ''}
                  >
                    Services
                  </Link>
                </SheetClose>
              </li>
              <li className="nav-item">
                <SheetClose asChild>
                  <Link
                    href="/about"
                    className={pathname === '/about' ? 'active-link' : ''}
                  >
                    About
                  </Link>
                </SheetClose>
              </li>
              <li className="nav-item">
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className={pathname === '/contact' ? 'active-link' : ''}
                  >
                    Contact
                  </Link>
                </SheetClose>
              </li>
            </ul>

            <Separator />

            {/* ---------------------mobile auth---------------*/}
            <div className="flex flex-row justify-center items-center gap-2 mt-4">
              <div>
                <Link href="/sign-up" className="hover:underline">
                  Sign Up
                </Link>
              </div>
              <div>|</div>
              <div>
                {' '}
                <Link href="/sign-in" className="hover:underline">
                  Log In
                </Link>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* -------------web nav ----------------*/}
      <div className="web-nav">
        <NavigationMenu>
          <NavigationMenuList className="nav-list-row">
            <NavigationMenuItem className="nav-item">
              <Link href="/" className={pathname === '/' ? 'active-link' : ''}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="nav-item">
              <Link
                href="/services"
                className={pathname === '/services' ? 'active-link' : ''}
              >
                Services
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="nav-item">
              <Link
                href="/about"
                className={pathname === '/about' ? 'active-link' : ''}
              >
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="nav-item">
              <Link
                href="/contact"
                className={pathname === '/contact' ? 'active-link' : ''}
              >
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* --------------------- web auth---------------*/}
        <div className="flex w-2/5 flex-row justify-end items-center gap-2 text-sm">
          <div>
            <Link href="/sign-up">Sign Up</Link>
          </div>
          <div>|</div>
          <div>
            {' '}
            <Link href="/sign-in">Log In</Link>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
