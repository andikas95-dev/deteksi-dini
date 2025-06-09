import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { StateCreator, create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import Cookies from 'js-cookie';
import { formatInTimeZone } from 'date-fns-tz';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string): string {
  const initials = name
    .toUpperCase()
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('');
  return initials;
}

export const cookieStorage: StateStorage = {
  getItem: (name) => {
    return Cookies.get(name) || null;
  },
  setItem: (name, value) => {
    Cookies.set(name, value, { expires: 7 });
  },
  removeItem: (name) => {
    Cookies.remove(name);
  },
};

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const formatWithTz = (date: Date, fmt: string) =>
  formatInTimeZone(date, timeZone, fmt);
