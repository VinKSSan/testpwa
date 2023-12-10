import Head from 'next/head'

import Header from '@/components/headerIndex'
import SecHer from '@/components/secHer/secHerInd'
import ArtP from '@/components/artigos/artP'
import ProjInd from '@/components/projetos/projInd'
import TecSec from '@/components/tecnologias/tecPage'
import Foot from '@/components/footer/footInd'
import ArrowIndicator from '@/components/setinha/setaIndex'
import Link from 'next/link'
import InstallButton from '@/components/btnPWA'


export default function Home() {

  return (
    <>
      <Head>
        <title>VinSan</title>
        <meta name="description" content="VinSan page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>     
      </Head>
      <ArrowIndicator/>
      <InstallButton/>
      <SecHer/>
      <ArtP/>
      <ProjInd/>
      <TecSec/>
    </>
  )
}
