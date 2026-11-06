import React, { useState } from 'react';
import './FAQ.css';
import PrimaryBtn from '../snippits/PrimaryBtn';
import PlusArrow from '../snippits/PlusArrow.jsx';
import useMediaQuery from '../hooks/useMediaQuery';

const MOBILE_LIMIT = 3; // mobile par shuru mein kitne questions dikhane hain

const FAQ = ({
  tag = 'FAQS',
  title,
  description,
  items = [],
  btnText = "Let's Talk",
  btnUrl = '#',
}) => {
  const isDesktop = useMediaQuery('(min-width: 850px)');
  const [showAll, setShowAll] = useState(false);

  // Har item ko ek id do (key ke liye aur columns baantne ke liye)
  const numbered = items.map((item, index) => ({ ...item, id: index }));

  // Mobile par: showAll false ho to sirf pehle 3, warna sab
  const visibleItems =
    isDesktop || showAll ? numbered : numbered.slice(0, MOBILE_LIMIT);

  // Desktop par 2 columns, mobile par 1 column
  const columns = isDesktop
    ? [
        numbered.filter((item) => item.id % 2 === 0), // left: 1, 3, 5...
        numbered.filter((item) => item.id % 2 !== 0), // right: 2, 4, 6...
      ]
    : [visibleItems];

  // Button sirf mobile par aur sirf tab jab items 3 se zyada hon
  const showToggleBtn = !isDesktop && items.length > MOBILE_LIMIT;

  return (
    <section className="faq-section" aria-label="faq section">
      <div className="container">

        <div className="wrapper1">
          <div>
            <span className="section-tag">{tag}</span>
            <h2 className="section-heading">{title}</h2>
            {description && <p className="section-desc">{description}</p>}
          </div>

          <PrimaryBtn url={btnUrl} text={btnText} />
        </div>

        <div className="faq-list">
          {columns.map((column, colIndex) => (
            <div className="faq-col" key={colIndex}>
              {column.map((item) => (
                <details className="faq-item" key={item.id}>
                  <summary className="faq-question">
                    <span className="faq-text">{item.question}</span>
                    <span className="faq-icon"><PlusArrow /></span>
                  </summary>

                  <p className="faq-answer">{item.answer}</p>
                </details>
              ))}
            </div>
          ))}
        </div>

        {showToggleBtn && (
          <button
            type="button"
            className="faq-toggle"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
          >
            {showAll ? 'Show less' : 'Show more'}
          </button>
        )}

      </div>
    </section>
  );
};

export default FAQ;