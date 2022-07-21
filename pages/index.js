import Head from 'next/head'
import 'antd/dist/antd.css'
import Beranda from './beranda'
import "tailwindcss/tailwind.css"
import Navigasi from '../components/navigasi'
import dynamic from 'next/dynamic'
import FooterCustomer from '../components/footer'

export default function Home(props) {
  return (

    <>
      <Navigasi />
      <Beranda />
      <FooterCustomer />
    </>



  )
}
