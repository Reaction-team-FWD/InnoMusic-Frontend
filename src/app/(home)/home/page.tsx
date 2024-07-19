// src/app/home/page.tsx
import React from "react";
import { Albums } from "@/components/Albums/Albums";
import Head from "next/head";

const AlbumsPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>My Music Collection</title>
                <meta
                    name="description"
                    content="Explore my extensive collection of music albums. Click on any track to view detailed information and listen to the song."
                />
                <meta
                    name="keywords"
                    content="music, albums, tracks, collection, listen"
                />
                <meta property="og:title" content="My Music Collection"/>
                <meta
                    property="og:description"
                    content="Explore my extensive collection of music albums. Click on any track to view detailed information and listen to the song."
                />
                <meta property="og:image" content="/img/collectionCover.png"/>
                <meta property="og:type" content="website"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
            </Head>
            <Albums/>
        </>
    );
};

export default AlbumsPage;
