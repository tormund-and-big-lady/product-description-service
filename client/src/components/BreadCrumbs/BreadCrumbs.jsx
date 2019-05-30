import React from 'react';
import style from './BreadCrumbs.scss'

const BreadCrumbs = (props) => (
  <div className={style.breadCrumbContainer}>
    <div className={style.leftArrowContainer}>
      <svg height="16" width="9">
        <path d="M1 8l7 7M8 1L1 8" stroke="#737373" fill="none" strokeWidth="1px"></path>
      </svg>
    </div>
    <a className={style.designerContainer}href='#'>
      <span className={style.designer}>{props.designer.toUpperCase()}</span>
    </a>
  </div>
) 

export default BreadCrumbs;