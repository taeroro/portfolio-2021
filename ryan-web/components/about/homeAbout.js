import styles from './homeAbout.module.scss'
import Link from 'next/link'

const HomeAbout = (props) => {
  const {
    homeAbout,
    myDude
  } = props

  // let normalDudeUrl = myDude.media[0].fields.file.url;

  const dude0Url = myDude.media[5].fields.file.url;
  const dude1Url = myDude.media[7].fields.file.url;

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
            {/* <img src={normalDudeUrl} /> */}
            <div className={styles.dudeWrapper}>
              <img src={dude0Url} className={styles.dudeBottom} />
              <img src={dude1Url} className={styles.dudeTop} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
