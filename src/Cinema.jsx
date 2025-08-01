import CinemaLogo from "./assets/logo.svg";
import Global from "./assets/global.svg";
import Vector from "./assets/vector.svg";
import Bakubackground from "./assets/bakubackground.png";
import Bakucinema from "./assets/bakucinema.png";
import Video from "./assets/video.png";
import Capture from "./assets/Capture.svg";
import Camera from "./assets/camera.svg";
import CenterImage from "./assets/cinema1.jpg";
import Image from "./assets/Image.jpg";
import filmfestivali from "./assets/filmfestivali.svg";
import anima from "./assets/animalogo.svg";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import AwardShare from "./assets/award.png";
import BlackShare from "./assets/blackShare.png";
import logo from "./assets/logo 1.svg";
import mobilfilm from "./assets/mobilfilm.svg";
import maskgroup from "./assets/Mask group.svg";
import photoShoot1 from "./assets/1.png";
import photoShoot2 from "./assets/2.png";
import photoShoot3 from "./assets/3.png";
import photoShoot4 from "./assets/4.png";
import HeyderEliyevCenter from "./assets/HE center.png";
import KinoMerkezi from "./assets/KinoMerkezi.png";
import KinoTheatre from "./assets/Kinotheatre.png";
import oldCity from "./assets/oldcity.png";
import Yarat from "./assets/yarat.png";
import arrowright from "./assets/arrow-right.svg";
import Logo1 from "./assets/Logo01.svg";
import Logo2 from "./assets/Logo02.svg";
import Logo3 from "./assets/Logo03.svg";
import Logo4 from "./assets/Logo04.svg";
import Logo5 from "./assets/Logo05.svg";
import at from "./assets/@.svg";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedln.svg";
import facebook from "./assets/facebook.svg";
import youtube from "./assets/youtube.svg";
import call from "./assets/call.svg";
import { useEffect, useState } from "react";

const navItems = [
  {
    title: "About BCB",
    path: "about",
  },
  {
    title: "Festivals",
    path: "festival",
  },
  {
    title: "Organisers & Partners",
    path: "organisers",
  },
  {
    title: "List of participants",
    path: "list",
  },
  {
    title: "Venues",
    path: "venues",
  },
  {
    title: "Ambassadors",
    path: "ambassadors",
  },
  {
    title: "Contacts",
    path: "contact",
  },
];

