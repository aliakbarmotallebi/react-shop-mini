import React from 'react'
import Head from 'next/head'

import Titles from '@utils/Titles'

export default function CustomHead({ title }) {
    return (
        <Head>
            <title>{`${Titles.titles.siteTitle} | ${title}`}</title>
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
            />
            <meta name="robots" content="index, follow" />
            <meta name="description" content={Titles.titles.desciption} />
        </Head>
    )
}
