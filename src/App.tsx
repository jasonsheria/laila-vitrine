import React, { Component, useState, useCallback, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import img from './images/isometric-e-learning-background-template.jpg'
import laila from './images/logo laila.png'
import pix from './images/pexels-pixabay-73910.jpg'
import pix2 from './images/pexels-shkrabaanthony-4348401.jpg'
import pix3 from './images/pexels-cottonbro-6686455.jpg'
import pix4 from './images/laila.png'
import pix6 from './images/vM1pGHgN.png'

import { useEffect } from 'react';

import { FaQuoteRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import people from "./data";
import { useTransition, animated } from '@react-spring/web';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { PiSpeakerHighDuotone } from "react-icons/pi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
declare module 'react' {
  export interface InputHTMLAttributes<T> {
    orient?: string;
  }
}
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

function App() {
  const [age, setAge] = React.useState("20");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [classN, setClassN] = useState("");

  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [volumebar, setVolumebar] = useState(true)
  const [showbody, setShowbody] = useState(false)
  const videoRef: any = useRef(null);

  const container: any = { visibility: "hidden" };
  const containers: any = { visibility: "visible" };
  const shower: any = { display: "none" };
  const changeVolume = () => {
    if (volumebar) {
      setVolumebar(false)
    } else {
      setVolumebar(true)

    }
  }
  const handlePlayPause = () => {

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };
  const handleDurationChange = () => {
    setDuration(videoRef.current.duration);
  };
  const handleVolumeChange = (event: any) => {
    setVolume(event.target.value);
    videoRef.current.volume = event.target.value;
  };
  const handleSeek = (event: any) => {
    videoRef.current.currentTime = event.target.value;
  };
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: 'rgb(34, 51, 102)',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: 'rgb(252, 252, 252)' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['LAILA', 'PLATEFORME', 'COMMUNITY']), 2000))
    ref.current.push(setTimeout(() => set(['LAILA', 'PLATEFORME']), 5000))
    ref.current.push(setTimeout(() => set(['LAILA', 'PLATEFORME', 'WORKSPACE']), 8000))
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setShowbody(true);
    }, 7000)

    // setInterval(() => {
    //   setTimeout(() => {
    //     nextPerson();
    //   }, 4500);
    // }, 4500);
    const d: any = document.getElementById("navtabs");

    window.addEventListener("scroll", () => {
      const topPos = d.offsetTop;

      if (window.scrollY > 550) {
        setClassN("sticky")
      } else {
        setClassN("")
      }


    });

    reset()
    return () => ref.current.forEach(clearTimeout);


  }, [])

  const checknumber = (number: any) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let numberPerson = index + 1;
      return checknumber(numberPerson);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let numberPerson = index - 1;
      return checknumber(numberPerson);
    });
  };

  const randomPerson = () => {
    let numberRandom = Math.floor(Math.random() * (people.length - 1));
    if (numberRandom === index) {
      numberRandom = numberRandom + 1;
    }
    console.log(numberRandom);
    return setIndex(numberRandom);
  };
  return (

    <div>
      <div className="App" style={{ position: "fixed", width: "100%", zIndex: 2 }}>
        <img src={img} alt='' style={{ width: "100%", height: "100vh" }} />
      </div>
      <div style={{ position: "relative", zIndex: 5, color: "black", top: "20vh" }}>
        <div style={{ minHeight: '15vh', justifyContent: "center", alignItems: "center" }}>

          <div className="main">

            <div>
              {transitions(({ innerHeight, ...rest }, item) => (
                <animated.div className="transitionsItem" style={rest} onClick={reset}>
                  <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                </animated.div>
              ))}
            </div>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 50

              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 2 // Animation duration
                }
              }}
              viewport={{ once: true }}
            >

              <video
                ref={videoRef}
                // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleDurationChange}
                style={{
                  width: "85%",
                  height: "100%",
                  marginTop: "3vw",
                  marginLeft: "11vw"
                }}
              />
              <div
                style={isPlaying ? container : containers}
                className='image-fond'>

              </div>
              <div className="containeres" >
                <label htmlFor="checkbox" className="first">
                  <div className="play_pause_icon play"></div>
                </label>
                <input type="checkbox" id='checkbox' className="inputs" onClick={handlePlayPause} />
              </div>
              <div className="controls">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleSeek}
                  // style={"visibility:"setVolumebar}

                  className='video'
                />
                <button
                  onClick={changeVolume}
                  style={{
                    background: "transparent",
                    border: "none",
                  }}
                >


                  <PiSpeakerHighDuotone
                    style={{
                      color: "white",
                      marginLeft: "22px",
                      fontSize: "21px",
                      position: "relative",
                      top: "-8px",
                    }} />
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  orient="vertical"
                  style={volumebar ? container : containers}
                  className="volume"

                />
              </div>
            </motion.div>

          </div>
          <motion.div className="two-button" initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            x: -50
          }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: {
                duration: 1 // Animation duration
              }
            }}
            viewport={{ once: true }}>
            <motion.button whileTap={{ scale: 0.85 }} className="w-btn btnZ" style={{
              background: " rgb(59, 41, 204)",
              color: "white"
            }}>View Our Services</motion.button>
            <motion.button whileTap={{ scale: 0.85 }} className="t-btn btnZ">Hire Us</motion.button>
          </motion.div>
          <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: " center", position: "absolute",
            left: "44%"
          }}
            onClick={() => window.scrollTo(0, 560)}>
            <FaAngleDown style={{ width: "2vw", height: "7vh", color: "white" }} className="fill1" />

            <FaAngleDown style={{ width: "3vw", height: "9vh", color: "white", marginTop: "-32px" }} className="fill2" />

          </div>

        </div>
        <div style={{ background: "white", backgroundImage: "url(https://imgpanda.com/upload/ib/2Tgg58L106.png", minHeight: "120vh", marginTop: "29vh", }}>
          <div>
            <div className={`${classN} navtabs`} id="navtabs" style={{

              transition: "all 1s"
            }}>
              <div>
                <div className="navtab" data-target="contact">
                  <img src={pix4} alt='' style={{ width: "100%", height: "7vh" }} />

                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="navtab active" data-target="home" onClick={() => window.scrollTo(0, 560)}>Home</div>
                <div className="navtab" data-target="about" onClick={() => window.scrollTo(0, 1100)}>Services</div>
                <div className="navtab" data-target="contact" onClick={() => window.scrollTo(0, 1940)}>About us</div>
                <div className="navtab" data-target="page4" onClick={() => window.scrollTo(0, 2740)}>Planing</div>
                <div className="navtab" data-target="page5" onClick={() => window.scrollTo(0, 3540)}>Registration</div>
                <div className="navtab" data-target="page6" onClick={() => window.scrollTo(0, 4440)}>Temoignages</div>
                <div className="navtab" data-target="page6" >Login</div>

                <div className="underline"></div>
              </div>


            </div>

          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignContent: 'center', margin: "5%" }}>
            <div style={{ maxWidth: "50%" }}>
              <div >

              </div>
              <motion.div
                style={{
                  height: "35%", width: "90%",
                  boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"

                }}
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  x: -50
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  transition: {
                    duration: 1 // Animation duration
                  }
                }}
                viewport={{ once: true }}
              >
                <img src={pix} alt="" style={{ width: "100%", height: "100%" }} />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  x: -50
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  transition: {
                    duration: 1.5 // Animation duration
                  }
                }}
                viewport={{ once: true }}
                style={{
                  height: "35%", width: "90%", position: "relative", top: "-15%", left: "10%",
                  boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"

                }}>
                <img src={pix2} alt="" style={{ width: "100%", height: "100%" }} />
              </motion.div>

            </div>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 50
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1 // Animation duration
                }
              }}
              viewport={{ once: true }}
              style={{ margin: "15px" }}>
              <h3 style={{ display: "flex", justifyContent: "center", fontWeight: '600', marginBottom: "15px" }}> Fonctionnalité de la plateforme </h3>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>

              <p></p>
            </motion.div>
          </div>
          <div style={{ marginTop: "-24%", marginLeft: "8%", marginRight: "8%" }}>

            <div className="container">
              <h1>Nos Services</h1>
              <div className="rows">
                <motion.div initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left

                  scale: 0
                }}
                  whileInView={{
                    opacity: 1,

                    transition: {
                      duration: 1.5 // Animation duration
                    },
                    scale: 1
                  }}
                  viewport={{ once: true }} className="service">
                  <i className="fas fa-laptop-code"></i>
                  <h2>Web Design</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    quae?
                  </p>
                </motion.div>
                <motion.div initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left

                  scale: 0
                }}
                  whileInView={{
                    opacity: 1,

                    transition: {
                      duration: 1.5 // Animation duration
                    },
                    scale: 1
                  }}
                  viewport={{ once: true }} className="service">
                  <i className="fas fa-chart-line"></i>
                  <h2>Marketing</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    quae?
                  </p>
                </motion.div>

                <motion.div initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left

                  scale: 0
                }}
                  whileInView={{
                    opacity: 1,

                    transition: {
                      duration: 1.5 // Animation duration
                    },
                    scale: 1
                  }}
                  viewport={{ once: true }} className="service">
                  <i className="fas fa-database"></i>
                  <h2>Data Analysis</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    quae?
                  </p>
                </motion.div>
                <motion.div initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left

                  scale: 0
                }}
                  whileInView={{
                    opacity: 1,

                    transition: {
                      duration: 1.5 // Animation duration
                    },
                    scale: 1
                  }}
                  viewport={{ once: true }} className="service">
                  <i className="fas fa-mobile-alt"></i>
                  <h2>App Development</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    quae?
                  </p>
                </motion.div>
                <motion.div initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left

                  scale: 0
                }}
                  whileInView={{
                    opacity: 1,

                    transition: {
                      duration: 1.5 // Animation duration
                    },
                    scale: 1
                  }}
                  viewport={{ once: true }} className="service">
                  <i className="fas fa-file-invoice"></i>
                  <h2>Accounting</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    quae?
                  </p>
                </motion.div>
                <motion.div initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left

                  scale: 0
                }}
                  whileInView={{
                    opacity: 1,

                    transition: {
                      duration: 1.5 // Animation duration
                    },
                    scale: 1
                  }}
                  viewport={{ once: true }} className="service">
                  <i className="fas fa-money-check-alt"></i>
                  <h2>Payroll</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    quae?
                  </p>
                </motion.div>
                <motion.div initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left

                  scale: 0
                }}
                  whileInView={{
                    opacity: 1,

                    transition: {
                      duration: 1.5 // Animation duration
                    },
                    scale: 1
                  }}
                  viewport={{ once: true }} className="service">
                  <i className="fas fa-network-wired"></i>
                  <h2>Networking</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    quae?
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div style={{ margin: "5%" }}>
            <div style={{ backgroundColor: "white" }}>
              <h1 style={{ textAlign: "center" }}>Ours Teams</h1>

              {/* <div style={{ display: "flex", justifyContent: "space-between", alignContent: 'center', marginLeft: "10%", marginRight: "10%" }}>

                <div style={{ maxWidth: "40%" }}>
                  <h3 style={{ display: "flex", justifyContent: "center", fontWeight: '400', marginBottom: "15px", marginTop: "85px" }}> Temoignages 1 </h3>
                  <p style={{ fontSize: "0.75rem" }}>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                  </p>
                </div>
                <div>
                  <div
                    style={{
                      height: "60%", width: "90%",
                      boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                      margin: "5%"
                    }}
                  >
                    <img src={pix} alt="" style={{ width: "100%", height: "100%" }} />

                  </div>
                </div>

              </div> */}

              <main>
                <motion.div
                  initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    y: 50
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0, // Slide in to its original position
                    transition: {
                      duration: 1.5 // Animation duration
                    }
                  }}
                  viewport={{ once: true }} className='sections'>

                  <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                  </button>
                  <article className="review">
                    <div className="img-container">
                      <img src={image} alt={name} className="person-img" />
                      <span className="quote-icon">
                        <FaQuoteRight />
                      </span>
                    </div>

                    <h4 className="author">{name}</h4>
                    <p className="job">{job}</p>
                    <p className="info">{text}</p>

                    <div className="button-container">



                    </div>

                    <button className="random-btn" onClick={randomPerson}>
                      surprise me
                    </button>
                  </article>

                  <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                  </button>
                </motion.div >
              </main>

            </div>




            <h3 className="intro fw-bold text-center">Important experience of Laila plateforme</h3>
            <div className="container pt-5" style={{
              paddingLeft: "6%",
              paddingRight: "6%"
            }}>
              <div className="main-timeline">

                <div className="timeline-item d-flex flex-row flex-wrap justify-content-center align-items-center">
                  <motion.div initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: -50
                  }}
                    whileInView={{
                      opacity: 1,
                      x: 0, // Slide in to its original position
                      transition: {
                        duration: 1.5 // Animation duration
                      }
                    }}
                    viewport={{ once: true }} className="date-content order_1b">
                    <div className="date-outer">
                      <span className="date">
                        <p className="year pt-2">1991</p>
                      </span>
                    </div>
                  </motion.div>
                  <div className="icon order_2b"></div>
                  <motion.div initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: 50
                  }}
                    whileInView={{
                      opacity: 1,
                      x: 0, // Slide in to its original position
                      transition: {
                        duration: 1.5 // Animation duration
                      }
                    }}
                    viewport={{ once: true }}
                    className="timeline-content order_3b col-md p-3">
                    <h5 className="title pt-4 fw-bold">The World Wide Web begins</h5>
                    <p className="description">
                      Tim Berners-Lee, invents the “World Wide Web” as an easy way to share information. Though we often use the “Internet” and the “Web” interchangeably, they don’t actually refer to the same thing. The Internet hosts the Web, which was Berners-Lee’s breakthrough.
                    </p>
                  </motion.div>
                </div>

                <div className="timeline-item d-flex flex-row flex-wrap justify-content-center align-items-center">
                  <motion.div initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    y: 50
                  }}
                    whileInView={{
                      opacity: 1,
                      y: 0, // Slide in to its original position
                      transition: {
                        duration: 1.5 // Animation duration
                      }
                    }}
                    viewport={{ once: true }} className="date-content order_1">
                    <div className="date-outer">
                      <span className="date">
                        <p className="year pt-2">2001</p>
                      </span>
                    </div>
                  </motion.div>
                  <div className="icon order_2"></div>
                  <motion.div initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    y: 50
                  }}
                    whileInView={{
                      opacity: 1,
                      y: 0, // Slide in to its original position
                      transition: {
                        duration: 1.5 // Animation duration
                      }
                    }}
                    viewport={{ once: true }} className="timeline-content order_3 col-md p-3">
                    <h5 className="title pt-4 fw-bold">Wikipedia opens to the world</h5>
                    <p className="description">
                      The beginning of the end for encyclopedia salesmen. Wikipedia launched with its first edit on January 15, 2001, and fast became the go-to source of information. By 2006, the site had published over 1 million articles and other internet enretpreneurs followed shortly.
                    </p>
                  </motion.div>
                </div>

                <div className="timeline-item d-flex flex-row flex-wrap justify-content-center align-items-center">
                  <motion.div initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left

                    scale: 0
                  }}
                    whileInView={{
                      opacity: 1,

                      transition: {
                        duration: 1.5 // Animation duration
                      },
                      scale: 1
                    }}
                    viewport={{ once: true }} className="date-content order_1b">
                    <div className="date-outer">
                      <span className="date">
                        <p className="year pt-2">2022</p>
                      </span>
                    </div>
                  </motion.div>
                  <div className="icon order_2b"></div>
                  <motion.div initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left

                    scale: 0
                  }}
                    whileInView={{
                      opacity: 1,

                      transition: {
                        duration: 1.5 // Animation duration
                      },
                      scale: 1
                    }}
                    viewport={{ once: true }} className="timeline-content order_3b col-md p-3">
                    <h5 className="title pt-4 fw-bold">Internet users worldwide</h5>
                    <p className="description">
                      As of October 2022, there were 5.07 billion active internet users worldwide – almost 59.6 percent of the global population. Ask any of them what life would be like without the net and the answer will likely be either ‘unimaginable’ or ‘very, very boring’.
                    </p>
                  </motion.div>
                </div>

              </div>
            </div>


          </div>
          <div style={{ minHeight: "80vh", backgroundColor: "white", display: "flex", justifyContent: "space-between", alignContent: "center", padding: "10%", marginTop: "8vh" }}>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                y: 50
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Slide in to its original position
                transition: {
                  duration: 1.5 // Animation duration
                }
              }}
              viewport={{ once: true }} style={{
                backgroundColor: "white", borderRadius: "15px", minHeight: "50vh",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                display: "flex", padding: "15px", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "20px"
              }}>
              <h4 style={{ textTransform: "capitalize", fontWeight: "bold", textAlign: "center", color: "#204771" }}>Enregistrer vous sur la liste dattente</h4>
              <p style={{ textAlign: "center" }}>
                We’ll help you find the right products and pricing for your business.
              </p>
              <button onClick={handleClickOpen1} style={{ width: '21rem', background: "#007bff", border: "none", color: "white", padding: "15px", textTransform: "capitalize", fontWeight: "bold" }}> Formulaire </button>
              <Dialog
                open={open1}
                onClose={handleClose1}
                PaperProps={{
                  component: 'form',
                  onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries((formData as any).entries());
                    const email = formJson.email;
                    console.log(email);
                    handleClose();
                  },
                }}
              >
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please complete the required information here
                  </DialogContentText>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="email"
                    label="Nom complet"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "block", width: "95%", marginLeft: "5px" }}>
                      <InputLabel id="demo-simple-select-standard-labels">Nationalité</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-labels"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Nationalite"
                        style={{ width: "95%" }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </div>
                    <div style={{ display: "block", width: "95%" }}>
                      <InputLabel id="demo-simple-select-standard-labels">Sexe</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-labels"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Sexe"
                        style={{ width: "95%" }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={20}>Homme</MenuItem>
                        <MenuItem value={30}>Femme</MenuItem>
                      </Select>
                    </div>

                  </div>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="numero"
                    name="numero"
                    label="Numero Tel"
                    type="number"
                    fullWidth
                    variant="standard"
                  />
                  <div>
                    <FormControl sx={{ m: 1 }} variant="standard">
                      <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
                      <BootstrapInput id="demo-customized-textbox" />
                    </FormControl>
                    <FormControl sx={{ m: 1 }} variant="standard">
                      <InputLabel id="demo-customized-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={age}
                        // onChange={handleChange}
                        input={<BootstrapInput />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1 }} variant="standard">

                      <InputLabel htmlFor="demo-customized-select-native">Jour</InputLabel>
                      <NativeSelect
                        id="demo-customized-select-native"
                        value={age}
                        // onChange={handleChange}
                        input={<BootstrapInput />}
                      >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </NativeSelect>
                    </FormControl>
                  </div>

                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="message"
                    name="email"
                    label="Secteur d'Activité"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                  <div style={{ display: "flex" }}>
                    <div style={{ display: "block", width: "95%", marginLeft: "5px" }}>
                      <InputLabel id="demo-simple-select-standard-labels">Activité</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-labels"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Activité"
                        style={{ width: "95%" }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>

                        <MenuItem value={20}>oui</MenuItem>
                        <MenuItem value={30}>non</MenuItem>
                      </Select>
                    </div>


                  </div>

                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose1}>Cancel</Button>
                  <Button type="submit">Subscribe</Button>
                </DialogActions>
              </Dialog>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                y: 50
              }}
              whileInView={{
                opacity: 1,
                y: 0, // Slide in to its original position
                transition: {
                  duration: 1.5 // Animation duration
                }
              }}
              viewport={{ once: true }} style={{
                backgroundColor: "white", borderRadius: "15px", minHeight: "50vh",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                display: "flex", padding: "15px", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "20px"
              }}>
              <h4 style={{ textTransform: "capitalize", fontWeight: "bold", textAlign: "center", color: "#204771" }}>Nous envoyer vos suggestions et commentaires</h4>
              <p style={{ textAlign: "center" }}>
                We’ll help you find the right products and pricing for your business.
              </p>
              <button onClick={handleClickOpen} style={{ width: '21rem', background: "#007bff", border: "none", color: "white", padding: "15px", textTransform: "capitalize", fontWeight: "bold" }}> Contact </button>
              <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                  component: 'form',
                  onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries((formData as any).entries());
                    const email = formJson.email;
                    console.log(email);
                    handleClose();
                  },
                }}
              >
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="message"
                    name="email"
                    label="messages"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit">Subscribe</Button>
                </DialogActions>
              </Dialog>
            </motion.div>
          </div>
          <div style={{ backgroundColor: "rgba(13, 41, 83, 0.54)", minHeight: "88vh", justifyContent: "center", alignContent: "center", padding: "10%" }}>
            <div className="container">
              <h1 style={{ color: "white" }}>Temoignages</h1>

            </div>
            <MDBCarousel showControls showIndicators>
              <MDBCarouselItem itemId={1} >
                <div className='carousss'>
                  <div className="comp" style={{ background: "black" }} >
                    <video
                      ref={videoRef}
                      // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                      onTimeUpdate={handleTimeUpdate}
                      onLoadedMetadata={handleDurationChange}
                      style={{
                        width: "100%",
                        height: "100%",

                      }}
                      controls
                    />
                  </div>
                  <div className="comp" style={{ width: "50%", padding: "15px", justifyContent: "left" }}>
                    <blockquote className="blockquote">
                      <p className="mb-0" style={{ fontSize: "1rem" }}>
                        Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.
                      </p>
                      <footer className="blockquotes">
                        Steve Jobs <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>

              </MDBCarouselItem>
              <MDBCarouselItem itemId={2} >
                <div className='carousss'>
                  <div className="comp" style={{ background: "black" }} >
                    <video
                      ref={videoRef}
                      // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                      onTimeUpdate={handleTimeUpdate}
                      onLoadedMetadata={handleDurationChange}
                      style={{
                        width: "100%",
                        height: "100%",

                      }}
                      controls
                    />
                  </div>
                  <div className="comp" style={{ width: "50%", padding: "15px", justifyContent: "left" }}>
                    <blockquote className="blockquote">
                      <p className="mb-0" style={{ fontSize: "1rem" }}>
                        Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.
                      </p>
                      <footer className="blockquotes">
                        Steve Jobs <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>

              </MDBCarouselItem>
              <MDBCarouselItem itemId={3}>
                <div className='carousss'>
                  <div className="comp" style={{ background: "black" }} >
                    <video
                      ref={videoRef}
                      // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                      onTimeUpdate={handleTimeUpdate}
                      onLoadedMetadata={handleDurationChange}
                      style={{
                        width: "100%",
                        height: "100%",

                      }}
                      controls
                    />
                  </div>
                  <div className="comp" style={{ width: "50%", padding: "15px", justifyContent: "left" }}>
                    <blockquote className="blockquote">
                      <p className="mb-0" style={{ fontSize: "1rem" }}>
                        Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.
                      </p>
                      <footer className="blockquotes">
                        Steve Jobs <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </MDBCarouselItem>
            </MDBCarousel>
          </div>

        </div>
        <footer className="section bg-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="">
                  <h6 className="footer-heading text-uppercase text-white">Information</h6>
                  <ul className="list-unstyled footer-link mt-4">
                    <li><a href="">Pages</a></li>
                    <li><a href="">Our Team</a></li>
                    <li><a href="">Feuchers</a></li>
                    <li><a href="">Pricing</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="">
                  <h6 className="footer-heading text-uppercase text-white">Ressources</h6>
                  <ul className="list-unstyled footer-link mt-4">
                    <li><a href="">Monitoring Grader </a></li>
                    <li><a href="">Video Tutorial</a></li>
                    <li><a href="">Term &amp; Service</a></li>
                    <li><a href="">Zeeko API</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="">
                  <h6 className="footer-heading text-uppercase text-white">Help</h6>
                  <ul className="list-unstyled footer-link mt-4">
                    <li><a href="">Sign Up </a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Terms of Services</a></li>
                    <li><a href="">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="">
                  <h6 className="footer-heading text-uppercase text-white">Contact Us</h6>
                  <p className="contact-info mt-4">Contact us if need help withanything</p>
                  <p className="contact-info">+01 123-456-7890</p>
                  <div className="mt-5">
                    <ul className="list-inline">
                      <li className="list-inline-item"><a href="#"><i className="fab facebook footer-social-icon fa-facebook-f"></i></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fab twitter footer-social-icon fa-twitter"></i></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fab google footer-social-icon fa-google"></i></a></li>
                      <li className="list-inline-item"><a href="#"><i className="fab apple footer-social-icon fa-apple"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="text-center mt-5">
            <p className="footer-alt mb-0 f-14">2019 © Anup, All Rights Reserved</p>
          </div>
        </footer>
      </div>
      <main className='mains' style={showbody ? shower : containers}>
        <svg className="ap" viewBox="0 0 128 256" width="128px" height="256px" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ap-grad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="hsl(223,90%,55%)" />
              <stop offset="100%" stop-color="hsl(253,90%,55%)" />
            </linearGradient>
            <linearGradient id="ap-grad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="hsl(193,90%,55%)" />
              <stop offset="50%" stop-color="hsl(223,90%,55%)" />
              <stop offset="100%" stop-color="hsl(253,90%,55%)" />
            </linearGradient>
          </defs>
          <circle className="ap__ring" r="56" cx="64" cy="192" fill="none" stroke="#ddd" stroke-width="16" stroke-linecap="round" />
          <circle className="ap__worm1" r="56" cx="64" cy="192" fill="none" stroke="url(#ap-grad1)" stroke-width="16" stroke-linecap="round" stroke-dasharray="87.96 263.89" />
          <path className="ap__worm2" d="M120,192A56,56,0,0,1,8,192C8,161.07,16,8,64,8S120,161.07,120,192Z" fill="none" stroke="url(#ap-grad2)" stroke-width="16" stroke-linecap="round" stroke-dasharray="87.96 494" />
        </svg>
      </main>

    </div>
  );
}

export default App;
