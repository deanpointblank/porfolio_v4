import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import './App.css'

import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { allReducers } from './Reducers/index';
import { Container, Row } from 'react-bootstrap';

import Menu from './Containers/Nav'
import Home from './Containers/Home'
import About from './Containers/About'
import Portfolio from './Containers/Portfolio'
import Blog from './Containers/Blog'
import PortifolioPage from './Containers/PortifolioPage';
import BlogPage from './Containers/BlogPage';
import NotFound from './Containers/NotFound';


const store = createStore(allReducers, compose(
  applyMiddleware(thunk),
  window.devToolExtension ? window.devToolExtension() : f => f
))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container fluid className={'d-flex flex-column h-100'}>
        <Particles className="full-screen position-1"
          params={{
            background: {
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
              opacity: 1
            },
            backgroundMask: {
              cover: {
                color: {
                  value: "#fff"
                },
                opacity: 1
              },
              enable: false
            },
            detectRetina: true,
            fpsLimit: 60,
            infection: {
              cure: false,
              delay: 0,
              enable: false,
              infections: 0,
              stages: []
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push"
                },
                onDiv: {
                  ids: [],
                  enable: false,
                  mode: [],
                  type: "circle"
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                  parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10
                  }
                },
                resize: true
              },
              modes: {
                attract: {
                  distance: 200,
                  duration: 0.4,
                  speed: 1
                },
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5
                  },
                  radius: 60
                },
                grab: {
                  distance: 400,
                  links: {
                    opacity: 1
                  }
                },
                push: {
                  quantity: 4
                },
                remove: {
                  quantity: 2
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  speed: 1
                },
                slow: {
                  factor: 3,
                  radius: 200
                },
                trail: {
                  delay: 1,
                  quantity: 1
                }
              }
            },
            particles: {
              collisions: {
                enable: false,
                mode: "bounce"
              },
              color: {
                value: "#ffffff",
                animation: {
                  enable: false,
                  speed: 1,
                  sync: true
                }
              },
              links: {
                blink: false,
                color: {
                  value: "#ffffff"
                },
                consent: false,
                distance: 150,
                enable: true,
                opacity: 0.4,
                shadow: {
                  blur: 5,
                  color: {
                    value: "#00ff00"
                  },
                  enable: false
                },
                triangles: {
                  enable: false
                },
                width: 1,
                warp: false
              },
              move: {
                angle: 90,
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200
                  }
                },
                direction: "none",
                enable: true,
                noise: {
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0
                    },
                    value: 0
                  },
                  enable: false
                },
                outMode: "out",
                random: false,
                speed: 2,
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: {
                    value: "#000000"
                  }
                },
                vibrate: false,
                warp: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                  factor: 1000
                },
                limit: 0,
                value: 100
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.1,
                  speed: 3,
                  sync: false
                },
                random: {
                  enable: true,
                  minimumValue: 1
                },
                value: 0.5
              },
              rotate: {
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false
                },
                direction: "clockwise",
                path: false,
                random: false,
                value: 0
              },
              shadow: {
                blur: 0,
                color: {
                  value: "#000000"
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0
                }
              },
              shape: {
                options: {
                  polygon: {
                    nb_sides: 5
                  },
                  star: {
                    nb_sides: 5
                  },
                  image: {
                    src: "https://cdn.matteobruni.it/images/particles/github.svg",
                    width: 100,
                    height: 100
                  },
                  images: {
                    src: "https://cdn.matteobruni.it/images/particles/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                type: "circle"
              },
              size: {
                animation: {
                  destroy: "none",
                  enable: true,
                  minimumValue: 0.1,
                  speed: 20,
                  startVaue: "max",
                  sync: false
                },
                random: {
                  enable: true,
                  minimumValue: 1
                },
                value: 10
              },
              stroke: {
                width: 0,
                color: {
                  value: "#000000",
                  animation: {
                    enable: false,
                    speed: 1,
                    sync: true
                  }
                }
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1
                }
              }
            },
            pauseOnBlur: true
          }}
        /> 
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/portfolio/:project' component={PortifolioPage} />
            <Route exact path='/blog/:blog' component={BlogPage} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
