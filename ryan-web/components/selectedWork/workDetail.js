import styles from './workDetail.module.scss'

const WorkDetail = (props) => {
  const {
    workList,
    slug
  } = props

  let work = {};
  workList.work.map((e, i) => {
    if (e.fields.slug === slug) {
      work = e.fields
    }
  })

  return (
    <div className={styles.workDetailContainer}>
      <Hero
        title={work.title}
        thumbnail={work.thumbnail.fields.file.url}
      />
      <Overview
        highlightDescription = {work.highlightDescription}
        fullDescription = {work.fullDescription}
        role = {work.role}
        category = {work.category}
        collaborators = {work.collaborators}
        deliverables = {work.deliverables}
        projectLink = {work.projectLink}
        medium = {work.medium}
      />
      <Content
        content = {work.workContent}
      />
      {
        work.isRequestedViaEmail &&
        <RequestCase />
      }
      <BackWithDude />
    </div>
  )
}


// ************************
// HERO
// ************************
const Hero = (props) => {
  const {
    title,
    thumbnail
  } = props

  return (
    <div className={styles.heroContainer}>

      <div className={styles.heightRow + " row"}>
        <div className="col-lg-4 align-self-center">
          <h1>{title}</h1>
        </div>

        <div className="col-lg-8">
          <img src={thumbnail} alt="thumbnail" />
        </div>
      </div>

    </div>
  );
}


// ************************
// OVERVIEW
// ************************
const Overview = (props) => {
  const {
    highlightDescription,
    fullDescription,
    role,
    category,
    collaborators,
    deliverables,
    projectLink,
    medium
  } = props

  const leftContent = [
    {
      "name": "Role",
      "content": role
    },
    {
      "name": "Category",
      "content": category
    },
    {
      "name": "Collaborators",
      "content": collaborators
    },
    {
      "name": "Medium",
      "content": medium
    },
    {
      "name": "Deliverables",
      "content": deliverables
    },
    {
      "name": "Project Link",
      "content": projectLink
    }
  ];

  return (
    <div>

      <div className={styles.subtitleWrapper + " row"}>
        <div className="col-lg-12">
          <hr className={styles.customizeHr} />
          <span className={styles.subtitle}>OVERVIEW ↓</span>
        </div>
      </div>

      <div className={styles.overviewContainer}>

        <div className="row">
          <div className="col-lg-5"></div>

          <div className="col-lg-6">
            <h2>{highlightDescription}</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-1"></div>

          <div className="col-lg-3">
            {
              leftContent.map((e, i) => {
                if (!e.content) {
                  return;
                }
                return (
                  <div className={styles.leftContentWrapper + " row"}>
                    <div className={styles.leftContentL + " col-lg-4"}>
                      {e.name}
                    </div>

                    <div className={styles.leftContentR + " col-lg-8"}>
                      {
                        Array.isArray(e.content)
                        ? e.content.join('\n')
                        : e.name.includes("Link")
                        ? (<a href={e.content} target="_blank" rel="noopener noreferrer">{e.content.split('/')[2]}</a>)
                        : e.content
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className="col-lg-1"></div>

          <div className="col-lg-6">
            <p>{fullDescription}</p>
          </div>
        </div>

      </div>

    </div>
  );
}


// ************************
// CONTENT
// ************************
const Content = (props) => {
  const {
    content
  } = props

  return (
    <div>
      {
        content.map((e, i) => {
          return (
            <div className={styles.contentContainer}>
              {
                e.fields.title &&
                (
                  <div className={styles.subtitleWrapper + " row"}>
                    <div className="col-lg-12">
                      <hr className={styles.customizeHr} />
                      <span className={styles.subtitle}>{e.fields.title + " ↓"}</span>
                    </div>
                  </div>
                )
              }

              <ContentDetail detail={e.fields} />
            </div>
          );
        })
      }
    </div>
  );
}

const ContentDetail = (props) => {
  const {
    detail
  } = props

  const {
    type,
    media,
    containsGap
  } = detail

  let toDisplay = [];
  let tempDisplay = [];

  // media-only type START
  if (type === "media-only") {
    let sizeSum = 0;

    media.map((e, i) => {
      const data = e.fields;

      if (sizeSum === 0 && containsGap) {
        tempDisplay.push(<div className="col-lg-1"></div>)
        sizeSum += 1;
      }

      tempDisplay.push(
        <div className={styles.customizedMediaCol + " col-lg-" + data.size}>
          {
            data.mediaLink &&
            <div className={data.size >= 4 ? styles.videoWrapper : `${styles.videoWrapper} ${styles.vidMobile}`} >
              <iframe src={data.mediaLink} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            </div>
          }
          {
            data.media &&
            <img src={data.media.fields.file.url} alt={data.media.fields.title} />
          }
        </div>
      )
      sizeSum += parseInt(data.size);

      if (sizeSum === 11 && containsGap) {
        tempDisplay.push(<div className="col-lg-1"></div>)
        sizeSum += 1;
      }

      if (sizeSum === 12) {
        toDisplay.push(
          <div className="row">
            {tempDisplay}
          </div>
        )
        sizeSum = 0;
        tempDisplay = [];
      }
    })


    return toDisplay;
  }
  // media-only type END


  return (
    <div></div>
  );
}


// ************************
// REQUEST CASE STUDY BY EMAIL
// ************************
const RequestCase = () => {
  return (
    <div className={styles.requestCaseContainer + " row"}>
      <div className="col-lg-12">
        Full case study available on request via <a href="mailto:hello@ryanfandesign.com">email</a>.
      </div>
    </div>
  );
}


// ************************
// REQUEST CASE STUDY BY EMAIL
// ************************
const BackWithDude = () => {
  return (
    <div className={styles.backWithDudeContainer}>
      <hr className={styles.shortHr} />

      <div className="row">

        <div className="col-lg-1"></div>

        <div className="col-lg-2">
          <span>PREVIOUS PROJECT</span>
        </div>

        <div className="col-lg-2"></div>

        <div className="col-lg-2">
          <span>TAKE ME BACK TO HOME</span>
        </div>

        <div className="col-lg-2"></div>

        <div className="col-lg-2">
          <span>NEXT PROJECT</span>
        </div>

        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}


export default WorkDetail
