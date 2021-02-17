import styles from './workDetail.module.scss'
import ReactPlayer from 'react-player';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Link from 'next/link'

function mod(n, m) {
  return ((n % m) + m) % m;
}

const WorkDetail = (props) => {
  const {
    workList,
    slug,
    myDude
  } = props

  let work = {};
  let previousWorkSlug = "/";
  let nextWorkSlug = "/";
  workList.work.map((e, i) => {
    if (e.fields.slug === slug) {
      work = e.fields

      let pr = mod((i - 1), workList.work.length)
      let nx = mod((i + 1), workList.work.length)

      previousWorkSlug = "/work/" + workList.work[pr].fields.slug;
      nextWorkSlug = "/work/" + workList.work[nx].fields.slug;
    }
  })

  const backHomeDudeUrl = myDude.media[2].fields.file.url;
  const prDudeUrl = myDude.media[3].fields.file.url;
  const nxDudeUrl = myDude.media[4].fields.file.url;

  return (
    <div className={styles.workDetailContainer}>
      <Hero
        title={work.title}
        thumbnail={work.thumbnail.fields.file}
      />
      <Overview
        highlightDescription={work.highlightDescription}
        fullDescription={work.fullDescription}
        role={work.role}
        category={work.category}
        collaborators={work.collaborators}
        deliverables={work.deliverables}
        projectLink={work.projectLink}
        medium={work.medium}
      />
      <Content
        content={work.workContent}
      />
      {
        work.isRequestedViaEmail &&
        <RequestCase />
      }
      <BackWithDude
        backImg={backHomeDudeUrl}
        prSlug={previousWorkSlug}
        prImg={prDudeUrl}
        nxSlug={nextWorkSlug}
        nxImg={nxDudeUrl}
      />
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
        <div className={styles.titleContainer + " col-lg-4 align-self-center"}>
          <h1>{title}</h1>
        </div>

        <div className={styles.mediaContainer + " col-lg-8"}>
          {
            thumbnail.contentType.includes("video")
            ? <ReactPlayer
               className={styles.thumbnailVid}
               url={thumbnail.url}
               width={'100%'}
               height={'100%'}
               playing={true}
               loop={true}
               controls={false}
               muted={true}
               playsinline={true}
             />
            : <img src={thumbnail.url} alt="thumbnail" />
          }
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

        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-1"></div>

          <div className="col-lg-3">
            {
              leftContent.map((e, i) => {
                if (!e.content) {
                  return;
                }
                return (
                  <div className={i===0 ? (styles.leftContentWrapper + " row " + styles.firstRow) : (styles.leftContentWrapper + " row")} key={"ow-" + i}>
                    <div className={styles.leftContentL + " col-lg-4 col-sm-3"}>
                      {e.name}
                    </div>

                    <div className={styles.leftContentR + " col-lg-8 col-sm-3"}>
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

  if (!content) return (<div></div>)

  return (
    <div>
      {
        content.map((e, i) => {
          return (
            <div className={styles.contentContainer} key={"content-" + i}>
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
    containsGap,
    heading,
    textContent,
    link,
    linkText,
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
            <ReactPlayer
               // className={styles.thumbnailVid}
               url={data.mediaLink}
               width={'100%'}
               height={'100%'}
               config={{
                vimeo: {
                  playerOptions: {
                    autoplay: true,
                    loop: true,
                    responsive: true,
                    muted: true,
                    title: false,
                  }
                }
              }}
             />
          }
          {
            data.media &&
            <img
              className={data.outline ? styles.outline : ""}
              src={data.media.fields.file.url}
              alt={data.media.fields.title}
              style={data.isContained && {objectFit: "contain"}}
            />
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
          <div className={styles.customizedMediaRow + " row"} key={"display-" + i} style={{paddingBottom: data.spacingBottom + "px"}}>
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
  // text-vertical-stacked type START
  else if (type === "text-vertical-stacked") {

    return (
      <div className={styles.textVerticalStackedWrapper + " row"}>
        <div className="col-lg-1"></div>

        <div className="col-lg-8">
          <h3>{heading}</h3>
          <p>{documentToReactComponents(textContent)}</p>
        </div>

        <div className="col-lg-3"></div>
      </div>
    );
  }
  // text-vertical-stacked type END
  // text-horizontal-stacked type START
  else if (type === "text-horizontal-stacked") {

    toDisplay.push(
      <div className={styles.textHorizontalStackedWrapper + " row"}>
        <div className="col-lg-1"></div>

        <div className="col-lg-2">
          { heading &&
            <h3>{heading}</h3>
          }
        </div>

        <div className="col-lg-6">
          {
            textContent &&
            <p>{documentToReactComponents(textContent)}</p>
          }
        </div>

        <div className="col-lg-3"></div>
      </div>
    );

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
            <ReactPlayer
               // className={styles.thumbnailVid}
               url={data.mediaLink}
               width={'100%'}
               height={'100%'}
               config={{
                vimeo: {
                  playerOptions: {
                    autoplay: true,
                    loop: true,
                    responsive: true,
                    muted: true,
                    title: false,
                  }
                }
              }}
             />
          }
          {
            data.media &&
            <img
              className={data.outline ? styles.outline : ""}
              src={data.media.fields.file.url}
              alt={data.media.fields.title}
              style={data.isContained && {objectFit: "contain"}}
            />
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
          <div className={styles.customizedMediaRow + " row"} key={"display-" + i} style={{paddingBottom: data.spacingBottom + "px"}}>
            {tempDisplay}
          </div>
        )
        sizeSum = 0;
        tempDisplay = [];
      }
    })


    return toDisplay;
  }
  // text-horizontal-stacked type END
  // text-and-video type START
  else if (type === "text-and-video") {
    let sizeSum = 0;
    let spacing = 0;

    media.map((e, i) => {
      const data = e.fields;

      if (data.spacingBottom && data.spacingBottom !== 0) {
        spacing = data.spacingBottom;
      }

      if (sizeSum === 0 && containsGap) {
        tempDisplay.push(<div className="col-lg-1"></div>)
        sizeSum += 1;
      }

      tempDisplay.push(
        <div className={styles.customizedMediaCol + " col-lg-" + data.size}>
          {
            data.mediaLink &&
            <ReactPlayer
               url={data.mediaLink}
               width={'100%'}
               height={'100%'}
               config={{
                vimeo: {
                  playerOptions: {
                    autoplay: true,
                    loop: true,
                    responsive: true,
                    muted: true,
                    title: false,
                  }
                }
              }}
             />
          }
          {
            (data.videoTitle || data.videoDescription) &&
            <div className={styles.videoTextContainer}>
              {
                data.videoTitle &&
                <h3>{data.videoTitle}</h3>
              }
              {
                data.videoDescription &&
                <p>{documentToReactComponents(data.videoDescription)}</p>
              }
            </div>
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
          <div className={styles.customizedMediaRow + " row"} key={"display-" + i} style={{paddingBottom: spacing + "px"}}>
            {tempDisplay}
          </div>
        )
        sizeSum = 0;
        tempDisplay = [];
      }
    })


    return toDisplay;
  }
  // text-and-video type END
  // link-only type START
  else if (type === "link-only") {
    console.log();

    return (
      <div className={styles.requestCaseContainer + " row"}>
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
          <a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
        </div>
        <div className="col-lg-1"></div>
      </div>
    );
  }
  // link-only type END


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
const BackWithDude = (props) => {
  const {
    backImg,
    prSlug,
    prImg,
    nxSlug,
    nxImg,
  } = props;

  return (
    <div className={styles.backWithDudeContainer}>
      <hr className={styles.shortHr} />

      <div className="row">

        <div className="col-sm-1"></div>

        <div className="col-sm-2">
          <Link href={prSlug}>
            <div className={styles.dudeLinkContainer}>
              <img src={prImg} />
              <span>PREVIOUS PROJECT</span>
            </div>
          </Link>
        </div>

        <div className="col-sm-2"></div>

        <div className="col-sm-2">
          <Link href="/">
            <div className={styles.dudeLinkContainer}>
              <img src={backImg} />
              <span>TAKE ME BACK HOME</span>
            </div>
          </Link>
        </div>

        <div className="col-sm-2"></div>

        <div className="col-sm-2">
          <Link href={nxSlug}>
            <div className={styles.dudeLinkContainer}>
              <img src={nxImg} />
              <span>NEXT PROJECT</span>
            </div>
          </Link>
        </div>

        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}


export default WorkDetail
