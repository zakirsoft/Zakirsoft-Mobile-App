import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import {COLORS, images, SIZES, FONTS} from '../constants';
import {Screen, ServicesCart} from '../Styles/Screen';
const Services = () => {
  const height = SIZES.height / 25;
  const width = SIZES.width / 10;

  return (
    <>
      <Header />
      <Screen>
        <ServicesCart>
          <View
            style={{
              flexDirection: 'column',
              paddingRight: 18,
              paddingLeft: 18,
            }}>
            <View style={{paddingTop: 20}}>
              <Image source={images.s_frontend} resizeMode={'contain'} />
            </View>
            <View style={{paddingTop: 16}}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: SIZES.nTitle,
                  fontWeight: 'bold',
                }}>
                Frontend Development
              </Text>
            </View>
            <View style={{paddingTop: 8, marginBottom: 15}}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: SIZES.nBodyText,
                  color: COLORS.secondary,
                  lineHeight: SIZES.nMinimulLineheight + 2,
                }}>
                Front-end web development is the practice of converting data to
                a graphical interface, through the use of HTML, CSS, and
                JavaScript, so that users can view and interact with that data.
                A front-end web developer is responsible for implementing visual
                elements that users see and interact with in a web application.
              </Text>
            </View>
          </View>
        </ServicesCart>
        <ServicesCart>
          <View
            style={{
              flexDirection: 'column',
              paddingRight: 18,
              paddingLeft: 18,
            }}>
            <View style={{paddingTop: 20}}>
              <Image
                source={images.s_backend}
                resizeMode={'contain'}
                // style={{height: 90, width: 90}}
              />
            </View>
            <View style={{paddingTop: 16, marginBottom: 10}}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: SIZES.nTitle,
                  fontWeight: 'bold',
                }}>
                Backend Development
              </Text>
            </View>
            <View style={{paddingTop: 8, marginBottom: 15}}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: SIZES.nBodyText,
                  color: COLORS.secondary,
                  lineHeight: SIZES.nMinimulLineheight + 2,
                }}>
                A back-end web developer is responsible for server-side web
                application logic and integration of the work front-end web
                developers do. Back-end developers usually write web services
                and APIs used by front-end developers and mobile application
                developers.
              </Text>
            </View>
          </View>
        </ServicesCart>
        <ServicesCart style={{}}>
          <View
            style={{
              flexDirection: 'column',
              paddingRight: '5%',
              paddingLeft: '5%',
            }}>
            <View style={{paddingTop: 20}}>
              <Image source={images.s_spa} resizeMode={'contain'} style={{}} />
            </View>
            <View style={{paddingTop: 16}}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: SIZES.nTitle,
                  fontWeight: 'bold',
                }}>
                SPA Development
              </Text>
            </View>
            <View style={{paddingTop: 8, marginBottom: 10}}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: SIZES.nBodyText,
                  color: COLORS.secondary,
                  lineHeight: SIZES.nMinimulLineheight,
                }}>
                A single-page application (SPA) is a web Application or website
                that interacts with the user by dynamically rewriting the
                current web page with new data from the web server, instead of
                the default method of the browser loading entire new pages. The
                goal is faster transitions that make the website feel more like
                a native app.
              </Text>
            </View>
          </View>
        </ServicesCart>
        <ServicesCart style={{}}>
          <View
            style={{
              flexDirection: 'column',
              paddingRight: 15,
              paddingLeft: 15,
            }}>
            <View style={{paddingTop: 20}}>
              <Image source={images.s_pwa} resizeMode={'contain'} style={{}} />
            </View>
            <View style={{paddingTop: 16}}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: SIZES.nTitle,
                  fontWeight: 'bold',
                }}>
                PWA Development
              </Text>
            </View>
            <View style={{paddingTop: 8, marginBottom: 15}}>
              <Text
                style={{
                  fontFamily: 'DMSans-Regular',
                  fontSize: SIZES.nBodyText,
                  color: COLORS.secondary,
                  lineHeight: SIZES.nMinimulLineheight,
                }}>
                Progressive web apps (PWA) has in combination of the best
                features of the site and mobile application built-in it. In
                practice, this means that such a site can be accessed by users
                as well as the application and the most interesting thing is an
                Internet connection is not necessary for this. The installation
                process can be done in one click directly from the browser.
              </Text>
            </View>
          </View>
        </ServicesCart>
        <View
          style={{
            marginTop: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: SIZES.nTitle,
              fontWeight: 'bold',
              // marginRight: 79,
              // marginLeft: 79,
            }}>
            Technology we use
          </Text>
        </View>
        {/* Tech We use */}
        <View style={{marginTop: 32, flexDirection: 'column'}}>
          <View
            style={{
              // height: 150,
              width: '100%',
              borderRadius: 10,
              backgroundColor: COLORS.white,
            }}>
            <Text
              style={{
                fontFamily: 'DMSans-Regular',
                fontSize: SIZES.nBodyText2,
                fontWeight: 'bold',
                paddingTop: '5%',
                paddingLeft: '5%',
              }}>
              UI/UX
            </Text>
            <View
              style={{
                width: 100,
                height: 2,
                marginTop: 8,
                backgroundColor: COLORS.primary,
              }}></View>

            <View
              style={{
                paddingRight: '5%',
                paddingLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: '5%',
                marginBottom: '5%',
              }}>
              {/* figma */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.figma}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />

                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Figma
                </Text>
              </View>
              {/* Adobe XD */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.Xd}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Adobe XD
                </Text>
              </View>
              {/* Illustrator */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.illustrator}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Illustrator
                </Text>
              </View>
              {/* Photoshop */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.photoshop}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Photoshop
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              borderRadius: 10,
              backgroundColor: COLORS.white,
              marginTop: '5%',
            }}>
            <Text
              style={{
                fontFamily: 'DMSans-Regular',
                fontSize: SIZES.nBodyText2,
                fontWeight: 'bold',
                paddingTop: '5%',
                paddingLeft: '5%',
              }}>
              FRONT-END
            </Text>
            <View
              style={{
                width: 120,
                height: 2.1,
                marginTop: 8,
                backgroundColor: COLORS.primary,
              }}></View>

            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  paddingRight: '5%',
                  paddingLeft: '5%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: '5%',
                  marginBottom: '5%',
                }}>
                {/* Javascript */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.Javascript}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />

                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    JS
                  </Text>
                </View>
                {/* Vue  */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.Vuejs}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    Vue js
                  </Text>
                </View>
                {/* Nuxtjs */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.Nuxtjs}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    Nuxt js
                  </Text>
                </View>
                {/* Bootstrap5 */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.Bootstrap}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    Bootstrap
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingRight: '5%',
                  paddingLeft: '5%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: '5%',
                  marginBottom: '5%',
                }}>
                {/* sass */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.sass}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />

                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    Sass
                  </Text>
                </View>
                {/* CSS3  */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.CSS3}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    CSS3
                  </Text>
                </View>
                {/* Webpack */}

                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.webpack}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    Webpack
                  </Text>
                </View>
                {/* JQuery */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.jQuery}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    jQuery
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingRight: '5%',
                  paddingLeft: '5%',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingTop: '5%',
                  marginBottom: '5%',
                }}>
                {/* NPM */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '10%',
                  }}>
                  <Image
                    source={images.npm}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />

                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    npm
                  </Text>
                </View>
                {/* YARN */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.yarn}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />

                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    Yarn
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              borderRadius: 10,
              backgroundColor: COLORS.white,
              marginTop: '5%',
            }}>
            <Text
              style={{
                fontFamily: 'DMSans-Regular',
                fontSize: SIZES.nBodyText2,
                fontWeight: 'bold',
                paddingTop: '5%',
                paddingLeft: '5%',
              }}>
              BACK-END
            </Text>
            <View
              style={{
                width: 120,
                height: 2.1,
                marginTop: 8,
                backgroundColor: COLORS.primary,
              }}></View>

            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  paddingRight: '5%',
                  paddingLeft: '5%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: '5%',
                  marginBottom: '5%',
                }}>
                {/* Algolia */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.Algolia}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />

                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    Algolia
                  </Text>
                </View>
                {/* Elasticsearch  */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.Elasticsearch}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    Elasticsearch
                  </Text>
                </View>
                {/* LARAVEL */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.laravel}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    Laravel
                  </Text>
                </View>
                {/* Liveware */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.Liveware}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    Liveware
                  </Text>
                </View>
              </View>

              <View
                style={{
                  paddingRight: '5%',
                  paddingLeft: '5%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: '5%',
                  marginBottom: '5%',
                }}>
                {/* mySql */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.mysql}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />

                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    Mysql
                  </Text>
                </View>
                {/* php  */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.php}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    php
                  </Text>
                </View>
                {/* PHP UNIT */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.PHPUnit}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    phpUnit
                  </Text>
                </View>
                {/* redis */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={images.redis}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    Redis
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingRight: '5%',
                  paddingLeft: '5%',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingTop: '5%',
                  marginBottom: '5%',
                }}>
                {/* REST API */}
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '5%',
                  }}>
                  <Image
                    source={images.RestAPI}
                    resizeMode={'contain'}
                    style={{
                      height: height,
                      width: width,
                    }}
                  />

                  <Text
                    style={{
                      fontFamily: 'DMSans-Regular',
                      fontSize: SIZES.nBodyText,
                      paddingTop: '2%',
                    }}>
                    Rest API
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderRadius: 10,
            backgroundColor: COLORS.white,
            marginTop: '5%',
          }}>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: SIZES.nBodyText2,
              fontWeight: 'bold',
              paddingTop: '5%',
              paddingLeft: '5%',
            }}>
            MOBILE
          </Text>
          <View
            style={{
              width: 120,
              height: 2.1,
              marginTop: 8,
              backgroundColor: COLORS.primary,
            }}></View>

          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                paddingRight: '5%',
                paddingLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: '5%',
                marginBottom: '5%',
              }}>
              {/* React */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.reactNative}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />

                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  React Native
                </Text>
              </View>

              {/* Expo  */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.expo}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Expo
                </Text>
              </View>

              {/* React navigation */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.ReactNavigation}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  React Navigation
                </Text>
              </View>
              {/* Aws */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.aws}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  AWS
                </Text>
              </View>
            </View>

            <View
              style={{
                paddingRight: '5%',
                paddingLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingTop: '5%',
                marginBottom: '5%',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '5%',
                }}>
                <Image
                  source={images.firebase}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />

                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Firebase
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.GoogleAPIs}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Google API's
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderRadius: 10,
            backgroundColor: COLORS.white,
            marginTop: '5%',
          }}>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: SIZES.nBodyText2,
              fontWeight: 'bold',
              paddingTop: '5%',
              paddingLeft: '5%',
            }}>
            SERVER
          </Text>
          <View
            style={{
              width: 120,
              height: 2.1,
              marginTop: 8,
              backgroundColor: COLORS.primary,
            }}></View>

          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                paddingRight: '5%',
                paddingLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: '5%',
                marginBottom: '5%',
              }}>
              {/* React */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.docker}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />

                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Docker
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.netlify}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Netlify
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.ubuntu}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Ubuntu
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.forge}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Forge
                </Text>
              </View>
            </View>

            <View
              style={{
                paddingRight: '5%',
                paddingLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingTop: '5%',
                marginBottom: '5%',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '5%',
                }}>
                <Image
                  source={images.digitalocean}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />

                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Digital Ocean
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.nginx}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Nginx
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderRadius: 10,
            backgroundColor: COLORS.white,
            marginTop: '5%',
          }}>
          <Text
            style={{
              fontFamily: 'DMSans-Regular',
              fontSize: SIZES.nBodyText2,
              fontWeight: 'bold',
              paddingTop: '5%',
              paddingLeft: '5%',
            }}>
            OTHERS
          </Text>
          <View
            style={{
              width: 120,
              height: 2.1,
              marginTop: 8,
              backgroundColor: COLORS.primary,
            }}></View>

          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                paddingRight: '5%',
                paddingLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: '5%',
                marginBottom: '5%',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.github}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />

                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Github
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.git}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Git
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.googleDrive}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Google Drive
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.mega}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Mega
                </Text>
              </View>
            </View>

            <View
              style={{
                paddingRight: '5%',
                paddingLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: '5%',
                marginBottom: '5%',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.notion}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />

                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Notion
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.slack}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Slack
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.terminal}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Terminal
                </Text>
              </View>
              {/* Trello */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.trello}
                  resizeMode={'contain'}
                  style={{
                    height: height,
                    width: width,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'DMSans-Regular',
                    fontSize: SIZES.nBodyText,
                    paddingTop: '2%',
                  }}>
                  Trello
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingRight: '5%',
                paddingLeft: '5%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingTop: '5%',
                marginBottom: '5%',
              }}></View>
          </View>
        </View>
        {/* ____________________________________adding extra space */}
        <View style={{height: 20}}></View>
      </Screen>
    </>
  );
};

export default Services;

const styles = StyleSheet.create({});
