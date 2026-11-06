import React from 'react'

const CompanyItemCard = ({ img, imgAlt, imgWidth, imgHeight, certifiedNum, descText }) => {
  return (
    <li className="company-item">
      <div className="elem1">
        <div className="img-div">
          <img
            src={img}
            alt={imgAlt}
            width={imgWidth}
            height={imgHeight}
            loading='lazy'         
          />
        </div>

        <div>
          <h3>{certifiedNum}</h3>
          <p>Certified</p>
        </div>
      </div>

      <p className="item-desc">
        {descText}
      </p>
    </li>
  )
}

export default CompanyItemCard