import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { ethers } from "ethers"

// Utility function to format an address for display
export function formatAddress(address: string): string {
  if (!address) return ""
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
}

// Utility function to validate an Ethereum address
export function isValidAddress(address: string): boolean {
  try {
    return ethers.isAddress(address)
  } catch (error) {
    return false
  }
}

// Utility function to format TRVL values
export function formatTrvl(value: string): string {
  try {
    return `${Number.parseFloat(value).toFixed(4)} TRVL`
  } catch (error) {
    return `${value} TRVL`
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
