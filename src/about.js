import React,{Component} from 'react';
import {Link} from 'react-router-dom';

var FontAwesome = require('react-fontawesome');


class About extends Component{

    update=()=>{
        this.forceUpdate()
        window.scrollTo(0, 500);
      }

    render(){

        //const pathname = this.props.location
               // console.log(pathname.pathname)

        return(
            <div>
                <div>
                    <h1 className="home-title"> <FontAwesome name='angle-right'/> About <span style={{color:'green'}}>CONTIVIC automation solutions</span></h1>
                    <hr style={{width: '40%', marginLeft:'5%'}}/>
                    <div className="about_content" style={{Width:"90%"}}>
                        <div style={{Width:"80%", paddingRight:'2%'}}>
                            <h2 style={{color:'grey'}} className="intro-header">
                            <span style={{color:'green', fontWeight:"bold"}}>CONTIVIC</span> is a privately-owned company which offers Automation and Electrical services and products for Homes, Farms and Manufacturing Industries. 
                            </h2>
                            <p className="text-paragraphs">
                            The founder and Managing Director of <b>CONTIVIC</b> is an experienced Mechatronics Engineer who has worked in the Manufacturing Industry and in an Automation Solutions company. 
                            </p>
                            <p className="text-paragraphs">
                            <b>CONTIVIC</b> aims to provide innovative solutions regardless of complexity whilst reducing the clients’ operational costs. We recognize the potential of changing the landscape of many industries by taking advantage of the technology available to us.  
                            </p>
                        </div>
                        <div style={{Width:"80%",paddingLeft:'2%'}}>
                            <h2 className="market-header">
                            <span style={{color:'green'}}>Our</span> <span style={{color:'grey'}}>Target Market</span>
                            </h2>
                            <hr style={{color:'grey', width:"40%", marginLeft:"0%"}}/>
                            <h3 style={{color:'grey'}}>
                            <b style={{color:'black'}}>CONTIVIC</b>'s main target market is farmers, mainly providing Agricultural Irrigation which includes Central Control Irrigation Software. We want to change the farming landscape by introducing/improving automation.
                            </h3>
                            <p className="text-paragraphs" style={{fontSize:20}}>
                                Markets that we interested in are as follows: 
                            </p>
                            <ul className="market">
                                <li className="list-item">
                                <FontAwesome
                                className="super-crazy-colors"
                                name="check-square"
                                
                                style={{marginRight:"1%", color:'green', fontSize:'18px'}}
                                />
                                 Home Automation – Primarily operate as installers
                                </li>
                                <li className="list-item">
                                <FontAwesome
                                className="super-crazy-colors"
                                name="check-square"
                                style={{marginRight:"1%", color:'green', fontSize:'18px'}}
                                />
                                Home Wiring  for RDPs
                                </li>
                                <li className="list-item">
                                <FontAwesome
                                className="super-crazy-colors"
                                name="check-square"
                                style={{marginRight:"1%", color:'green', fontSize:'18px'}}
                                />
                                Turf and Landscape Irrigation
                                </li>
                                <li className="list-item">
                                <FontAwesome
                                className="super-crazy-colors"
                                name="check-square"
                                style={{marginRight:"1%", color:'green', fontSize:'18px'}}
                                />
                                Sport-field Irrigation
                                </li>
                                <li className="list-item">
                                <FontAwesome
                                className="super-crazy-colors"
                                name="check-square"
                                style={{marginRight:"1%", color:'green', fontSize:'18px'}}
                                />
                                Green Wall & Indoor Irrigation
                                </li>
                                <li className="list-item">
                                <FontAwesome
                                className="super-crazy-colors"
                                name="check-square"
                                style={{marginRight:"1%", color:'green', fontSize:'18px'}}
                                />
                                Smart Irrigation Software
                                </li>
                                <li className="list-item">
                                <FontAwesome
                                className="super-crazy-colors"
                                name="check-square"
                                style={{marginRight:"1%", color:'green', fontSize:'18px'}}
                                />
                                Pump stations
                                </li>
                                <li className="list-item">
                                <FontAwesome
                                className="super-crazy-colors"
                                name="check-square"
                                style={{marginRight:"1%", color:'green', fontSize:'18px'}}
                                />
                                Storage tanks and reservoirs
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="images_container">
                    <div className="image-list-item">
                        <img src={require('./micro.jpg')} className="about_image">
                        </img>
                    </div>
                   <div className="image-list-item">
                   <img src={require('./phMeter.jpg')} className="about_image">
                        </img>
                   </div>
                    <div className="image-list-item">
                    <img src={require('./Pump.png')} className="about_image">
                    </img>
                    </div>
                    <div className="image-list-item">
                    <img src={require('./indoors.jpg')} className="about_image">
                    </img>
                    </div>
                    <div className="image-list-item">
                    <img src={require('./scada.png')} className="about_image">
                    </img>
                    </div>
                    <div className="image-list-item">
                    <img src={require('./Industrial.jpg')} className="about_image">
                    </img>
                    </div>
                    <div className="image-list-item">
                    <img src={require('./Valve.PNG')} className="about_image">
                    </img>
                    </div>
                    <div className="image-list-item">
                    <img src={require('./lights.jpg')} className="about_image">
                    </img>
                    </div>
                    
                </div>
               
            </div>
        )
    }
}

export default About