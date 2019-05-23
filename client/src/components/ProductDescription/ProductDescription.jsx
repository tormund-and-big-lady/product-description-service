import React, { Component } from 'react';
import style from './ProductDescription.scss';
import Star from './star.jsx';

class ProductDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 'Size',
      color: 'Color',
      dropdown: 'none'
    }
    this.onClickSizeHandler = this.onClickSizeHandler.bind(this);
    this.onClickDropdownHandler = this.onClickDropdownHandler.bind(this);
    this.onClickColorHandler = this.onClickColorHandler.bind(this);
  }

  onClickSizeHandler(size) {
    this.setState({ size }, () => this.setState({ dropdown: 'none' }))
  }

  onClickColorHandler(color) {
    this.setState({ color }, () => this.setState({ dropdown: 'none' }))
  }
  
  onClickDropdownHandler(dropdown) {
    this.setState({ dropdown }, () => console.log(this.state.dropdown))
  }

  render() {
    return (
      <div className={style.mainContainer}>
        <div className={style.title}>
          <div className={style.starsAndReviewCount}>
            <span className={style.starsContainer}>
              {this.props.starsArray.map((star, index) => <Star star={star} key={index}/>)}
            </span>
            <span className={style.reviews}>
              {`(${this.props.reviews})`}
            </span>
          </div>
          <div className={style.productNameContainer}>
            <h1 className={style.productName}>
              {this.props.productName}
            </h1>
          </div>
          <div className={style.designerContainer}>
            <div className={style.designer}>
              <a className={style.designerButton} href="#">{this.props.designer}</a>
            </div>
          </div>
        </div>
        <div className={style.priceContainer}>
          <span className={style.price}>
            ${this.props.price}.00
          </span>
        </div>
        <div className={style.descriptionContainer}>
          <div className={style.description}>
            {this.props.description}
          </div>
        </div>
        <div className={style.fitSizeColorContainer}>
          <div className={style.fitContainer}>
            <span className={style.fit}>Fit</span>
            <span className={style.fitSize}>{this.props.fit}</span> 
          </div>
          <div className={style.sizeContainer}>
            <div className={style.sizeBox} onClick={() => this.onClickDropdownHandler('size')}>
              <span className={style.boxText}>{this.state.size}</span>
              <span className={style.carrot}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="12" width="13" viewBox="0 0 129 129">
                  <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                </svg>
              </span>
            </div>
            {this.state.dropdown === 'size' && (
              <div className={style.dropdownContainer}>
                <span className={[style.dropdownContainerBox, style.dropdownTitle].join(' ')} onClick={() => this.setState({ dropdown: 'none' })}>Choose a size</span>
                {this.props.sizes.map((size, index) => <span className={style.dropdownContainerBox} key={index} href="#" onClick={() => this.onClickSizeHandler(size)}>{size}</span >)} 
              </div>
            )}
          </div>
          <div className={style.sizeGuideContainer}>
            <a href='#' className={style.sizeGuide}>
              {this.props.designer} Size Guides
            </a>
          </div>
          <div className={style.sizeContainer}>
            <div className={style.sizeBox} onClick={() => this.onClickDropdownHandler('color')}>
              <span className={style.boxText}>{this.state.color}</span>
              <span className={style.carrot}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="12" width="13" viewBox="0 0 129 129">
                  <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/>
                </svg>
              </span>
            </div>
            {this.state.dropdown === 'color' && (
              <div className={style.dropdownContainer}>
                <span className={[style.dropdownContainerBox, style.dropdownTitle].join(' ')} onClick={() => this.setState({ dropdown: 'none' })}>Choose a color</span>
              {this.props.colors.map((color, index) => (
                <span className={style.dropdownContainerBox} key={index} href="#" onClick={() => this.onClickColorHandler(color)}>
                  <span>
                    <img className={style.colorSelectorImage} src={this.props.colorSelectorArray[index]}></img>
                  </span>
                  <span className={style.colorText}>{color}</span>
                </span>
              ))}
              </div>
            )}
          </div>
        </div>
        <div className={style.colorContainer}>
        {this.props.colors.map((color, index) => (
          <span key={index} onClick={() => this.onClickColorHandler(color)}>
            <img className={style.colorSelectorImage} src={this.props.colorSelectorArray[index]}>
          </img>
          </span>
        ))}
        </div>
        <div className={style.quantityContainer}>
          <input type='text' placeholder='1' className={style.quantity}></input>
        </div>
        <div className={style.bagContainer}>
          <button className={style.button}>Add to Bag</button>
        </div>
        <div className={style.wishListContainer}>
          <a href='#' className={style.wishList}>
            Add to Wish List
          </a>
        </div>
        <div>
          <div className={style.buyContainer}>
            <div className={style.buy}>Buy & Pickup</div>
          </div>
          <div className={style.availabilityContainer}>
            <div className={style.availability}>Check availability within 100 miles of:</div>
          </div>
          <div className={style.zipAndButton}>
            <input type='text' placeholder='Zip code' className={style.zipCode}></input>
            <button className={style.button}>Check Locations</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDescription;
