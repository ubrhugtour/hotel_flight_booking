import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopBar from '../../components/layout/Top-Header';
import Search from '../../components/layout/Search';
import Header from '../../components/layout/Header';
import FooterBottom from '../../components/layout/FooterBottom';




class contact extends Component {

 componentDidMount(){
    document.title = "Contact"
  }
	
render () {


    

 return (

 	          <div>
        {/*====== LOADER =====*/}
        {/*======== SEARCH-OVERLAY =========*/}       
        {/*<Search/>*/}
        {/* end overlay */}
        {/*============= TOP-BAR ===========*/}
        <TopBar/>
        {/* end top-bar */}
        <Header/>
        {/* end navbar */}
        {/* end sidenav-content */}
        {/*================ PAGE-COVER ===============*/}
        <section className="page-cover" id="cover-contact-us">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">Contact Us </h1>
                <ul className="breadcrumb">
                  <li><Link to="/">Home</Link></li>
                  <li className="active">Contact Us </li>
                </ul>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end page-cover */}
        {/*===== INNERPAGE-WRAPPER ====*/}
        <section className="innerpage-wrapper">
          <div id="contact-us" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-5 no-pd-r">
                  <div className="custom-form contact-form">
                    <h3>Contact Us</h3>
{/*                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    */}                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" required />
                        <span><i className="fa fa-user" /></span>
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" required />
                        <span><i className="fa fa-envelope" /></span>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Mobile No." required />
                        <span><i className="fa fa-mobile" /></span>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject" required />
                        <span><i className="fa fa-info-circle" /></span>
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" rows={4} placeholder="Your Message" defaultValue={""} />
                        <span><i className="fa fa-pencil" /></span>
                      </div>
                      <button className="btn btn-orange btn-block">Send</button>
                    </form>
                  </div>{/* end contact-form */}
                </div>{/* end columns */}
                <div className="col-sm-12 col-md-7 no-pd-l">
                  <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509729.487836256!2d-123.77686152799836!3d37.1864783963941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia!5e0!3m2!1sen!2s!4v1490695907554" allowFullScreen />
                  </div>{/* end map */}
                </div>{/* end columns */}
              </div>{/* end row */}
            </div>{/* end container */}   
          </div>{/* end contact-us */}
        </section>{/* end innerpage-wrapper */}
        {/*======================= BEST FEATURES =====================*/}
        <section id="best-features" className="banner-padding black-features">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-dollar" /></span>
                  <h3>Best Price Guarantee</h3>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-lock" /></span>
                  <h3>Safe and Secure</h3>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-thumbs-up" /></span>
                  <h3>Best Travel Agents</h3>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-bars" /></span>
                  <h3>Travel Guidelines</h3>
                </div>{/* end b-feature-block */}
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end best-features */}
        {/*========================= NEWSLETTER-1 ==========================*/}
        <section id="newsletter-1" className="section-padding back-size newsletter"> 
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <h2>Subscribe Our Newsletter</h2>
                <p>Subscibe to receive our interesting updates</p>  
                <form>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="email" className="form-control input-lg" placeholder="Enter your email address" required />
                      <span className="input-group-btn"><button className="btn btn-lg"><i className="fa fa-envelope" /></button></span>
                    </div>
                  </div>
                </form>
              </div>{/* end columns */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end newsletter-1 */}
        {/*======================= FOOTER =======================*/}
        <FooterBottom/>
      {/* end footer */}
      </div>
 
 	)
  }


}

export default connect(state => state)(contact);