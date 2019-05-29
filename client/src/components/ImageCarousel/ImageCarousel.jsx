import React, { Component } from 'react';
import style from './ImageCarousel.scss'

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topArrow: {display: 'none'},
      downArrow: {display: 'block'},
      carouselView: {transform: 'translate3d(0px, 0%, 0px)'}
    }
    this.sliderHandler = this.sliderHandler.bind(this);
  }

  sliderHandler(arrow) {
    let percentage = -100 * (this.props.imageUrls[this.props.imageUrlsIndex].length - 5);
    if (arrow === 'down') {
      this.setState({
        carouselView: {transform: `translate3d(0px, ${percentage}%, 0px)`, transition: 'transform .3s'},
        topArrow: {display: 'block'},
        downArrow: {display: 'none'}
      })
    } else {
      this.setState({
        carouselView: {transform: 'translate3d(0px, 0%, 0px)', transition: 'transform .3s'},
        topArrow: {display: 'none'}, 
        downArrow: {display: 'block'}
      })
    }

  }

  render() {
    return (
      <div className={style.imageCarouselContainer}>
        <div className={style.carouselContainer}>
          <div className={style.arrowAndPhotoContainer}>
            <div className={style.arrowUpSVGContainer} style={this.state.topArrow} onClick={() => this.sliderHandler('up')}>
              <svg xmlns="http://www.w3.org/2000/svg" height="15" width="24" viewBox="0 0 24 22">
                <path d="M11.998 1L23 12M11.998 1L1 11.992" stroke="#393939" strokeWidth="1px"></path>
              </svg>
            </div>
            <div className={style.carouselPhotoContainer}>
              {this.props.imageUrls[this.props.imageUrlsIndex].map((image, index) => <img className={style.carouselImage} style={this.state.carouselView} onClick={() => this.props.updateSelectedImg(index)} src={image} key={index}></img>)}
            </div>
            <div className={style.arrowDownSVGContainer} style={this.state.downArrow} onClick={() => this.sliderHandler('down')}>
              <svg xmlns="http://www.w3.org/2000/svg" height="15" width="20" viewBox="0 0 10 11">
                <path d="M6.002 6L1 1m5.002 5L11 1.002" stroke="#737373" strokeWidth="1px"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className={style.selectedImgContainer}>
          <img className={style.selectedImg} src={this.props.imageUrls[this.props.imageUrlsIndex][this.props.selectedImg]}></img>
        </div>
      </div>
    )
  }
}

export default ImageCarousel;