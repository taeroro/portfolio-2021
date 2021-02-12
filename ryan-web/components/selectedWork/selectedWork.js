import styles from './selectedWork.module.scss'
import Link from 'next/link'
import ReactPlayer from 'react-player';

const SelectedWork = (props) => {
  const {
    subtitle,
    work
  } = props.workList

  return (
    <div className={styles.workContainer} id="selected-work">

      <div className="row">
        <div className="col-lg-12">
          <hr className={styles.customizeHr} />
          <span className={styles.title}>{subtitle + " ↓"}</span>
        </div>
      </div>

      {
        work.map((e, i) => <SelectedWorkSingle key={`work_${i}`} work={e} />)
      }

    </div>
  )
}

const SelectedWorkSingle = (props) => {
  const {
    slug,
    title,
    highlightDescription,
    category,
    thumbnail
  } = props.work.fields

  const thumbnailURL = thumbnail.fields.file.url

  return (
    <div className={styles.singleWorkContainer}>

      <div className="row">
        <Link href={"/work/" + slug}>

          <div className={styles.colWrapper + " col-lg-8"}>
            <div className={styles.topWrapper}>
                <h1>{title}</h1>
                <span>{highlightDescription}</span>
            </div>

            {
              thumbnail.fields.file.contentType.includes("video")
              ? <ReactPlayer
                 className={styles.thumbnailImg}
                 url={thumbnailURL}
                 playing={true}
                 loop={true}
                 muted={true}
                 playsinline={true}
               />
              : <img className={styles.thumbnailImg} src={thumbnailURL} />
            }
          </div>

        </Link>
      </div>

    </div>
  );
}

export default SelectedWork
