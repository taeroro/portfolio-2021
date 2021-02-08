import { ContentfulAPI } from '../../utils/contentful'
import { useRouter } from 'next/router'
import Layout from '../../components/layouts/layout'
import WorkDetail from '../../components/selectedWork/workDetail'

export default function WorkDetailPage ({ workList, myDude, contact }) {
  const router = useRouter()
  const slug = router.query.slug;

  return (
    <Layout contact={contact} myDude={myDude}>
      <WorkDetail workList={workList} slug={slug} />
    </Layout>
  );
}


export async function getStaticPaths() {
  const data = await ContentfulAPI.getEntries({ 'content_type':'workList' });
  const workList = data.items[0].fields

  const paths = workList.work.map((e) => {
    return { params: { slug: e.fields.slug } }
  })

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps() {
  // const data0 = await ContentfulAPI.getEntries({ 'content_type':'workList', 'include': 3 })
  const data1 = await ContentfulAPI.getEntries({ 'content_type':'myDude' })
  const data2 = await ContentfulAPI.getEntries({ 'content_type':'contact' })
  // const workList = data0.items[0].fields
  const myDude = data1.items[0].fields
  const contact = data2.items[0].fields

  return {
    props: {
      workList: tempWorkList,
      myDude: myDude,
      contact: contact
    }
  }
}

const tempWorkList =
{
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
              "space": {
                "sys": {
                  "type": "Link",
                  "linkType": "Space",
                  "id": "i0awqvhf3ypo"
                }
              },
              "type": "Entry",
              "id": "15ZGEwuyXsTI5MwImSpD79",
              "contentType": {
                "sys": {
                  "type": "Link",
                  "linkType": "ContentType",
                  "id": "contentField"
                }
              },
              "revision": 2,
              "createdAt": "2021-02-05T18:10:28.441Z",
              "updatedAt": "2021-02-06T03:14:15.330Z",
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
              "type": "media-only",
              "media": [
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
                    "id": "4Wi6kciLenKp65Ox87WJRp",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 1,
                    "createdAt": "2021-02-05T18:17:07.491Z",
                    "updatedAt": "2021-02-05T19:16:43.305Z",
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
                    "size": "9",
                    "mediaLink": "https://player.vimeo.com/video/508125757?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0"
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
                    "id": "OfVdt1QhzQ6DT9AcfIYF3",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 1,
                    "createdAt": "2021-02-05T19:17:36.525Z",
                    "updatedAt": "2021-02-05T19:17:59.734Z",
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
                    "size": "3",
                    "mediaLink": "https://player.vimeo.com/video/508187711?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0"
                  }
                }
              ],
              "containsGap": false
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
              "space": {
                "sys": {
                  "type": "Link",
                  "linkType": "Space",
                  "id": "i0awqvhf3ypo"
                }
              },
              "type": "Entry",
              "id": "4Dguc5g6aBIgPyaIxHYmVS",
              "contentType": {
                "sys": {
                  "type": "Link",
                  "linkType": "ContentType",
                  "id": "contentField"
                }
              },
              "revision": 2,
              "createdAt": "2021-02-05T20:56:09.535Z",
              "updatedAt": "2021-02-06T03:14:37.050Z",
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
              "type": "media-only",
              "media": [
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
                    "id": "Nup6sOGZD0YiXxvmSkimJ",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 2,
                    "createdAt": "2021-02-05T20:56:41.418Z",
                    "updatedAt": "2021-02-06T03:10:43.757Z",
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
                    "size": "10",
                    "media": {
                      "sys": {
                        "space": {
                          "sys": {
                            "type": "Link",
                            "linkType": "Space",
                            "id": "i0awqvhf3ypo"
                          }
                        },
                        "type": "Asset",
                        "id": "42wcj2GYEBuXpVdBnX9z7S",
                        "revision": 2,
                        "createdAt": "2021-02-05T20:57:02.224Z",
                        "updatedAt": "2021-02-05T20:57:26.506Z",
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
                        "title": "System Map img",
                        "file": {
                          "url": "//images.ctfassets.net/i0awqvhf3ypo/42wcj2GYEBuXpVdBnX9z7S/f65fd27cb26de9b5ad6672e39ad1f9e3/FOURTWENTY-6.jpg",
                          "details": {
                            "size": 1031955,
                            "image": {
                              "width": 4532,
                              "height": 4055
                            }
                          },
                          "fileName": "FOURTWENTY-6.jpg",
                          "contentType": "image/jpeg"
                        }
                      }
                    }
                  }
                }
              ],
              "containsGap": true
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
              "id": "79xkQt20rxydTb56f9AGre",
              "contentType": {
                "sys": {
                  "type": "Link",
                  "linkType": "ContentType",
                  "id": "contentField"
                }
              },
              "revision": 2,
              "createdAt": "2021-02-05T20:59:56.351Z",
              "updatedAt": "2021-02-06T03:14:43.068Z",
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
              "type": "media-only",
              "media": [
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
                    "id": "4plcVntartXBWfP7imGfpZ",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 2,
                    "createdAt": "2021-02-05T20:57:47.263Z",
                    "updatedAt": "2021-02-06T03:11:07.504Z",
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
                    "size": "5",
                    "media": {
                      "sys": {
                        "space": {
                          "sys": {
                            "type": "Link",
                            "linkType": "Space",
                            "id": "i0awqvhf3ypo"
                          }
                        },
                        "type": "Asset",
                        "id": "5kv13vQ3EmIIzllsHVul0I",
                        "revision": 1,
                        "createdAt": "2021-02-05T20:57:51.000Z",
                        "updatedAt": "2021-02-05T20:58:05.957Z",
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
                        "title": "FOURTWENTY-2",
                        "file": {
                          "url": "//images.ctfassets.net/i0awqvhf3ypo/5kv13vQ3EmIIzllsHVul0I/2a1384f383a1eadb423d669158213106/FOURTWENTY-2.jpg",
                          "details": {
                            "size": 358793,
                            "image": {
                              "width": 2000,
                              "height": 1500
                            }
                          },
                          "fileName": "FOURTWENTY-2.jpg",
                          "contentType": "image/jpeg"
                        }
                      }
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
                    "type": "Entry",
                    "id": "3lXpDGhk8ecjkaVjA2zkPD",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 2,
                    "createdAt": "2021-02-05T20:58:28.315Z",
                    "updatedAt": "2021-02-06T03:11:12.578Z",
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
                    "size": "5",
                    "media": {
                      "sys": {
                        "space": {
                          "sys": {
                            "type": "Link",
                            "linkType": "Space",
                            "id": "i0awqvhf3ypo"
                          }
                        },
                        "type": "Asset",
                        "id": "1DgfF6cKjPe1nTTlPQxi2q",
                        "revision": 1,
                        "createdAt": "2021-02-05T20:58:32.700Z",
                        "updatedAt": "2021-02-05T20:58:41.579Z",
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
                        "title": "FOURTWENTY-3",
                        "file": {
                          "url": "//images.ctfassets.net/i0awqvhf3ypo/1DgfF6cKjPe1nTTlPQxi2q/edcb3ab997f6d22843c5c1366a3b5171/FOURTWENTY-3.jpg",
                          "details": {
                            "size": 352280,
                            "image": {
                              "width": 2000,
                              "height": 1500
                            }
                          },
                          "fileName": "FOURTWENTY-3.jpg",
                          "contentType": "image/jpeg"
                        }
                      }
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
                    "type": "Entry",
                    "id": "6iHc2qHts5R9fMKkQ20IDe",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 2,
                    "createdAt": "2021-02-05T20:58:53.883Z",
                    "updatedAt": "2021-02-06T03:11:20.547Z",
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
                    "size": "5",
                    "media": {
                      "sys": {
                        "space": {
                          "sys": {
                            "type": "Link",
                            "linkType": "Space",
                            "id": "i0awqvhf3ypo"
                          }
                        },
                        "type": "Asset",
                        "id": "6uanDHhI7eVcUNeDC1lLXk",
                        "revision": 1,
                        "createdAt": "2021-02-05T20:59:03.932Z",
                        "updatedAt": "2021-02-05T20:59:12.448Z",
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
                        "title": "FOURTWENTY-4",
                        "file": {
                          "url": "//images.ctfassets.net/i0awqvhf3ypo/6uanDHhI7eVcUNeDC1lLXk/8bb09539fdd6736523a3ba83fb0e79e4/FOURTWENTY-4.jpg",
                          "details": {
                            "size": 374098,
                            "image": {
                              "width": 2000,
                              "height": 1500
                            }
                          },
                          "fileName": "FOURTWENTY-4.jpg",
                          "contentType": "image/jpeg"
                        }
                      }
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
                    "type": "Entry",
                    "id": "5YXd1yDSTygcc8O7n3a3s5",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 2,
                    "createdAt": "2021-02-05T21:00:28.781Z",
                    "updatedAt": "2021-02-06T03:11:25.551Z",
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
                    "size": "5",
                    "media": {
                      "sys": {
                        "space": {
                          "sys": {
                            "type": "Link",
                            "linkType": "Space",
                            "id": "i0awqvhf3ypo"
                          }
                        },
                        "type": "Asset",
                        "id": "7zNSJoHvXYOYeFOR3meTbT",
                        "revision": 1,
                        "createdAt": "2021-02-05T21:01:14.652Z",
                        "updatedAt": "2021-02-05T21:01:25.900Z",
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
                        "title": "FOURTWENTY-5",
                        "file": {
                          "url": "//images.ctfassets.net/i0awqvhf3ypo/7zNSJoHvXYOYeFOR3meTbT/c3d6efc74c91fb020707ffc3a3400c52/FOURTWENTY-5.jpg",
                          "details": {
                            "size": 655881,
                            "image": {
                              "width": 2000,
                              "height": 1500
                            }
                          },
                          "fileName": "FOURTWENTY-5.jpg",
                          "contentType": "image/jpeg"
                        }
                      }
                    }
                  }
                }
              ],
              "containsGap": true
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
              "id": "MJP3BlthcO9bRKCWgQoNQ",
              "contentType": {
                "sys": {
                  "type": "Link",
                  "linkType": "ContentType",
                  "id": "contentField"
                }
              },
              "revision": 2,
              "createdAt": "2021-02-05T21:01:53.449Z",
              "updatedAt": "2021-02-06T03:14:50.155Z",
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
              "type": "media-only",
              "media": [
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
                    "id": "4mPwPiD3t9rC5PoPhrBNfs",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 2,
                    "createdAt": "2021-02-05T21:02:03.338Z",
                    "updatedAt": "2021-02-06T03:11:41.527Z",
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
                    "size": "10",
                    "media": {
                      "sys": {
                        "space": {
                          "sys": {
                            "type": "Link",
                            "linkType": "Space",
                            "id": "i0awqvhf3ypo"
                          }
                        },
                        "type": "Asset",
                        "id": "3xeVaPUiNhssRSj1WeOKYW",
                        "revision": 1,
                        "createdAt": "2021-02-05T21:02:10.369Z",
                        "updatedAt": "2021-02-05T21:02:21.173Z",
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
                        "title": "FOURTWENTY-7",
                        "file": {
                          "url": "//images.ctfassets.net/i0awqvhf3ypo/3xeVaPUiNhssRSj1WeOKYW/c31209bd178c394a5409bd6654af2645/FOURTWENTY-7.jpg",
                          "details": {
                            "size": 402743,
                            "image": {
                              "width": 2492,
                              "height": 1474
                            }
                          },
                          "fileName": "FOURTWENTY-7.jpg",
                          "contentType": "image/jpeg"
                        }
                      }
                    }
                  }
                }
              ],
              "containsGap": true
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
              "id": "6XMPZ46azBE7SFWvl3Mjb",
              "contentType": {
                "sys": {
                  "type": "Link",
                  "linkType": "ContentType",
                  "id": "contentField"
                }
              },
              "revision": 2,
              "createdAt": "2021-02-05T21:02:39.038Z",
              "updatedAt": "2021-02-06T03:14:58.199Z",
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
              "type": "media-only",
              "media": [
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
                    "id": "3qLtikInwr8L2rqDFcO2Q4",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 1,
                    "createdAt": "2021-02-05T21:02:47.913Z",
                    "updatedAt": "2021-02-05T21:03:30.993Z",
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
                    "size": "3",
                    "mediaLink": "https://player.vimeo.com/video/417911198?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0"
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
                    "id": "019gFX8DDNaQaFTGhtxVTY",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 1,
                    "createdAt": "2021-02-05T21:03:36.735Z",
                    "updatedAt": "2021-02-05T21:03:51.446Z",
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
                    "size": "3",
                    "mediaLink": "https://player.vimeo.com/video/417911212?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0"
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
                    "id": "7vvGEx2VvJykq3eVbu4hOR",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 1,
                    "createdAt": "2021-02-05T21:03:55.146Z",
                    "updatedAt": "2021-02-05T21:04:04.497Z",
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
                    "size": "3",
                    "mediaLink": "https://player.vimeo.com/video/417911944?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0"
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
                    "id": "5qRoI0nWCuXGIfBLaq3xoC",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 1,
                    "createdAt": "2021-02-05T21:04:09.191Z",
                    "updatedAt": "2021-02-05T21:04:19.838Z",
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
                    "size": "3",
                    "mediaLink": "https://player.vimeo.com/video/417911952?autoplay=1&loop=1&autopause=0&title=0&byline=0&portrait=0"
                  }
                }
              ],
              "containsGap": false
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
              "space": {
                "sys": {
                  "type": "Link",
                  "linkType": "Space",
                  "id": "i0awqvhf3ypo"
                }
              },
              "type": "Entry",
              "id": "2gHbbaPTe4VWLd2VZBx1MA",
              "contentType": {
                "sys": {
                  "type": "Link",
                  "linkType": "ContentType",
                  "id": "contentField"
                }
              },
              "revision": 2,
              "createdAt": "2021-02-06T03:04:11.136Z",
              "updatedAt": "2021-02-06T03:15:20.746Z",
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
              "type": "media-only",
              "title": "DESIGN SYSTEM",
              "media": [
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
                    "id": "5aVSCBsrSlnDGVoLw0DBKe",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 1,
                    "createdAt": "2021-02-06T03:04:33.689Z",
                    "updatedAt": "2021-02-06T03:05:29.863Z",
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
                    "size": "5",
                    "media": {
                      "sys": {
                        "space": {
                          "sys": {
                            "type": "Link",
                            "linkType": "Space",
                            "id": "i0awqvhf3ypo"
                          }
                        },
                        "type": "Asset",
                        "id": "8xHknSeGIBczLGV2iVpjz",
                        "revision": 1,
                        "createdAt": "2021-02-06T03:04:57.887Z",
                        "updatedAt": "2021-02-06T03:05:18.715Z",
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
                        "title": "Direction-02",
                        "file": {
                          "url": "//images.ctfassets.net/i0awqvhf3ypo/8xHknSeGIBczLGV2iVpjz/99b186240ad160bfe471ea6f8de5d372/Direction-02.jpg",
                          "details": {
                            "size": 110335,
                            "image": {
                              "width": 1920,
                              "height": 1081
                            }
                          },
                          "fileName": "Direction-02.jpg",
                          "contentType": "image/jpeg"
                        }
                      }
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
                    "type": "Entry",
                    "id": "4iUuZFpFXAh1INH7lD8lHm",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 1,
                    "createdAt": "2021-02-06T03:06:06.093Z",
                    "updatedAt": "2021-02-06T03:06:31.784Z",
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
                    "size": "5",
                    "media": {
                      "sys": {
                        "space": {
                          "sys": {
                            "type": "Link",
                            "linkType": "Space",
                            "id": "i0awqvhf3ypo"
                          }
                        },
                        "type": "Asset",
                        "id": "4O40Y4Ug80A2T9JODG7MQd",
                        "revision": 1,
                        "createdAt": "2021-02-06T03:06:11.342Z",
                        "updatedAt": "2021-02-06T03:06:28.112Z",
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
                        "title": "Direction-04",
                        "file": {
                          "url": "//images.ctfassets.net/i0awqvhf3ypo/4O40Y4Ug80A2T9JODG7MQd/8c45ceb52f82dca6592431c458f44203/Direction-04.jpg",
                          "details": {
                            "size": 104731,
                            "image": {
                              "width": 1920,
                              "height": 1081
                            }
                          },
                          "fileName": "Direction-04.jpg",
                          "contentType": "image/jpeg"
                        }
                      }
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
                    "type": "Entry",
                    "id": "4taeUJnES72f5HinewrHFd",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 1,
                    "createdAt": "2021-02-06T03:06:49.428Z",
                    "updatedAt": "2021-02-06T03:07:18.810Z",
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
                    "size": "10",
                    "media": {
                      "sys": {
                        "space": {
                          "sys": {
                            "type": "Link",
                            "linkType": "Space",
                            "id": "i0awqvhf3ypo"
                          }
                        },
                        "type": "Asset",
                        "id": "4nieq9orFASBfXsXJ1DcYH",
                        "revision": 1,
                        "createdAt": "2021-02-06T03:06:57.121Z",
                        "updatedAt": "2021-02-06T03:07:13.447Z",
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
                        "title": "Direction-05",
                        "file": {
                          "url": "//images.ctfassets.net/i0awqvhf3ypo/4nieq9orFASBfXsXJ1DcYH/4cbbca1d677956b3856e312412db2661/Direction-05.jpg",
                          "details": {
                            "size": 174497,
                            "image": {
                              "width": 1920,
                              "height": 1081
                            }
                          },
                          "fileName": "Direction-05.jpg",
                          "contentType": "image/jpeg"
                        }
                      }
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
                    "type": "Entry",
                    "id": "ozGvNmEWYjxKYMkdwXKVe",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 1,
                    "createdAt": "2021-02-06T03:07:25.209Z",
                    "updatedAt": "2021-02-06T03:07:47.959Z",
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
                    "size": "5",
                    "media": {
                      "sys": {
                        "space": {
                          "sys": {
                            "type": "Link",
                            "linkType": "Space",
                            "id": "i0awqvhf3ypo"
                          }
                        },
                        "type": "Asset",
                        "id": "7z0dFrGfJdbIDTM2cYx4DM",
                        "revision": 1,
                        "createdAt": "2021-02-06T03:07:37.119Z",
                        "updatedAt": "2021-02-06T03:07:44.131Z",
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
                        "title": "Direction-06",
                        "file": {
                          "url": "//images.ctfassets.net/i0awqvhf3ypo/7z0dFrGfJdbIDTM2cYx4DM/833033c79990d93e1d296438f7041f91/Direction-06.jpg",
                          "details": {
                            "size": 729159,
                            "image": {
                              "width": 1920,
                              "height": 1081
                            }
                          },
                          "fileName": "Direction-06.jpg",
                          "contentType": "image/jpeg"
                        }
                      }
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
                    "type": "Entry",
                    "id": "1TCw6O36rl0izp3LXjpWkJ",
                    "contentType": {
                      "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "customizedMedia"
                      }
                    },
                    "revision": 1,
                    "createdAt": "2021-02-06T03:07:54.688Z",
                    "updatedAt": "2021-02-06T03:08:10.947Z",
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
                    "size": "5",
                    "media": {
                      "sys": {
                        "space": {
                          "sys": {
                            "type": "Link",
                            "linkType": "Space",
                            "id": "i0awqvhf3ypo"
                          }
                        },
                        "type": "Asset",
                        "id": "3QccYC9UEGYYWmHrxINoGI",
                        "revision": 1,
                        "createdAt": "2021-02-06T03:08:00.362Z",
                        "updatedAt": "2021-02-06T03:08:07.899Z",
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
                        "title": "Direction-07",
                        "file": {
                          "url": "//images.ctfassets.net/i0awqvhf3ypo/3QccYC9UEGYYWmHrxINoGI/8227814053f305d71993d30b236e1fab/Direction-07.jpg",
                          "details": {
                            "size": 157188,
                            "image": {
                              "width": 1921,
                              "height": 1080
                            }
                          },
                          "fileName": "Direction-07.jpg",
                          "contentType": "image/jpeg"
                        }
                      }
                    }
                  }
                }
              ],
              "containsGap": true
            }
          }
        ],
        "isRequestedViaEmail": false
      }
    }
  ]
}
