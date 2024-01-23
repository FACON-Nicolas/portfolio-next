import { Inter } from 'next/font/google'
import './globals.css'
import {Header, HStack, Text} from "@/components";
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
        <Header />
        {children}
        <HStack className="bg-[#151515]" justify="around">
            <Text>Contact me</Text>
            <Text>+33 06 58 63 99 01</Text>
            <Text>faconicolas@gmail.com</Text>
            <Text>© {new Date().getFullYear()}</Text>
        </HStack>
      </body>
    </html>
  )
}
