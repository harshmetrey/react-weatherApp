import React from 'react';

const Weather = props => (
        <div>
            <div className="container pt-3">
            {props.error && <p className="text-danger text-right">{props.error}</p> }
                    <div className="row">
                        {props.city && props.country &&  <div className="col-md-6 text-center">
                            <div className="card btm-border" style={{'boxShadow': '0 3px 6px #00000038'}}>
                                <div className="card-body">
                                    <i className="fa fa-user fa-3x"></i>
                                    <span className="px-3 font-30 font-md text-primary"> <p>Location: {props.city} , {props.country}</p></span>
                                </div>
                            </div>
                        </div>}
                        {props.temperature && <div className="col-md-6 text-center">
                            <div className="card btm-border " style={{'boxShadow': '0 3px 6px #00000038'}}>
                                <div className="card-body">
                                    <i className="fa fa-user fa-3x"></i>
                                    <span className="px-3 font-30 font-md text-primary"><p>Temperature: {props.temperature}</p></span>
                                </div>
                            </div>
                        </div>}
                        {props.humidity &&<div className="col-md-6 text-center pt-4">
                            <div className="card btm-border" style={{'boxShadow': '0 3px 6px #00000038'}}>
                                <div className="card-body">
                                    <i className="fa fa-user fa-3x"></i>
                                    <span className="px-3 font-30 font-md text-primary"><p>Humidity: {props.humidity}</p></span>
                                </div>
                            </div>
                        </div>}
                        { props.description && <div className="col-md-6 text-center pt-4">
                            <div className="card btm-border" style={{'boxShadow': '0 3px 6px #00000038'}}>
                                <div className="card-body">
                                    <i className="fa fa-user fa-3x"></i>
                                    <span className="px-3 font-30 font-md text-primary"><p>conditions: {props.description}</p></span>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
    )

export default Weather;