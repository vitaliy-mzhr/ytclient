import React from 'react';
import { Link } from "react-router-dom";

import './styles.scss';

const EmptyVideoGroup = () => (
  <>
    <div className="ytc-empty_list">To add favorites go to the <Link to="/" className="ytc-empty_link">home page</Link></div>
  </>
)

export default EmptyVideoGroup
