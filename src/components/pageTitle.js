import Head from "next/head";


export function PagTi({title , description}) {
    return(
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
        </Head>
    )
}