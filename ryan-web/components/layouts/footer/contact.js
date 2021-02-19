import styles from './contact.module.scss'

const Contact = (props) => {
  const {
    name,
    email,
    social
  } = props.contact

  const {
    myDude
  } = props

  // const normalDudeUrl = myDude.media[1].fields.file.url;

  const dude0Url = myDude.media[6].fields.file.url;
  const dude1Url = myDude.media[8].fields.file.url;

  const dudeAnimateUrl = myDude.media[9].fields.file.url;

  return (
    <div className={styles.contactContainer}>

      <div className={styles.topWrapper}>
        {/* <div className={styles.dudeWrapper}>
          <img src={dude0Url} className={styles.dudeBottom} />
          <img src={dude1Url} className={styles.dudeTop} />
        </div> */}
        <div className={styles.dudeAnimateWrapper} style={{
          backgroundImage: `url(${dudeAnimateUrl})`
        }}>
        </div>
        <h2>{name}</h2>
        <div className={styles.emailLinkWrapper}>
          <h2><a href={"mailto:" + email}>{email}</a></h2>
          <hr />
        </div>
      </div>

      <div className={styles.socialLinkWrapper}>
        {
          social.map((e, i) => {
            const {
              name,
              link
            } = e.fields

            return (
              <div className={styles.linkWrapper} key={i}>
                <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
              </div>
            );
          })
        }

        <div className={styles.cc}>Person Icons by Valerie Lamm from <a href="http://thenounproject.com/" target="_blank" rel="noopener noreferrer">the Noun Project</a></div>
      </div>
    </div>
  )
}

export default Contact
