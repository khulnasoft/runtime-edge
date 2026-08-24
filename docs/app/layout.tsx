import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import '../styles.css'

export const metadata: Metadata = {
  title: {
    default: 'Edge Runtime',
    template: '%s | Edge Runtime',
  },
  icons: {
    icon: '/logo.svg',
  },
}

function Logo() {
  return (
    <>
      <img width='24' src='/logo.svg' alt='Edge Runtime logo' />
      <span className='w-full font-bold pl-2'>Edge Runtime</span>
    </>
  )
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <head>
        <Head />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=optional'
          rel='stylesheet'
        />
      </head>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<Logo />}
              projectLink='https://github.com/khulnasoft/runtime-edge'
            />
          }
          footer={
            <Footer>MIT {new Date().getFullYear()} © Edge Runtime.</Footer>
          }
          pageMap={await getPageMap()}
          docsRepositoryBase='https://github.com/khulnasoft/runtime-edge/blob/main/docs/content'
          editLink='Edit this page on GitHub'
          feedback={{ content: 'Question? Give us feedback →' }}
          toc={{ float: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
