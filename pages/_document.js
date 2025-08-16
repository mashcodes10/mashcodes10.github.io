import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* SEO Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Md. Mashiur Rahman Khan - Vanderbilt CS + Math student specializing in AI, Machine Learning, and Software Engineering. Building impactful software that bridges AI with real-world needs." />
          <meta name="keywords" content="Mashiur Rahman Khan, Mashiur Khan, Vanderbilt Computer Science, AI, Machine Learning, Software Engineering, Cornell Tech, Yrikka AI, AWS Bedrock, Full Stack Developer" />
          <meta name="author" content="Md. Mashiur Rahman Khan" />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Md. Mashiur Rahman Khan - AI & Software Engineering Portfolio" />
          <meta property="og:description" content="Vanderbilt CS + Math student specializing in AI, Machine Learning, and Software Engineering. Building impactful software that bridges AI with real-world needs." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mashcodes10.github.io/" />
          <meta property="og:image" content="https://mashcodes10.github.io/images/Pasted%20Graphic%202.png" />
          <meta property="og:site_name" content="Mashiur Rahman Khan Portfolio" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Md. Mashiur Rahman Khan - AI & Software Engineering Portfolio" />
          <meta name="twitter:description" content="Vanderbilt CS + Math student specializing in AI, Machine Learning, and Software Engineering. Building impactful software that bridges AI with real-world needs." />
          <meta name="twitter:image" content="https://mashcodes10.github.io/images/Pasted%20Graphic%202.png" />
          
          {/* Additional SEO */}
          <meta name="theme-color" content="#319795" />
          <link rel="canonical" href="https://mashcodes10.github.io/" />
          
          {/* Google Analytics */}
          {process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                      page_title: document.title,
                      page_location: window.location.href,
                    });
                  `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
