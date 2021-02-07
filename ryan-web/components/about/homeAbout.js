import styles from './homeAbout.module.scss'
import Link from 'next/link'

const HomeAbout = (props) => {
  const {
    homeAbout,
    myDude
  } = props

  let normalDudeUrl = myDude.media[0].fields.file.url;

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
    </div>
  )
}

export default HomeAbout
