import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PrimaryBtn = ({ text, url, className }) => {
  return (
    <a href={url} className={`btn ${className || ""}`}>
      <ArrowUpRight size={17} />
      <span className="span">{text}</span>
    </a>
  )
}

export default PrimaryBtn