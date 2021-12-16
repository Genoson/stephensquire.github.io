(this.webpackJsonpssquire_portfolio =
  this.webpackJsonpssquire_portfolio || []).push([
  [0],
  {
    13: function (e, t, i) {},
    14: function (e, t, i) {},
    16: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i(1),
        s = i.n(n),
        a = i(8),
        o = i.n(a),
        r = (i(13), i(14), i(4)),
        c = i(2),
        l = i(0),
        d = function () {
          return Object(l.jsx)("header", {
            children: Object(l.jsxs)("div", {
              id: "headerContents",
              children: [
                Object(l.jsx)("h1", {
                  id: "optionalTitle",
                  children: "Stephen Squire Portfolio",
                }),
                Object(l.jsxs)("nav", {
                  children: [
                    Object(l.jsx)(r.b, {
                      className: "headerNav",
                      to: "/",
                      children: "Home",
                    }),
                    Object(l.jsx)(r.b, {
                      className: "headerNav",
                      to: "/about",
                      children: "About",
                    }),
                    Object(l.jsx)(r.b, {
                      className: "headerNav",
                      to: "/projects",
                      children: "Projects",
                    }),
                    Object(l.jsx)(r.b, {
                      className: "headerNav",
                      to: "/contact",
                      children: "Contact",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        h = i.p + "portfolio_project/ssquire_portfolio/build/static/media/SS-1.dd48a92d.jpg",
        j = i(5),
        b = i.p + "portfolio_project/ssquire_portfolio/build/static/media/WeatherApp1.cdbf58b8.png",
        u = i.p + "portfolio_project/ssquire_portfolio/build/static/media/WeatherApp2.b046cb73.png",
        f = i.p + "portfolio_project/ssquire_portfolio/build/static/media/WeatherApp3.16bd743a.png",
        p = i.p + "portfolio_project/ssquire_portfolio/build/static/media/Design.32c2610a.png",
        m = i.p + "portfolio_project/ssquire_portfolio/build/static/media/Tastelife.584802aa.png",
        g = i.p + "portfolio_project/ssquire_portfolio/build/static/media/Home.01773df2.png",
        w = i.p + "portfolio_project/ssquire_portfolio/build/static/media/Menu.9775e116.png",
        y = i.p + "portfolio_project/ssquire_portfolio/build/static/media/Order.a8e0d214.png",
        x = function () {
          var e = Object(n.useState)(0),
            t = Object(j.a)(e, 2),
            i = t[0],
            s = t[1],
            a = function () {
              s(i + 1);
            },
            o = function () {
              s(i - 1);
            };
          return 0 === i
            ? Object(l.jsxs)("div", {
                className: "featured",
                children: [
                  Object(l.jsxs)("div", {
                    className: "featured-text",
                    children: [
                      Object(l.jsx)("h2", { children: "Weather App" }),
                      Object(l.jsxs)("p", {
                        children: [
                          "In this project I built a simple weather app in react using the openweathermap.org API. ",
                          Object(l.jsx)("br", {}),
                          "I completed this project on my own. As my first react project there were many hurdles in achieving the desired functionality. In it's current state it uses local storage to allow a user to register for the app, and then performs a fetch using the API to report the current weather, 7 days of forecasting, and any current weather alerts. ",
                          Object(l.jsx)("br", {}),
                          "This app is hosted on github and linked on my projects page, if you want to check it out be careful inputting your hometown as that is used to perform the fetch of weather information. It is checked against 200,000 cities in the database and is fairly specific (St. John's not st johns for example).  ",
                        ],
                      }),
                    ],
                  }),
                  Object(l.jsxs)("div", {
                    className: "featured-image",
                    children: [
                      Object(l.jsx)("img", { src: b, width: "30%" }),
                      Object(l.jsx)("img", { src: u, width: "30%" }),
                      Object(l.jsx)("img", { src: f, width: "30%" }),
                    ],
                  }),
                  Object(l.jsxs)("div", {
                    className: "featured-buttons",
                    children: [
                      Object(l.jsx)("div", {}),
                      Object(l.jsx)(r.b, {
                        id: "projectsButton",
                        to: "/projects",
                        children: "Projects",
                      }),
                      Object(l.jsx)("button", {
                        id: "nextButton",
                        onClick: a,
                        children: "Next",
                      }),
                    ],
                  }),
                ],
              })
            : 1 === i
            ? Object(l.jsxs)("div", {
                className: "featured",
                children: [
                  Object(l.jsxs)("div", {
                    className: "featured-text",
                    children: [
                      Object(l.jsx)("h2", {
                        children: "Restaurant Website Sprint",
                      }),
                      Object(l.jsxs)("p", {
                        children: [
                          "In this project I built a restaurant website using HTML, CSS, and JavaScript. ",
                          Object(l.jsx)("br", {}),
                          "This was a project to come up with a personal design and achieve that as a website.",
                        ],
                      }),
                    ],
                  }),
                  Object(l.jsxs)("div", {
                    className: "featured-image",
                    children: [
                      Object(l.jsx)("img", { src: g, width: "30%" }),
                      Object(l.jsx)("img", { src: w, width: "30%" }),
                      Object(l.jsx)("img", { src: y, width: "30%" }),
                    ],
                  }),
                  Object(l.jsxs)("div", {
                    className: "featured-buttons",
                    children: [
                      Object(l.jsx)("button", {
                        id: "prevButton",
                        onClick: o,
                        children: "Prev",
                      }),
                      Object(l.jsx)(r.b, {
                        id: "projectsButton",
                        to: "/projects",
                        children: "Projects",
                      }),
                      Object(l.jsx)("button", {
                        id: "nextButton",
                        onClick: a,
                        children: "Next",
                      }),
                    ],
                  }),
                ],
              })
            : 2 === i
            ? Object(l.jsxs)("div", {
                className: "featured",
                children: [
                  Object(l.jsxs)("div", {
                    className: "featured-text",
                    children: [
                      Object(l.jsx)("h2", { children: "Recipe Blog" }),
                      Object(l.jsxs)("p", {
                        children: [
                          "In this project I built a recipe blog using HTML and CSS ",
                          Object(l.jsx)("br", {}),
                          "This was a personal challenge project to recreate the design created by my instructor in a design class using design tools as a website using only HTML and CSS. I managed to include some rudimentary functionality and reactivity implied by the design using only CSS, via media queries and before/after states.",
                        ],
                      }),
                    ],
                  }),
                  Object(l.jsxs)("div", {
                    className: "featured-image",
                    children: [
                      Object(l.jsx)("img", { src: p, width: "40%" }),
                      Object(l.jsx)("img", { src: m, width: "40%" }),
                    ],
                  }),
                  Object(l.jsxs)("div", {
                    className: "featured-buttons",
                    children: [
                      Object(l.jsx)("button", {
                        id: "prevButton",
                        onClick: o,
                        children: "Prev",
                      }),
                      Object(l.jsx)(r.b, {
                        id: "projectsButton",
                        to: "/projects",
                        children: "Projects",
                      }),
                      Object(l.jsx)("div", {}),
                    ],
                  }),
                ],
              })
            : void 0;
        },
        O = function () {
          return Object(l.jsxs)("div", {
            className: "home",
            children: [
              Object(l.jsxs)("div", {
                id: "homeIntro",
                children: [
                  Object(l.jsxs)("article", {
                    children: [
                      Object(l.jsxs)("h2", {
                        children: [
                          "Hi, I'm Stephen Squire. ",
                          Object(l.jsx)("br", {}),
                          "I'm a Full Stack Web Developer, ",
                          Object(l.jsx)("br", {}),
                          "based out of St. John's, NL.",
                        ],
                      }),
                      Object(l.jsx)("p", {
                        children:
                          "I am currently studying software development at Keyin College. My strengths lie in problem solving, critical analysis, and the ability to learn new technologies quickly. Previously, I worked as a cook and then chef in the culinary industry, another fast paced, deadline driven and team oriented work environment. I thrive under pressure and enjoy the challenge of recreating the vision of a client using the tools of the trade.",
                      }),
                    ],
                  }),
                  Object(l.jsxs)("figure", {
                    children: [
                      Object(l.jsx)("img", {
                        id: "profilePic",
                        src: h,
                        alt: "a pic of me",
                      }),
                      Object(l.jsx)("figcaption", {}),
                    ],
                  }),
                  Object(l.jsx)(r.b, {
                    id: "contactButton",
                    to: "/contact",
                    children: "Contact Me",
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                id: "featuredWork",
                children: [
                  Object(l.jsx)("h2", {
                    id: "featuredTitle",
                    children: "Featured Work",
                  }),
                  Object(l.jsx)("div", {
                    id: "featuredWorkContainer",
                    children: Object(l.jsx)(x, {}),
                  }),
                ],
              }),
            ],
          });
        },
        v = function () {
          return Object(l.jsxs)("footer", {
            children: [
              Object(l.jsx)("p", { children: "\xa9 2021 Stephen Squire" }),
              Object(l.jsx)("p", { children: "All rights reserved" }),
              Object(l.jsxs)("p", {
                children: [
                  "Contact information: ",
                  Object(l.jsx)("a", {
                    href: "mailto: stephen.squire@keyin.com",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Email Me",
                  }),
                ],
              }),
            ],
          });
        },
        k = function () {
          return Object(l.jsxs)("div", {
            children: [
              Object(l.jsxs)("section", {
                children: [
                  Object(l.jsxs)("h3", {
                    children: ["About Me", Object(l.jsx)("hr", {})],
                  }),
                  Object(l.jsxs)("article", {
                    id: "aboutMe",
                    children: [
                      Object(l.jsx)("p", {
                        className: "leftAlign",
                        children:
                          "Hi! I'm Stephen Squire a student at Keyin College currently enrolled in my second semester of the Software Development program. I have always had an affinity for technology and computers. I spend a lot of time reading about the newest breakthroughs in hardware and software. My hobbies include cooking (I worked as a chef prior to starting this program) , gaming, and hanging out with my cats and dog.",
                      }),
                      Object(l.jsx)("figure", {
                        children: Object(l.jsx)("img", { src: "", alt: "Dax" }),
                      }),
                      Object(l.jsx)("p", {
                        className: "leftAlign",
                        children:
                          "My love affair with technology started young, I was always into the science fiction shows, books, and movies growing up. Be that the Teenage Mutant Ninja Turtles (Donatello was my favourite), Star Wars, Star Trek, the Alien franchise, and The Matrix to name a few. I always found myself fascinated by the fictional science and technology of the worlds portrayed in these works and often wondered where the line between science fiction, science future, and science fact lay.",
                      }),
                      Object(l.jsx)("p", {
                        className: "leftAlign",
                        children:
                          "Fast forward to my early twenties and I was enrolled in Memorial University taking a little bit of all the sciences and maths but not having any direction besides a general lust for understanding. I dropped out of school and kinda bummed around between jobs before landing in a professional kitchen. The hook was set and I spent the rest of my twenties and early 30's mastering the skills required to excel in a restaurants kitchen, eventually becoming the head chef of a place and writing a menu, training staff and overseeing the minutia of keeping a restaurant profitable. This was no longer the job I had fallen in love with at this point.",
                      }),
                      Object(l.jsx)("p", {
                        className: "leftAlign",
                        children:
                          'The Covid-19 pandemic struck right as I was becoming jaded with the lifestyle of being a chef, shutting down restaurants the world over and giving me ample time to do some soul searching. On one such evening sitting around at home, doom scrolling my technology centric newsfeed, I stumbled upon the "Flippy" robot by Miso Robotics. This little robotic arm was flipping burgers and cooking fries and coming for the entry level jobs in the restaurant industry, like robots had in so many before it. This got me thinking about how I needed to get on the right side of this revolution in automation. Not long after I heard of this program at Keyin and the rest is history.',
                      }),
                      Object(l.jsx)("figure", {
                        children: Object(l.jsx)("img", {
                          src: "",
                          alt: "Flippy",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("section", {
                children: [
                  Object(l.jsxs)("h3", {
                    children: [
                      "My Motivations and Goals",
                      Object(l.jsx)("hr", {}),
                    ],
                  }),
                  Object(l.jsxs)("article", {
                    class: "two",
                    children: [
                      Object(l.jsx)("p", {
                        children:
                          "As mentioned in the precious section, my journey into this field has taken a lifetime to get started. On the bright side, I have a lifetime of looking in on the field as a passionate hobbyist to guide my decisions as a travel deeper into the rabbit hole of software development.",
                      }),
                      Object(l.jsx)("p", {
                        children:
                          "Coming into this program at Keyin I had no idea what to expect or where it would take me. I honestly still don't, but I am beginning to form an idea of where I'd like to end up and what I'd like to be doing when I get there. Across the rest of this section I hope to lay bare my thought process in narrowing my sights.",
                      }),
                      Object(l.jsx)("p", {
                        children:
                          "First off, I knew when I started that I wanted to work in a creative role. That was my favourite part of being a chef and there are a lot of similarities between the creation process of writing and refining a new recipe for a professional kitchen and that of writing a piece of software. Knowing what you want to create is only the beginning of the process in both cases, the real meat of the work lies in identifying the ingredients and procedures needed to get there. As well as then refining the product to be more efficient and the recipe to be easy for colleagues to read and reproduce.",
                      }),
                      Object(l.jsx)("p", {
                        children:
                          "Secondly, I know that I want to work with code at the cutting edge of whichever field I find myself in. Be that web design as we are studying this semester or machine learning and deep learning applications that are already all around us revolutionizing how we work, shop, eat, and play. This desire to be at the forefront of innovation will ensure this career path is one of lifelong learning. Which is the point of this, my desire to be constantly learning and challenged to grow my skillset meshes quite well with the expectations of being a software developer.",
                      }),
                      Object(l.jsx)("p", {
                        children:
                          "Finally, building a strong foundation of skills like those offered in this program at Keyin in a currated and employment focused manner, rather than the purely academic studies I had previously attempted, is much more in line with how I am able to motivate myself to learn. Having a why from the perspective of the industry I am heading into for each skill really puts the importance of it all into focus.",
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsx)("aside", { class: "left" }),
              Object(l.jsxs)("section", {
                children: [
                  Object(l.jsxs)("h3", {
                    children: [
                      "What's Hot in Tech Today, My Hot Take",
                      Object(l.jsx)("hr", {}),
                    ],
                  }),
                  Object(l.jsxs)("article", {
                    class: "one",
                    children: [
                      Object(l.jsx)("p", {
                        children:
                          "As an avid follower of the technology sector I have been keeping up on all the news in a variety of fields of interest of mine and hope to be able to shed some light on to them to you here.",
                      }),
                      Object(l.jsx)("p", {
                        children:
                          "A major trend in technology today is the electrification of our transportation network. Be that Tesla with their electric and self driving cars or Ford with it's new Lightning F-150. Also, many major retailers, such as Canadian Tire, have committed to electrifying their transport truck fleet. Eventually shifting the entire trucking industry to a self driving electric model. On the smaller scale Amazon has delivery drones in many cities. All these things will be running software of some sort and will require skilled software technitiens to develop and maintain them.",
                      }),
                      Object(l.jsx)("p", {
                        children:
                          "Another major trend is in machine learning leveraging new types of software and hardware to offload tasks that previously only a human could perform. Facial recognition, voice recognition, self driving cars, and the photo software on our cell phones all utilize some level of this technology. It is also being used to study and derive useful information from very large datasets. We are all familiar with facebook and google advertisements being specifically honed into each of us individually. This point in particular also has a large body of debate ongoing about the ethics of using machines for these tasks. Does a piece of software that sorts resumes for an accounting firm have any bias' baked into it's code? Should we develop technologies that could be used to discriminate? How do we write code that avoids these issues. There is so much more to this topic but I shouldn't get too into it here.",
                      }),
                      Object(l.jsx)("p", {
                        children:
                          "This point is smaller in scope than the previous two. Literally. Cell phones and tablets have dramatically shifted how digital content is consumed. With this change how digital content is made has been forced to shift as well. Today a website for a business is all but useless if it hasn't been designed with these smaller devices in mind. As such, modern web development practices that include a wide array of compatibility with all sorts of devices is needed at all levels of web development. Coupled to this point is the shift of consumer habits towards online marketplaces. This small screen revolution needs a big workforce of software developers that use the most up to date standards of web design.",
                      }),
                      Object(l.jsx)("p", {
                        children:
                          "My final point in this section is important across all my previously mentioned topics. Security. As more and more of our activities become driven by technology, a security vulnerability in software can be very distruptive. Having an insecure and outdated piece of tech anywhere in the daisy chain of devices we now trust with all of our personal data could lead to any number of problems. Identity theft can happen to any one of us and we may never even know how it happened. Industries have been taken hostage by maliscious code getting into factories or power plants and businesses have been shuttered over damages caused by mishandling sensitive data. Learning how to write secure code is essential and updating old code to new security standards is a constantly evolving field with lots of opportunity.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        I = function () {
          return Object(l.jsxs)("div", {
            id: "contactMe",
            children: [
              Object(l.jsx)("h1", {
                children: "Thanks for choosing to contact me",
              }),
              Object(l.jsxs)("article", {
                children: [
                  Object(l.jsxs)("p", {
                    children: [
                      "You can find my github profile ",
                      Object(l.jsx)("a", {
                        href: "https://github.com/Genoson",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "here",
                      }),
                    ],
                  }),
                  Object(l.jsxs)("p", {
                    children: [
                      "You can find my LinkedIn profile ",
                      Object(l.jsx)("a", {
                        href: "https://www.linkedin.com/in/stephen-squire-6a3a8a211",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "here",
                      }),
                    ],
                  }),
                  Object(l.jsxs)("p", {
                    children: [
                      "you can email me here ",
                      Object(l.jsx)("a", {
                        href: "mailto:stevesquire13@gmail.com",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Email Me",
                      }),
                      " ",
                      Object(l.jsx)("br", {}),
                      "or directly at stephen.squire@keyin.com",
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        T = function () {
          return Object(l.jsxs)("div", {
            id: "projectsPage",
            children: [
              Object(l.jsx)("h1", {
                children: "Projects site currently under development",
              }),
              Object(l.jsx)("p", {
                children:
                  "Please see the below section for a sampling of whats to come.",
              }),
              Object(l.jsxs)("p", {
                children: [
                  "Check out my weather app in action here: ",
                  Object(l.jsx)("a", {
                    href: "https://genoson.github.io/weatherapp.github.io/",
                    target: "_blank",
                    children: "Weather App",
                  }),
                ],
              }),
              Object(l.jsx)("div", {
                id: "featuredWorkContainer",
                children: Object(l.jsx)(x, {}),
              }),
            ],
          });
        };
      var S = function () {
          return Object(l.jsxs)(r.a, {
            children: [
              Object(l.jsx)(d, {}),
              Object(l.jsx)("main", {
                id: "pageBody",
                children: Object(l.jsxs)(c.c, {
                  children: [
                    Object(l.jsx)(c.a, {
                      path: "",
                      element: Object(l.jsx)(O, {}),
                    }),
                    Object(l.jsx)(c.a, {
                      path: "about",
                      element: Object(l.jsx)(k, {}),
                    }),
                    Object(l.jsx)(c.a, {
                      path: "contact",
                      element: Object(l.jsx)(I, {}),
                    }),
                    Object(l.jsx)(c.a, {
                      path: "projects",
                      element: Object(l.jsx)(T, {}),
                    }),
                  ],
                }),
              }),
              Object(l.jsx)(v, {}),
            ],
          });
        },
        N = function (e) {
          e &&
            e instanceof Function &&
            i
              .e(3)
              .then(i.bind(null, 17))
              .then(function (t) {
                var i = t.getCLS,
                  n = t.getFID,
                  s = t.getFCP,
                  a = t.getLCP,
                  o = t.getTTFB;
                i(e), n(e), s(e), a(e), o(e);
              });
        };
      o.a.render(
        Object(l.jsx)(s.a.StrictMode, { children: Object(l.jsx)(S, {}) }),
        document.getElementById("root")
      ),
        N();
    },
  },
  [[16, 1, 2]],
]);
//# sourceMappingURL=main.851ecfa4.chunk.js.map
