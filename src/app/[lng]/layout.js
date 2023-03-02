import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import EmotionRootStyleRegistry from "../mui/EmotionRootStyleRegistry";
import { Footer } from './components/Footer';
import { useTranslation } from '../i18n'
import { Header } from './components/Header';
import AppBar from './components/Header/Appbar';
import { Layout } from './components/Layout';
import WrapperRedux from '../redux/WrapperRedux'


// const roboto = Roboto({
//   weight: ['400', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'optional',
// })

// const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout(props) {
  const {children , params: {lng}} = props

  const { t } = await useTranslation(lng)

  // console.log('pageProps',props)
  return (
    <html lang={lng} dir={dir(lng)} >
      <head />
      <body >
        <WrapperRedux>
          <EmotionRootStyleRegistry>
            {/* <AppBarMui lng={lng}>
         </AppBarMui> */}
            <Layout>
              {children}
            </Layout>  
            {/* <Header/> */}
          </EmotionRootStyleRegistry>
        </WrapperRedux>
      </body>
    </html>
  )
}