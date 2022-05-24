import React from 'react'
import Head from 'next/head'

export default function CustomHead({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
            />
            <meta name="robots" content="index, follow" />
        </Head>
    )
}
