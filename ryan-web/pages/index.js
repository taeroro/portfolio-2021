import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Layout from '../components/layouts/layout'
import HomeAbout from '../components/about/homeAbout'

export default function Home() {
  return (
    <Layout>
      <HomeAbout />
    </Layout>
  )
}
