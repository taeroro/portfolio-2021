import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ContentfulAPI } from '../utils/contentful'

import Layout from '../components/layouts/layout'
import HomeAbout from '../components/about/homeAbout'
import SelectedWork from '../components/selectedWork/selectedWork'

export default function Home({ page, workList }) {
  const {
    homeAbout,
    contact
  } = page

  return (
    <Layout>
      <HomeAbout homeAbout={homeAbout} />
      <SelectedWork workList={workList} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const data0 = await ContentfulAPI.getEntries({ 'content_type':'home' })
  const data1 = await ContentfulAPI.getEntries({ 'content_type':'workList' })
  const home = data0.items[0].fields
  const workList = data1.items[0].fields

  return {
    props: {
      page: home,
      workList: workList
    }
  }
}
