import React, { Component } from 'react';
import style from './ImageCarousel.scss'

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.mainContainer}>
        <div className={style.carouselContainer}>
          <div className={style.carouselPhotoContainer}>
            {this.props.imageUrls[this.props.imageUrlsIndex].map((image, index) => <img className={style.carouselImage} onClick={() => this.props.updateSelectedImg(index)} src={image} key={index}></img>)}
          </div>
          {/* <div className={style.arrowUpSVGContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="13" width="24">
              <path d="M11.998 1L23 12M11.998 1L1 11.992" stroke="#737373" fill="none" stroke-width="1px"></path>
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="13" width="24" >
              <path class="nui-icon-small-chevron-down-0" d="M6.002 6L1 1m5.002 5L11 1.002" stroke="#737373" fill="none" stroke-width="1px"></path>
            </svg>
          </div> */}
        </div>
        <div className={style.selectedImgContainer}>
          <img className={style.selectedImg} src={this.props.imageUrls[this.props.imageUrlsIndex][this.props.selectedImg]}></img>
        </div>
      </div>
    )
  }
}

export default ImageCarousel;