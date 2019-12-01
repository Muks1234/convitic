import React,{Component} from 'react';
var FontAwesome = require('react-fontawesome');

class Services extends Component{
    render(){
        return(
            <div className="services_container">
                <h1 className='services_header'>
                <FontAwesome name='angle-right'/> <span style={{color:'green'}}> <span style={{color:'black'}}>CONTIVIC</span> Services</span>
                </h1>
                <h3 style={{color:'black'}}>With the rising cost of living it is imperative that farmers rethink how they utilize their resources to maximize profit.
                </h3>
                <h3 style={{color:'grey'}}>
                CONTIVIC offers innovative automation solutions for the Agriculture Industry and they are as follows:  
                </h3>
                <div style={{marginTop:'4%'}} className="services_inner_container">
                    <div className="service-item">
                        <div>
                            <img className="service_pic" src={require('./micro.jpg')}></img>
                        </div>
                        <div className="service_text">
                        We provide Time based control of pumps, irrigation system, lighting etc, thus reduction in your labor costs and utilities.  

                        </div>
                    </div>
                    <div className="service-item">
                        <div>
                            <img className="service_pic" src={require('./feedback.png')}></img>
                        </div>
                        <div className="service_text">
                        Remote control of farming equipment, this gives the farmer wide reaching control of their equipment thus eliminating the need to physically turn systems on and off
                        </div>
                    </div>
                    <div className="service-item">
                        <div>
                            <img className="service_pic" src={require('./phMeter.jpg')}></img>
                        </div>
                        <div className="service_text">
                        Sensors are pivotal to ensuring optimal conditions for crops. Measuring key variables such as soil moisture, temperature and humidity will allow the farmer to make optimal use of utilities. Sensor also provides the ability to generate data which can be used to measure utility usage. 
                        </div>
                    </div>
                    <div className="service-item">
                        <div>
                            <img className="service_pic" src={require('./scada.png')}></img>
                        </div>
                        <div className="service_text">
                        All the components previously mentioned are integrated into an HMI for centralized monitoring and control providing convenience and easy control
                        </div>
                    </div>
                    
                </div>

                <br/>
                <h3 style={{color:'grey'}}>
                    We are also the proud suppliers and installers of the following products:
                </h3>
                 <ul className="products">
                     <li>
                     Programmable Automation Controllers 
                     </li>
                     <li>
                     Variable Speed Drives
                     </li>
                     <li>
                     Motor Control Center Panels 
                     </li>
                     <li>
                     Fluorescent lights
                     </li>
                     <li>
                     Sensors
                     </li>
                     <li>
                     GSM modules 
                     </li>
                     <li>
                     Visualization equipment 
                     </li>
                 </ul>
                <h3 className="htext">
                These Automation Solutions are realized by making use of state-of-the-art Automation Infrastructure. 
                </h3>
                <h3 className="htext">
                CONTIVIC Engineers are well-versed in programming and configuring PAC/PLC and VSDs from a wide range of vendors like Allen Bradley, SIEMENS, ABB etc.  
                </h3>
                <br/>
            </div>
        )
    }
}

export default Services
