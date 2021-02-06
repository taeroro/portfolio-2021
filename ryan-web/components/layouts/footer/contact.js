import styles from './contact.module.scss'

const Contact = (props) => {
  const {
    name,
    email,
    social
  } = props.contact

  return (
    <div className={styles.contactContainer}>
      <h2>{name}</h2>
      <div className={styles.emailLinkWrapper}>
        <h2><a href={"mailto:" + email}>{email}</a></h2>
        <hr />
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
      </div>
    </div>
  )
}

export default Contact
