import React, { useRef } from "react";
import "./MemoriesAtDevsinc.css";
import moment1 from "../../../assets/moment-1.webp";
import moment2 from "../../../assets/moment-2.webp";
import moment3 from "../../../assets/moment-3.webp";
import moment4 from "../../../assets/moment-4.webp";
import moment5 from "../../../assets/moment-5.webp";
import moment6 from "../../../assets/moment-6.webp";
import moment7 from "../../../assets/moment-7.webp";
import moment8 from "../../../assets/moment-8.webp";
import moment9 from "../../../assets/moment-9.webp";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    id: 1,
    image: moment1,
    title: "Her Revolution",
  },
  {
    id: 2,
    image: moment2,
    title: "Chand Raat 2025",
  },
  {
    id: 3,
    image: moment3,
    title: "DAD",
  },
  {
    id: 4,
    image: moment4,
    title: "Qawali Night",
  },
  {
    id: 5,
    image: moment5,
    title: "Basant",
  },
  {
    id: 6,
    image: moment6,
    title: "Khel ka Junoon 2026",
  },
  {
    id: 7,
    image: moment7,
    title: "Jashn-e-Baharan 2026",
  },
  {
    id: 8,
    image: moment8,
    title: "Dollywood 2026",
  },
  {
    id: 9,
    image: moment9,
    title: "Sports Day",
  },
];

const MemoriesAtDevsinc = () => {
  const listRef = useRef(null);

  const handleScroll = (direction) => {
    const list = listRef.current;

    if (!list) return;

    const cards = list.querySelectorAll(".item");

    const firstCard = cards[0];

    const cardWidth = firstCard.offsetWidth;

    const gap = parseFloat(getComputedStyle(list).gap);

    const scrollAmount = cardWidth + gap;

    const maxScroll = list.scrollWidth - list.clientWidth;

    if (direction === "next") {
      if (list.scrollLeft >= maxScroll - 5) {
        list.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        list.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    } else {
      if (list.scrollLeft <= 5) {
        list.scrollTo({
          left: maxScroll,
          behavior: "smooth",
        });
      } else {
        list.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="memories-at-devsinc" aria-label="memories at devsinc">
      <div className="container">
        <div className="hero-header">
          <span className="section-tag">Moments from this year</span>
          <h2 className="section-heading">
            Moments that say more than a mission statement
          </h2>
          <p className="section-desc">
            The calendar our teams actually show up for. From Her Revolution and
            Jashn-e-Baharan to Qawali Nights, sports, meetups, and everything in
            between, these are the moments that bring our culture to life.
          </p>
        </div>

        <div className="wrapper">
          <ul className="list" ref={listRef}>
            {data.map((item) => (
              <li className="item" key={item.id}>
                <div
                  className="img-holder"
                  style={{ "--width": 500, "--height": 500 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="img-cover"
                  />
                </div>
                <h3 className="title">{item.title}</h3>
              </li>
            ))}
          </ul>

          <div className="btn-wrapper">
            <button
              className="arrow-btn prev-btn"
              aria-label="previous button"
              onClick={() => handleScroll("prev")}
            >
              <ChevronLeft />
            </button>
            <button
              className="arrow-btn next-btn"
              aria-label="next button"
              onClick={() => handleScroll("next")}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesAtDevsinc;
