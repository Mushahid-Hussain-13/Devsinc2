import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrimaryBtn = ({ text, url, className }) => {
  return (
    <Link to={url} className={`btn ${className || ""}`}>
      <ArrowUpRight size={17} />
      <span className="span">{text}</span>
    </Link>
  )
}

export default PrimaryBtn