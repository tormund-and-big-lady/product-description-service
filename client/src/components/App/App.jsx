import React, { Component } from 'react';
// import style from './App.scss'
import axios from 'axios';
import ProductDescription from '../ProductDescription/ProductDescription.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      productName: '', 
      designer: '', 
      price: 0, 
      stars: 0, 
      reviews: 0, 
      description: '', 
      fit: '', 
      sizes: [], 
      colors: [], 
      imageUrlsColor1: [], 
      imageUrlsColor2: [], 
      colorSelectorArray: [],
      inStore: true,
      starsArray: [0,0,0,0,0]
    }
    this.fetchData = this.fetchData.bind(this);
    this.updateStarsArray = this.updateStarsArray.bind(this);
    this.updateColorSelectorArray = this.updateColorSelectorArray.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('/api/productDescription')
      .then(data => this.setState({
        productName: data.data[0].productName,
        designer: data.data[0].designer,
        price: data.data[0].price,
        stars: data.data[0].stars,
        reviews: data.data[0].reviews,
        description: data.data[0].description,
        fit: data.data[0].fit,
        sizes: data.data[0].sizes,
        colors: data.data[0].colors,
        imageUrlsColor1: data.data[0].imageUrlsColor1,
        imageUrlsColor2: data.data[0].imageUrlsColor2,
        inStore: data.data[0].inStore 
      }))
      .then(() => this.updateStarsArray())
      .then(() => this.updateColorSelectorArray())
      .catch(err => console.log(err));
        
  }

  updateStarsArray() {
    let starsArray = [];
    let starCount = this.state.stars;
    for (let i = 0 ; i < 5; i++) {
      if (starCount > 0) {
        starsArray.push(1);
        starCount -= 1;
      } else {
        starsArray.push(0);
      }
    }
    this.setState({
      starsArray
    })
  }

  updateColorSelectorArray() {
    let colorSelectorArray = [this.state.imageUrlsColor1[this.state.imageUrlsColor1.length - 1]];
    if (this.state.imageUrlsColor2.length > 0) {
      colorSelectorArray.push(this.state.imageUrlsColor2[this.state.imageUrlsColor2.length - 1])
    }
    this.setState({
      colorSelectorArray
    })
  }

  render() {
    return (
      <div>
        <ProductDescription productName={this.state.productName} designer={this.state.designer} price={this.state.price} starsArray={this.state.starsArray} reviews={this.state.reviews} description={this.state.description} fit={this.state.fit} sizes={this.state.sizes} colors={this.state.colors} colorSelectorArray={this.state.colorSelectorArray}/>
      </div>
    )
  }
}

export default App;