import React,{Component} from 'react';
import './App.css';
import About from './about';
import Services from './services';
import {BrowserRouter as Router, Switch, Route, Link, Redirect, HashRouter} from 'react-router-dom';
import Form from './form'

var FontAwesome = require('react-fontawesome');


class App extends Component{

  state={
    buttonOn: true
  }

  update=()=>{
    this.forceUpdate()
    this.setbutton()
  }

  updateForService = () => {
    this.forceUpdate()
    window.scrollTo(0, 500);
    this.setState({
      buttonOn:false
    })
  }

  updateForServicediff =() => {
    this.forceUpdate()
    window.scrollTo(0, 500);
    this.setState({
      buttonOn:false
    })
  }

  setbutton = () => {
    this.setState({
      buttonOn:true
    })
  }

  render(){

    
    const href= window.location.hash
    //console.log(window.location.hash)
    return (
      <HashRouter>
      <div>
        <div className="navigation">
          <div className="logo_mission_statement">
          <div>
          <img src={require('./logo.png')} alt='mylogo' className="logo">
          </img>
          <span className="header">
          Automation Solutions for Irrigation and Pump Systems {' '}
          <span className="quote-button" 
          style={{color:'#001F6E', border: 'solid #001F6E 2px', fontSize:'20px'}}
          id="quote-button-one"
          onClick={this.updateForServicediff}
          >
            <Link to='/contact' style={{color:  '#001f6e', textDecoration:'none'}}>
              Talk to Us
            </Link>
          </span>
          </span>
          <h3 className="header-mobile">Automation Solutions for Irrigation and Pump Systems</h3>
          </div>
          
          </div>
          
          <ul key={href}>
            <li className={(href==="#/about")? "nav-item-active": "nav-item"}
            onClick={()=>this.update()}
            >
              <Link to="/about" style={{color:'white', textDecoration:'none'}}
              >HOME</Link>
            </li>
            <li className={(href==="#/services")? "nav-item-active": "nav-item"}
            onClick={()=>this.updateForServicediff()}
            >
              <Link to="/services" style={{color:'white', textDecoration:'none'}}>SERVICES</Link>
            </li>
            <li className={(href==="#/contact")? "nav-item-active": "nav-item"}
            onClick={()=>this.updateForServicediff()}
            >
              <Link to = 'contact' style={{color:'white', textDecoration:'none'}}>
              CONTACT US
              </Link>
              </li>
          </ul>
        </div>
        <div className="background-image">
          <span className="quote-button" id="quote-button-two" onClick={this.updateForServicediff}>
            <Link to='/contact' style={{color:  'white', textDecoration:'none'}}>
              Talk to Us
            </Link>
            </span>
        </div>
        <div>
            <Switch>
              <Route exact path="/about" component = {About}/>
              <Redirect from="/" exact to="/about" />
              <Route exact path='/services' component = {Services}/>
              <Route exact path='/contact' component = {Form}/>
            </Switch>
        </div>
             {this.state.buttonOn && <span
                    onClick={()=>this.updateForService()}
                >
                    <Link to='/services' style={{textDecoration:'none'}}>
                    <h2  className="htext" id="goto" style={{border:'solid grey 1px', margin:'auto', width:"13%", padding:"1%", marginBottom:"2%", marginTop:"20px"}}>
                    Go to services
                    </h2>
                    </Link>
                </span>}
        <div className="contact_us">
          <div>
            <img className="logo_footer" src ={require('./logo.png')}></img>
            <p style={{ width:'30%'}} className="footer_text">
            CONTIVIC is a privately-owned company which offers Automation and Electrical services and products for Homes, Farms and Manufacturing Industries. 
            
            </p>
          </div>
          <div style={{color:'white'}}>
              <h1 className="contacts_header">Contact us</h1>
              <div className="contact-item">
               <FontAwesome name="phone"/> :  +27(72) 924-3869
              </div>
              <div className="contact-item">
                <FontAwesome name="envelope"/> : Mdidishe@convitic.co.za
              </div>
              <div className="contact-item" style={{display:'flex'}}>
                <FontAwesome name="map-marker" style={{verticalAlign:'-5px', paddingRight:'2px'}}/> :
                <div style={{marginLeft:'4px'}}>
                  <div>
                    30 Graniet Street
                  </div>
                  <div>
                    Reefhaven
                  </div>
                  <div>
                    Roodeport
                  </div>
                  <div>
                    1724
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="footer">
          &copy; 2019 CONTIVIC, All Rights Reserved. <a href="#" style={{color:'white', paddingLeft:'2px'}}> Privacy Policy</a>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
