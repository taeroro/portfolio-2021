import styles from '../styles/Home.module.css'
import { ContentfulAPI } from '../utils/contentful'

import Layout from '../components/layouts/layout'
import HomeAbout from '../components/about/homeAbout'
import SelectedWork from '../components/selectedWork/selectedWork'

export default function Home({ page, workList, contact, myDude }) {
  const {
    homeAbout
  } = page

  return (
    <Layout contact={contact} myDude={myDude}>
      <HomeAbout homeAbout={homeAbout} myDude={myDude} />
      <SelectedWork workList={workList} />
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const data0 = await ContentfulAPI.getEntries({ 'content_type':'home' })
    const data1 = await ContentfulAPI.getEntries({ 'content_type':'workList' })
    const data2 = await ContentfulAPI.getEntries({ 'content_type':'contact' })
    const data3 = await ContentfulAPI.getEntries({ 'content_type':'myDude' })
    const home = data0.items[0].fields
    const workList = data1.items[0].fields
    const contact = data2.items[0].fields
    const myDude = data3.items[0].fields

    return {
      props: {
        page: home,
        workList: workList,
        contact: contact,
        myDude: myDude
      }
    }
  } catch (e) {
    e = JSON.stringify(e);
    console.error("index");
    console.error(e);

    return {
      props: {
        page: {}
        workList: {}
        contact: {}
        myDude: {}
      }
    }
  }
}
