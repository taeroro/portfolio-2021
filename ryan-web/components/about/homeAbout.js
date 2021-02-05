import styles from './homeAbout.module.scss'

const HomeAbout = (props) => {
  return (
    <div className={styles.aboutContainer}>

      <div className="row">
        <div className="col-lg-9">
          <h1>
            Ryan Fan is a UI/UX Designer and Creative Technologist helping humans understand machines better.
          </h1>
        </div>

        <div className="col-lg-3">
          PLACEHOLDER
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <span className={styles.linkText + " float-right"}>More About Me →</span>
        </div>
      </div>

    </div>
  )
}

export default HomeAbout