function BakuCinema() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <header
        style={{ backgroundColor: "#F3F3F3" }}
        className="cinema-header-bar"
      >
        <div>
          <img src={CinemaLogo} alt="Cinema logo" className="cinema-logo" />
        </div>

        <div className="cinema-header-content">
          <ul>
            {navItems.map((link, index) => (
              <li
                key={index}
                className={link.path === activeSection ? "active" : ""}
              >
                <a
                  onClick={() => setActiveSection(link.path)}
                  href={`#${link.path}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
       
          </ul>
        </div>

        <div>
          <div className=" cinema-header-right">
            <img src={Global} className="global-icon" />
            <p className="languages">ENG</p>
            <img src={Vector} className="vector-icon" />
            <button className="registration-button">Registration</button>
          </div>
        </div>
      </header>

      <div className="main-container">
        <main>
          <section id="about">
            <div
              style={{ backgroundImage: `url(${Bakubackground})` }}
              className="baku-background"
            >
              <div className="main-icon">
                <img src={Capture} className="capture-icon" />
                <img src={Camera} className="camera-icon" />
              </div>
              <div className="ciname-content">
                <div className="bakucinema-logo">
                  <img src={Bakucinema} />
                </div>
                <div className="video">
                  <img src={Video} />
                </div>
              </div>
            </div>
            <div className="countdown">
              <div className="countdown-timer">
                <div className="countdown-background"></div>
                <div className="time-box">
                  <p className="time-number">60</p>
                  <p className="time-label">day</p>
                </div>
                <span className="separator">:</span>
                <div className="time-box">
                  <p className="time-number">17</p>
                  <p className="time-label">hour</p>
                </div>
                <span className="separator">:</span>
                <div className="time-box">
                  <p className="time-number">15</p>
                  <p className="time-label">min</p>
                </div>
                <span className="separator">:</span>
                <div className="time-box">
                  <p className="time-number">40</p>
                  <p className="time-label">sec</p>
                </div>
              </div>
            </div>

            <div className="image-collage" id="festival">
              <img
                src={CenterImage}
                alt="Left"
                className="collage-image left"
              />
              <img src={Image} alt="Center" className="collage-image center " />
              <img
                src={CenterImage}
                alt="Right"
                className="collage-image right"
              />
            </div>

            <div className="cinema-content">
              <h1 className="cinema-header">BAKU CINEMA BREEZE 24</h1>
              <p className="cinema-text">
                The <span className="bold-text">“Baku Cinema Breeze”</span> aims to
                elevate Azerbaijan as the central hub for the film industry in
                the <br />
                region, fostering a vibrant cinematic culture. It also seeks to
                cultivate a supportive ecosystem for local <br />
                stakeholders in the film industry and to forge pathways for
                collaborative co-productions with <br />
                international partners. Our objectives are welcoming filmmakers
                from over 15 countries to foster <br />
                partnerships in various domains, including animation,
                documentary, feature films, film commission, <br />
                and more.
              </p>
            </div>
          </section>

          <section id="festival">
            <div className="festival-content">
              <h1 className="festival-header">Festival</h1>
              <span className="festival-text">
                It has survived not only five centuries, but also the leap into
                electronic <br /> typesetting.
              </span>
              <div>
                <div className="icons">
                  <img
                    src={filmfestivali}
                    style={{ width: "12%", marginTop: "-3%" }}
                  />
                  <img src={anima} style={{ width: "11%", marginTop: "-3%" }} />
                  <img src={logo} style={{ width: "11%", marginTop: "-3%" }} />
                  <img
                    src={mobilfilm}
                    style={{ width: "9%", marginTop: "-3%" }}
                  />
                </div>
                <div className="festival">
                  <div className="festival-item-first">
                    <img src={image1} className="festival-image" />
                    <h3 className="festival-title-first">
                      BAKU INTERNATIONAL FILM <br /> FESTIVAL
                    </h3>
                    <p className="festival-text-first">
                      It has survived not only five <br /> centuries, but also
                      the leap into <br /> electronic typesetting.
                    </p>
                  </div>
                  <div className="festival-item">
                    <img src={image2} className="festival-image" />
                    <h3 className="festival-title">ANIMAFILM</h3>
                    <p className="festival-text">
                      It has survived not only five <br /> centuries, but also
                      the leap into <br /> electronic typesetting.
                    </p>
                  </div>
                  <div className="festival-item">
                    <img src={image3} className="festival-image" />
                    <h3 className="festival-title">DOKUBAKU</h3>
                    <p className="festival-text">
                      It has survived not only five <br /> centuries, but also
                      the leap into <br /> electronic typesetting.
                    </p>
                  </div>
                  <div className="festival-item">
                    <img src={image4} className="festival-image" />
                    <h3 className="festival-title">CINEMO</h3>
                    <p className="festival-text">
                      It has survived not only five <br /> centuries, but also
                      the leap into <br /> electronic typesetting.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="award-content">
                    <img src={AwardShare} alt="Award" className="award-image" />
                    <img src={BlackShare} alt="Black" className="black-image" />
                    <div className="black-overlay-text">
                      <h3 className="black-title">
                        <span className="bcb-shift">BCB</span>
                        <br />
                        AWARDS
                      </h3>
                      <p className="black-text">
                        Also 1st "Baku Cinema Breeze Awards" will take placein{" "}
                        <br />
                        the following categories: Animation, Documentary, Short{" "}
                        <br />
                        Films, Feature Films. The terms of participation in the{" "}
                        <br />
                        BCB Award will be published soon, providing detailed{" "}
                        <br />
                        guidelines and criteria for submissions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="list">
            <div>
              <div className="table-bar">
                <h1 className="table-tittle">TƏDBİRLƏR PLANI</h1>
              </div>
              <table className="event-schedule">
                <thead>
                  <tr>
                    <th colSpan={2}></th>

                    <th className="day-cell">2 okt</th>
                    <th className="day-cell">3 okt</th>
                    <th className="day-cell">4 okt</th>
                    <th className="day-cell">5 okt</th>
                    <th className="day-cell">6 okt</th>
                    <th className="day-cell">7 okt</th>
                    <th className="day-cell">8 okt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="category-text">AHA CENTRE</td>
                    <td className="category-cell">General</td>
                    <td className="event-cell highlight blue">
                      GRAND OPENING CEREMONY
                    </td>
                    <td className="event-cell highlight green">
                      CINEMO info session
                      <br />
                      <small>HUB</small>
                    </td>
                    <td
                      style={{
                        backgroundImage: `url(${maskgroup})`,
                        border: "none",
                      }}
                      className="event-cell"
                    ></td>
                    <td className="event-cell highlight light-green">
                      Animators Accelerator 24
                    </td>
                    <td className="event-cell highlight light-blue">
                      Producers Elevator 24
                      <br />
                      <small>HUB</small>
                    </td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                  </tr>
                  <tr>
                    <td className="category-text"></td>
                    <td className="category-cell" style={{ border: "none" }}>
                      EXPO
                    </td>
                    <td className="event-cell highlight purple">
                      Opening Ceremony
                    </td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td className="event-cell highlight purple-light">
                      Closing Ceremony
                    </td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                  </tr>
                  <tr>
                    <td className="category-text">
                      AZERBAIJAN <br /> CINEMA CENTER
                    </td>
                    <td className="category-cell purple-dark">ANIMAFILM</td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td className="event-cell highlight beige">
                      Opening Ceremony
                    </td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td className="event-cell highlight brown">
                      Closing Ceremony
                    </td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                  </tr>
                  <tr>
                    <td className="category-text">
                      NIZAMI <br /> CINEMA CENTER
                    </td>
                    <td className="category-cell">
                      Baku <br /> International <br /> Film Festival
                    </td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td className="event-cell highlight beige">
                      {/* Opening Ceremony{" "} */}
                    </td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                  </tr>
                  <tr>
                    <td className="category-text">
                      CHER <br /> SHEHER
                    </td>
                    <td className="category-cell">DokuBaku</td>
                    <td
                      className="event-cell highlight purple"
                      style={{ border: "none" }}
                    ></td>
                    <td
                      className="event-cell highlight purple"
                      style={{ border: "none" }}
                    >
                      Opening Ceremony
                    </td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    >
                      {" "}
                    </td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                    <td
                      style={{ backgroundImage: `url(${maskgroup})` }}
                      className="event-cell"
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="photoShoot">
              <img src={photoShoot1} />
              <img src={photoShoot2} />
              <img src={photoShoot3} style={{ zIndex: "2" }} />
              <img src={photoShoot4} />
            </div>
          </section>
          <section id="venues">
            <div className="mekan-container">
              <div className="top-row">
                <h3 className="title">MEKANLAR</h3>
                <span className="description">
                  "Discover exceptional living with our real <br />
                  estate project. Tailored to fit your lifestyle,
                  <br />
                  our properties offer timeless elegance and <br />
                  modern amenities in a prime location."
                </span>
              </div>
              <p className="subtitle">ƏSAS MƏKANLAR</p>
            </div>

            <div className="mekan-content">
              <div className="mekan-item heyder-eliyev-center">
                <img src={HeyderEliyevCenter} alt="Heydər Əliyev Mərkəzi" />
                <div className="mekan-text">
                  <p className="mekan-title">
                    Haydar Aliyev <br />
                    center
                  </p>
                  <span className="mekan-description">
                    3891 ranchew Dr <br />
                    Richardson, calfornia
                  </span>
                </div>
              </div>

              <div className="mekan-item kino-merkezi">
                <img src={KinoMerkezi} alt="Kino Mərkəzi" />
                <div className="mekan-text">
                  <p className="mekan-title">
                    Nizami Kino <br /> Mərkəzi
                  </p>
                  <span className="mekan-description">
                    4516 w. Gray,Utica <br />
                    Pennsylvania
                  </span>
                </div>
              </div>

              <div className="mekan-item kino-theatre">
                <img src={KinoTheatre} alt="Kino Teatrı" />
                <div className="mekan-text">
                  <p className="mekan-title">
                    Azərbaycan Kino <br />
                    Mərkəzi
                  </p>
                  <span className="mekan-description">
                    3891 ranchew Dr <br />
                    Richardson, calfornia
                  </span>
                </div>
              </div>
            </div>

            <div className="event-places">
              <p className="event-places-title">
                TƏDBİRİN KEÇİRİLDİYİ MƏKANLAR
              </p>
              <div className="event-places-list">
                <div className="place-item old-city">
                  <img src={oldCity} alt="Old City" className="place-image" />
                  <div className="place-info">
                    <p className="place-name">İçərİ şəhər</p>
                    <span className="place-description">
                      3891 ranchew Dr <br />
                      Richardson, calfornia
                    </span>
                  </div>
                </div>
                <div className="place-item yarat">
                  <img src={Yarat} alt="Yarat" className="place-image" />
                  <div className="place-info">
                    <p className="place-name">YARAT</p>
                    <span className="place-description">
                      3891 ranchew Dr <br />
                      Richardson, calfornia
                    </span>
                  </div>
                </div>
                <div className="place-item heyder-eliyev-center">
                  <img
                    src={HeyderEliyevCenter}
                    alt="Heydər Əliyev Mərkəzi"
                    className="place-image"
                  />
                  <div className="place-info">
                    <p className="place-name">YARADICI</p>
                    <span className="place-description">
                      3891 ranchew Dr <br />
                      Richardson, calfornia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="ambassadors">
            <div className="agenda-text">
              <h1>Agenda of OMArket</h1>
              <p>
                OMArket (Orient and Middle Asia Contrie’s Cinema Market) is a
                new market event held as part of the Baku <br /> Cinema Breeze
                festival in Azerbaijan. It aims to unite Eastern countries on a
                single platform to promote <br /> their film industries, with a
                particular focus on advancing the film commission sector.
              </p>
              <p style={{ color: "black" }}>
                Read more <img src={arrowright} className="arrowright" />
              </p>
            </div>
            <div className="schedule-container">
              <div className="day-block">
                <div className="date">
                  <strong>02</strong>
                  <span>october</span>
                </div>
                <ul className="events">
                  <li>
                    <span className="time">17:00</span> - Orient Cinema Market
                    (expo)
                  </li>
                  <li>
                    <span className="time">19:00</span> - Networking Cocktail
                  </li>
                  <li>
                    <span className="time">20:00</span> - Grand opening of Baku
                    Cinema Breeze
                  </li>
                </ul>
              </div>

              <div className="white-row">
                <div className="date">
                  <strong>03</strong>
                  <span>october</span>
                </div>
                <ul className="events">
                  <li>
                    <span className="time">11:00 - 17:00</span> - Expo and panel
                    sessions
                  </li>
                </ul>
              </div>

              <div className="day-block">
                <div className="date">
                  <strong>04</strong>
                  <span>october</span>
                </div>
                <ul className="events">
                  <li>
                    <span className="time">10:00</span> - Location tour for
                    producers
                  </li>
                  <li>
                    <span className="time">19:00</span> - Closing cocktail
                  </li>
                </ul>
              </div>
            </div>

            <div className="logos">
              <img src={Logo1} />
              <img src={Logo2} />
              <img src={Logo3} />
              <img src={Logo4} />
              <img src={Logo5} />
            </div>
          </section>
        </main>
        <footer className="footer">
          <section id="contact">
            <div className="footer-content">
              <div className="footer-logo-social">
                <div className="footer-logo">
                  <img src={CinemaLogo} alt="Cinema Logo" />
                </div>
                <div className="footer-social-icons">
                  <img src={instagram} alt="Instagram" />
                  <img src={facebook} alt="Facebook" />
                  <img src={youtube} alt="YouTube" />
                  <img src={linkedin} alt="LinkedIn" />
                </div>
              </div>

              <div className="footer-contact">
                <h3 className="contact">Contact us</h3>
                <div className="contact-item">
                  <img src={call} alt="Call" />
                  <span>+994 55 626 16 47</span>
                </div>
                <div className="contact-item">
                  <img src={at} alt="Email" />
                  <span>info@bcb.culture.az</span>
                </div>
              </div>
            </div>
          </section>
          <div className="copywrite">
            2024 BAKU CINEMA BREEZE 24. All Rights Reserved
          </div>
        </footer>
      </div>
    </>
  );
}
export default BakuCinema;
