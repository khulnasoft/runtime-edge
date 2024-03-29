import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { useConfig } from 'nextra-theme-docs'
const useDark = () => {
  const { resolvedTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    setIsDark(resolvedTheme === 'dark')
    return () => false
  }, [resolvedTheme])
  return isDark
}
/** @type import('nextra-theme-docs').DocsThemeConfig */
const theme = {
  project: {
    link: 'https://github.com/khulnasoft/runtime-edge',
  },
  editLink: {
    text: 'Edit this page on GitHub',
  },
  feedback: {
    content: 'Question? Give us feedback →',
  },
  toc: {
    float: true,
  },
  docsRepositoryBase:
    'https://github.com/khulnasoft/runtime-edge/blob/main/docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Runtime Edge',
    }
  },
  logo: function Logo() {
    const isDark = useDark()
    return (
      <>
        <img
          width='24'
          src={`/logo${isDark ? '-dark' : ''}.svg`}
          alt='Runtime Edge logo'
        />
        <span className='w-full font-bold pl-2'>Runtime Edge</span>
      </>
    )
  },
  head: function Head() {
    const router = useRouter()
    const isDark = useDark()
    const { frontMatter, title } = useConfig()
    return (
      <>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='icon'
          href={`/logo${isDark ? '-dark' : ''}.svg`}
          type='image/svg+xml'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:type' content='website' />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={frontMatter.description} />
        <meta
          property='og:url'
          content={`https://runtime-edge.vercel.app${router.asPath}`}
        />
        <meta
          property='og:image'
          content={`https://runtime-edge.vercel.app${
            frontMatter.ogImage ?? '/og-image.png'
          }`}
        />
        <meta property='og:site_name' content='Runtime Edge' />
      </>
    )
  },
}
export default theme
