import styles from './homeAbout.module.scss'
import Link from 'next/link'

const HomeAbout = (props) => {
  const {
    homeAbout,
    myDude
  } = props

  const normalDudeUrl = myDude.media[0].fields.file.url;

  return (
    <div className={styles.aboutContainer}>

      <div className="row">
        <div className="col-lg-9">
          <h1>
            {homeAbout}
          </h1>
        </div>

        <div className="col-lg-3">
          <div className={styles.dudeContainer}>
            <img src={normalDudeUrl} />
          </div>
        </div>
      </div>

      <div className={styles.moreAboutRow + " row"}>
        <div className="col-lg-12">
          <span className={styles.linkText + " float-right"}>More About Me →</span>
        </div>
      </div>

    </div>
  )
}

export default HomeAbout
