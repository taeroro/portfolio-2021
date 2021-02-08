import { ContentfulAPI } from '../../utils/contentful'
import { useRouter } from 'next/router'
import Layout from '../../components/layouts/layout'
import WorkDetail from '../../components/selectedWork/workDetail'

export default function WorkDetailPage ({ workList, myDude, contact }) {
  const router = useRouter()
  const slug = router.query.slug;

  return (
    <Layout contact={contact} myDude={myDude}>
      <WorkDetail workList={workList} slug={slug} />
    </Layout>
  );
}


export async function getStaticPaths() {
  const data = await ContentfulAPI.getEntries({ 'content_type':'workList' });
  const workList = data.items[0].fields

  const paths = workList.work.map((e) => {
    return { params: { slug: e.fields.slug } }
  })

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps() {
  try {
    const data0 = await ContentfulAPI.getEntries({ 'content_type':'workList', 'include': 3 })
    const data1 = await ContentfulAPI.getEntries({ 'content_type':'myDude' })
    const data2 = await ContentfulAPI.getEntries({ 'content_type':'contact' })
    const workList = data0.items[0].fields
    const myDude = data1.items[0].fields
    const contact = data2.items[0].fields

    return {
      props: {
        workList: workList,
        myDude: myDude,
        contact: contact
      }
    }
  } catch (e) {
    console.error(e);
  }
}
