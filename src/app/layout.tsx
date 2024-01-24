import { Inter } from 'next/font/google'
import './globals.css'
import {HStack, Text} from "@/components";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden"}>
        {children}
        <HStack className="bg-dark" justify="around">
            <Text>Contact me</Text>
            <Text>+33 06 58 63 99 01</Text>
            <Text>faconicolas@gmail.com</Text>
            <Text>© {new Date().getFullYear()}</Text>
        </HStack>
      </body>
    </html>
  )
}
