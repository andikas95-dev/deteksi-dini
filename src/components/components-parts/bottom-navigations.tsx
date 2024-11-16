'use client';
import React, { createElement } from 'react';
import { bottomNavigation, NavigationItem } from './home-menus';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const navigationClasses = cva(
  [
    'inline-flex flex-col items-center justify-center text-center h-12 px-2 rounded-md',
    'hover:text-primary',
  ],
  {
    variants: {
      isActive: {
        true: 'text-primary font-semibold',
        false: 'text-gray-600',
      },
    },
  }
);

function BottomNavigations() {
  const pathname = usePathname();
  console.log('🚀 ~ BottomNavigations ~ pathname:', pathname);

  // TODO: Buat fungsi untuk validasi login secara global
  const isLogin = false;

  const renderItem = (item: Pick<NavigationItem, 'icon' | 'name'>) => {
    return (
      <>
        {createElement(item.icon, {
          className: 'w-8 h-8',
          'aria-hidden': true,
        })}
        <span className="text-xs truncate">{item.name}</span>
      </>
    );
  };

  return (
    <nav className="flex items-center justify-center fixed left-0 bottom-0 w-full h-16 px-2 bg-white border-t border-gray-300 z-40">
      <div className="flex items-center justify-center w-full max-w-xl mx-auto">
        <ul className="flex items-center justify-evenly w-full">
          {bottomNavigation.map((item) => {
            const isActive = item.exact
              ? item.href === pathname
              : pathname.startsWith(item.href);

            if (item.isLogged !== undefined) {
              if (item.isLogged !== isLogin) {
                return;
              }
            }

            return (
              <li key={item.name} className="relative">
                {item.external ? (
                  <a
                    className={cn(navigationClasses({ isActive }))}
                    href={item.href}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    {renderItem(item)}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(navigationClasses({ isActive }))}
                  >
                    {renderItem(item)}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default BottomNavigations;
