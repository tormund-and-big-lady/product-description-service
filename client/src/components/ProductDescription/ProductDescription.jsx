import React, { Component } from 'react';
import style from './ProductDescription.scss';

class ProductDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 'Size',
      sizeIndex: 'none',
      color: 'Color',
      colorIndex: 'none',
      dropdown: 'none'
    }
    this.onClickSizeHandler = this.onClickSizeHandler.bind(this);
    this.onClickDropdownHandler = this.onClickDropdownHandler.bind(this);
    this.onClickColorHandler = this.onClickColorHandler.bind(this);
  }

  onClickSizeHandler(size, sizeIndex) {
    this.setState({ size, sizeIndex }, () => this.setState({ dropdown: 'none' }))
  }

  onClickColorHandler(color, colorIndex) {
    if (typeof colorIndex === 'number' && colorIndex !== this.props.selectedImg) {
      this.props.updateImageUrlsIndex(colorIndex);
    }
    this.setState({ color, colorIndex }, () => this.setState({ dropdown: 'none' }))
  }
  
  onClickDropdownHandler(dropdown) {
    this.setState({ dropdown })
  }

  render() {
    return (
      <div className={style.mainContainer}>
        <div className={style.title}>
          <div className={style.starsAndReviewCount}>
            <span className={style.starsContainer}>
              {this.props.starsArray.map((star, index) => {
                {return star ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" key={index}>
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                ) : (
                  <svg className={style.empty} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" key={index}>
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                )}
              })}
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
              <a className={style.designerButton} href="#">{this.props.designer.toUpperCase()}</a>
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
                <span className={[style.dropdownContainerBoxTitle, style.dropdownTitle].join(' ')} onClick={() => this.setState({ dropdown: 'none' })}>Choose a size</span>
            {this.props.sizes.map((size, index) => {
              {return this.state.sizeIndex === index ? (
                <span className={style.selectedBox} key={index} href="#" onClick={() => this.onClickSizeHandler(size, index)}>{size}</span >
              ) : (
                <span className={style.dropdownContainerBox} key={index} href="#" onClick={() => this.onClickSizeHandler(size, index)}>{size}</span >
              )}
            })} 
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
                <span className={[style.dropdownContainerBoxTitle, style.dropdownTitle].join(' ')} onClick={() => this.setState({ dropdown: 'none' })}>Choose a color</span>
              {this.props.colors.map((color, index) => {
                {return this.state.colorIndex === index ? (
                  <span className={style.selectedBox} key={index} href="#" onClick={() => this.onClickColorHandler(color, index)}>
                    <span>
                      <img className={`${style.colorSelectorImage} ${style.colorSelectedImage}`} src={this.props.colorSelectorArray[index]}></img>
                    </span>
                    <span className={style.colorText}>{color}</span>
                  </span>
                ): (
                  <span className={style.dropdownColorContainerBox} key={index} href="#" onClick={() => this.onClickColorHandler(color, index)}>
                    <span>
                      <img className={style.colorSelectorImage} src={this.props.colorSelectorArray[index]}></img>
                    </span>
                    <span className={style.colorText}>{color}</span>
                  </span>
                )}})}
              </div>
            )}
          </div>
        </div>
        <div className={style.colorContainer}>
        {this.props.colors.map((color, index) => {
          {return this.state.colorIndex === index ? (
            <span key={index} onClick={() => this.onClickColorHandler(color, index)}>
              <img className={`${style.colorSelectorImage} ${style.colorSelectedImage}`} src={this.props.colorSelectorArray[index]}></img>
            </span>
          ) : (
            <span key={index} onClick={() => this.onClickColorHandler(color, index)}>
              <img className={style.colorSelectorImage} src={this.props.colorSelectorArray[index]}></img>
            </span>
          )}
        }
        )}
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
