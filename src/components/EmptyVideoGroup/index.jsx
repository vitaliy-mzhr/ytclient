import React from 'react';
import { Link } from "react-router-dom";

import './styles.scss';

const EmptyVideoGroup = ({mainPage}) => {
  return <>
  {
    mainPage ? 
    <div className="ytc-empty_list">No Results</div> :
    <div className="ytc-empty_list">To add favorite videos go to the <Link to="/" className="ytc-empty_link">home page</Link></div>
  }
    
  </>
}
export default EmptyVideoGroup
