import React from 'react';
import Head from 'next/head';

const CustomHead = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <meta property="og:image" content='/vc.jpg' />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content="https://vishalchaurasia.vercel.app/" />
            <meta name="twitter:image" content='/vc.jpg' />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
};

export default CustomHead;
