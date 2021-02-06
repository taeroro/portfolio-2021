import styles from './selectedWork.module.scss'
import Link from 'next/link'

const SelectedWork = (props) => {
  const {
    subtitle,
    work
  } = props.workList

  return (
    <div className={styles.workContainer}>

      <div className="row">
        <div className="col-lg-12">
          <hr className={styles.customizeHr} />
          <span className={styles.title}>{subtitle}</span>
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
        <div className="col-lg-12">

          <div className={styles.topWrapper}>
              <h2>{title}</h2>
              <span>{highlightDescription}</span>
          </div>

          <div className={styles.bottomWrapper}>
            <div className={styles.tagsWrapper}>
              {
                category.map((e, i) => <span key={i}>{e}</span>)
              }
            </div>

            <a href="">Learn More →</a>
          </div>

        </div>
      </div>

      <div className="row">
        <div className="col-xl-8">
          <img className={styles.thumbnailImg} src={thumbnailURL} />
        </div>
      </div>

    </div>
  );
}

export default SelectedWork
