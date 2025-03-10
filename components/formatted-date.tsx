"use client"

import { format } from "date-fns"

interface FormattedDateProps {
  date: Date | string | number
  formatString?: string
}

export function FormattedDate({ date, formatString = "MMMM d, yyyy" }: FormattedDateProps) {
  const dateObject = typeof date === "string" || typeof date === "number" ? new Date(date) : date

  return <time dateTime={dateObject.toISOString()}>{format(dateObject, formatString)}</time>
}

