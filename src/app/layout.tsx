// app/layout.tsx

import './globals.css';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Spotify',
    description: 'Music for everyone.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Circular+Std:wght@400;700&display=swap"
                rel="stylesheet"
            />
        </Head>
        <body>{children}</body>
        </html>
    );
}
