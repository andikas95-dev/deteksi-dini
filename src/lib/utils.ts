import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string): string {
  const initials = name.toUpperCase().split(' ').map(word => word[0]).slice(0, 2).join('');
  return initials
}