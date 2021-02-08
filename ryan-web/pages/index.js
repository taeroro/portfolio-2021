import styles from '../styles/Home.module.css'
import { ContentfulAPI } from '../utils/contentful'

import Layout from '../components/layouts/layout'
import HomeAbout from '../components/about/homeAbout'
import SelectedWork from '../components/selectedWork/selectedWork'

export default function Home({ page, workList, contact, myDude }) {
  const {
    // homeAbout
  } = page

    const homeAbout = "Ryan Fan is a UI/UX Designer and Creative Technologist helping humans understand machines better.";

  return (
    <Layout contact={contact} myDude={myDude}>
      <HomeAbout homeAbout={homeAbout} myDude={myDude} />
      <SelectedWork workList={workList} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const data0 = await ContentfulAPI.getEntries({ 'content_type':'home' })
  // const data1 = await ContentfulAPI.getEntries({ 'content_type':'workList' })
  // const data2 = await ContentfulAPI.getEntries({ 'content_type':'contact' })
  // const data3 = await ContentfulAPI.getEntries({ 'content_type':'myDude' })
  const home = data0.items[0].fields
  // const workList = data1.items[0].fields
  // const contact = data2.items[0].fields
  // const myDude = data3.items[0].fields

  return {
    props: {
      page: home,
      workList: tempWorkList,
      contact: tempContact,
      myDude: tempMyDude
    }
  }
}

const tempMyDude = {
  media: [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "i0awqvhf3ypo"
          }
        },
        "type": "Asset",
        "id": "rhsxDkjSllo0LTHp0mF7Q",
        "revision": 3,
        "createdAt": "2021-02-06T07:00:37.028Z",
        "updatedAt": "2021-02-07T06:24:39.770Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "00",
        "file": {
          "url": "//images.ctfassets.net/i0awqvhf3ypo/rhsxDkjSllo0LTHp0mF7Q/ee0d18230b4783c1ec840e5d86487fa2/normal.svg",
          "details": {
            "size": 1248,
            "image": {
              "width": 500,
              "height": 500
            }
          },
          "fileName": "normal.svg",
          "contentType": "image/svg+xml"
        }
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "i0awqvhf3ypo"
          }
        },
        "type": "Asset",
        "id": "6qcPuyHZbRnnB95XrK5wsE",
        "revision": 2,
        "createdAt": "2021-02-07T06:19:12.219Z",
        "updatedAt": "2021-02-07T06:24:47.595Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "00_w",
        "file": {
          "url": "//images.ctfassets.net/i0awqvhf3ypo/6qcPuyHZbRnnB95XrK5wsE/23eabf6bcb00fa1c9e1c2905b43abbc4/normal_white.svg",
          "details": {
            "size": 1248,
            "image": {
              "width": 500,
              "height": 500
            }
          },
          "fileName": "normal_white.svg",
          "contentType": "image/svg+xml"
        }
      }
    }
  ]
}

const tempContact = {
  "name": "Ryan Fan",
  "email": "hello@ryanfandesign.com",
  "social": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "i0awqvhf3ypo"
          }
        },
        "type": "Entry",
        "id": "3g48AJF1wVM148WbyX7gL7",
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "socialLink"
          }
        },
        "revision": 1,
        "createdAt": "2021-02-06T03:21:30.311Z",
        "updatedAt": "2021-02-06T03:22:08.314Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "name": "Resume",
        "link": "https://drive.google.com/file/d/1hQGhCN-FATjePo5-kOivhYxNmeKNbVWX/view?usp=sharing"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "i0awqvhf3ypo"
          }
        },
        "type": "Entry",
        "id": "26ZfJjms2XXw9fndcd1iOp",
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "socialLink"
          }
        },
        "revision": 1,
        "createdAt": "2021-02-06T03:22:13.131Z",
        "updatedAt": "2021-02-06T03:22:52.009Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "name": "Instagram",
        "link": "https://www.instagram.com/ryanfandesign/"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "i0awqvhf3ypo"
          }
        },
        "type": "Entry",
        "id": "ZQ0SUegipJYLQ5YXy2V0K",
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "socialLink"
          }
        },
        "revision": 1,
        "createdAt": "2021-02-06T03:22:55.947Z",
        "updatedAt": "2021-02-06T03:23:14.033Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "name": "LinkedIn",
        "link": "https://www.linkedin.com/in/zuyuanfan/"
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "i0awqvhf3ypo"
          }
        },
        "type": "Entry",
        "id": "SOf6Dn8iQslTlhvV85ji6",
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "socialLink"
          }
        },
        "revision": 1,
        "createdAt": "2021-02-06T03:23:19.125Z",
        "updatedAt": "2021-02-06T03:24:03.934Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "name": "Medium",
        "link": "https://medium.com/@ryantf11"
      }
    }
  ]
}

