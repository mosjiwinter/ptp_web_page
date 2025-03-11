"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"

interface MultiLanguageTextProps {
  children?: React.ReactNode
  en?: string
  th?: string
  className?: string
}

// Simple utility to check if text contains Thai characters
const containsThai = (text: string): boolean => {
  const thaiPattern = /[\u0E00-\u0E7F]/
  return thaiPattern.test(text)
}

export function MultiLanguageText({ children, en, th, className = "" }: MultiLanguageTextProps) {
  const { language } = useLanguage()

  // If en and th props are provided, use those based on selected language
  if (en !== undefined && th !== undefined) {
    const text = language === "en" ? en : th
    const fontClass = language === "en" ? "font-prompt" : "font-noto-thai"
    return <span className={`${fontClass} ${className}`}>{text}</span>
  }

  // Otherwise, use the children and detect language automatically
  if (typeof children !== "string") {
    return <span className={className}>{children}</span>
  }

  const isThai = containsThai(children)
  const fontClass = isThai ? "font-noto-thai" : "font-prompt"

  return <span className={`${fontClass} ${className}`}>{children}</span>
}

