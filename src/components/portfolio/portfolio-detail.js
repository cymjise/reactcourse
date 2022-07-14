import React, { Component } from "react";
import axios from "axios";

export default class PortfolioDetail extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}

    }
  }
  
  getPortfolioItem() {
    axios.get(`https://aidannguyen.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, 
    { withCredentials: true }
    ).then(response => {
      this.setState({
        portfolioItem: response.data.portfolio_item
      })
    }).catch(error => {
      console.log("error in get portfolio itme", error)
    })
  }

  componentDidMount() {
    this.getPortfolioItem()
  }

  render() {
    const {
      banner_image_url,
      category,
      description,
      name,
      logo_url,
      thumb_image_url,
      url
    } = this.state.portfolioItem;

    const bannerStyles = {
      background: "url(" + banner_image_url +")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    }

    const logoStyles = {
      width: "250px"
    }

    return (
      <div className="portfolio-detail-wrapper">
        <div className="banner" style={bannerStyles}>
          <img src={logo_url} style={logoStyles}/>
        </div>

        <div className="portfolio-detail-description-wrapper">
          <div className="description">{description}</div>
        </div>

        <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">Visit {name}</a>
        </div>
      </div>
    );
  }
}