const tempWorkList = {
  "subtitle": "SELECTED WORK",
  "work": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "i0awqvhf3ypo"
          }
        },
        "type": "Entry",
        "id": "1w0XTktWcwgoHgswXy6YXC",
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "work"
          }
        },
        "revision": 7,
        "createdAt": "2021-02-05T17:02:51.998Z",
        "updatedAt": "2021-02-07T23:30:29.252Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "slug": "michaelkors",
        "title": "Michael Kors",
        "thumbnail": {
          "sys": {
            "space": {
              "sys": {
                "type": "Link",
                "linkType": "Space",
                "id": "i0awqvhf3ypo"
              }
            },
            "type": "Asset",
            "id": "49NsntkJ3oJFylrxzaL4jj",
            "revision": 1,
            "createdAt": "2021-02-05T17:10:21.563Z",
            "updatedAt": "2021-02-05T17:10:49.714Z",
            "environment": {
              "sys": {
                "id": "master",
                "type": "Link",
                "linkType": "Environment"
              }
            },
            "locale": "en-US"
          },
          "fields": {
            "title": "MKC Thumbnail",
            "file": {
              "url": "//images.ctfassets.net/i0awqvhf3ypo/49NsntkJ3oJFylrxzaL4jj/53027136cba8e7d13cab4a5f7819f3e0/mkc-01.jpg",
              "details": {
                "size": 692575,
                "image": {
                  "width": 4000,
                  "height": 4000
                }
              },
              "fileName": "mkc-01.jpg",
              "contentType": "image/jpeg"
            }
          }
        },
        "highlightDescription": "Debuted the first digital fashion show with Michael Kors.",
        "fullDescription": "I contributed to the debut of the first digital fashion show experience to the audiences around the world and, was the sole designer working in a cross-functional environment with the executive, creative, PM, editorial, and dev teams from Michael Kors.\n\nI was responsible for creating an immersive responsive website using existing assets provided by Michael Kors to present the new Spring/Summer 2021 season, and elevated the brand identity by bringing in new visuals and ideas. I also provided development solutions to the engineers which assisted the launch in meeting its key deadlines.\n\nLaunched along with the new season campaign, we have attracted attracted hundreds of thousands of views around the globe and received positive feedback from critics and the public. The latest launch has also been featured on the “Webflow in 2020” collection.",
        "role": [
          "Designer"
        ],
        "category": [
          "UI/UX Design",
          "Responsive Web Design",
          "Development Consulting"
        ],
        "collaborators": [
          "Executive Team",
          "Creative Team",
          "PM Team",
          "Editorial Team",
          "Development Team",
          "at Michael Kors"
        ],
        "deliverables": [
          "Responsive Website"
        ],
        "projectLink": "https://www.michaelkors-collection.com/",
        "workContent": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "15ZGEwuyXsTI5MwImSpD79"
            }
          }
        ],
        "isRequestedViaEmail": true
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "i0awqvhf3ypo"
          }
        },
        "type": "Entry",
        "id": "3V3i1aSUOwrnXanzSMC13Z",
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "work"
          }
        },
        "revision": 4,
        "createdAt": "2021-02-05T20:48:25.927Z",
        "updatedAt": "2021-02-07T22:47:00.957Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "slug": "fourtwenty",
        "title": "Four Twenty",
        "thumbnail": {
          "sys": {
            "space": {
              "sys": {
                "type": "Link",
                "linkType": "Space",
                "id": "i0awqvhf3ypo"
              }
            },
            "type": "Asset",
            "id": "7EsZIvTt3FhYEEpW8MdNUE",
            "revision": 1,
            "createdAt": "2021-02-05T20:53:12.318Z",
            "updatedAt": "2021-02-05T20:54:37.329Z",
            "environment": {
              "sys": {
                "id": "master",
                "type": "Link",
                "linkType": "Environment"
              }
            },
            "locale": "en-US"
          },
          "fields": {
            "title": "fourtwenty",
            "file": {
              "url": "//images.ctfassets.net/i0awqvhf3ypo/7EsZIvTt3FhYEEpW8MdNUE/b448554196adb4848079b7a6665e6d79/fourtwenty.jpg",
              "details": {
                "size": 1134993,
                "image": {
                  "width": 2500,
                  "height": 1875
                }
              },
              "fileName": "fourtwenty.jpg",
              "contentType": "image/jpeg"
            }
          }
        },
        "highlightDescription": "Transform the entire in-store dispensary experience online.",
        "fullDescription": "With the legalization of marijuana across the United States and Canada, more people are getting out of their comfort zones and trying cannabis products to help with anxiety, depression, or even just boost their mood and creativity.\n\nI spent weeks to ideate, research, test, and design an app that moves the entire in-store dispensary experience online. Users can take the quiz and get personal recommendations to find the right cannabis.\n\nFour Twenty is designed for newcomers to learn and discover, and offers experienced users a platform to explore different varieties of cannabis.",
        "role": [
          "Designer"
        ],
        "category": [
          "UI/UX Design",
          "UX Research",
          "Branding"
        ],
        "collaborators": [
          "Solo"
        ],
        "deliverables": [
          "Native Mobile App",
          "Brand Identity"
        ],
        "workContent": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "4Dguc5g6aBIgPyaIxHYmVS"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "79xkQt20rxydTb56f9AGre"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "MJP3BlthcO9bRKCWgQoNQ"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "6XMPZ46azBE7SFWvl3Mjb"
            }
          }
        ],
        "isRequestedViaEmail": true
      }
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "i0awqvhf3ypo"
          }
        },
        "type": "Entry",
        "id": "26NQfj5Is9Oe8fiYltZDQw",
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "work"
          }
        },
        "revision": 4,
        "createdAt": "2021-02-05T21:29:29.377Z",
        "updatedAt": "2021-02-07T22:47:09.990Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "slug": "jazzin",
        "title": "Jazzin",
        "thumbnail": {
          "sys": {
            "space": {
              "sys": {
                "type": "Link",
                "linkType": "Space",
                "id": "i0awqvhf3ypo"
              }
            },
            "type": "Asset",
            "id": "7h5RjyOF01iCXARPtwtA3w",
            "revision": 1,
            "createdAt": "2021-02-05T21:29:50.793Z",
            "updatedAt": "2021-02-06T02:59:48.597Z",
            "environment": {
              "sys": {
                "id": "master",
                "type": "Link",
                "linkType": "Environment"
              }
            },
            "locale": "en-US"
          },
          "fields": {
            "title": "jazzin thumbnail",
            "file": {
              "url": "//images.ctfassets.net/i0awqvhf3ypo/7h5RjyOF01iCXARPtwtA3w/2d2507c72c17e277f2f16436e475d145/jazzin_new.jpg",
              "details": {
                "size": 1044587,
                "image": {
                  "width": 1000,
                  "height": 1000
                }
              },
              "fileName": "jazzin_new.jpg",
              "contentType": "image/jpeg"
            }
          }
        },
        "highlightDescription": "Dynamic, rhythmic and diverse identity makes you jazzin’.",
        "fullDescription": "Jazzin is a 3-day jazz festival supporting local jazz bars and artists to raise awareness of their groups to the public.\n\nI was leading the design and strategy of the social media campaign, designing several interfaces for mobile application as well as working closely with the team, supporting, exchanging ideas and contributing creativity with my fellow designers.",
        "role": [
          "Designer"
        ],
        "category": [
          "Branding",
          "Visual Design",
          "UI/UX Design"
        ],
        "collaborators": [
          "Yuri Ha (Designer)",
          "Yifu Zhang (Designer)"
        ],
        "deliverables": [
          "Brand Identity",
          "Posters",
          "Social Media Campaign",
          "Landing Website",
          "Native Mobile App"
        ],
        "medium": [
          "Website",
          "Mobile",
          "Print",
          "Social Meida"
        ],
        "workContent": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "2gHbbaPTe4VWLd2VZBx1MA"
            }
          }
        ],
        "isRequestedViaEmail": false
      }
    }
  ]
}

// const tempHome =
