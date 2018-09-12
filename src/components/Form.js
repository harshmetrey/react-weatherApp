import React from 'react';

const Form = props => (
            <div style={{'marginTop': '35px'}}>
                <div className="container">
                     <div className="card btm-border" style={{'boxShadow': '0 3px 6px #00000038'}}>
                         <div className="card-body">
                            <form className="form" onSubmit = {props.getWeather}>
                                <div className="form-group">
                                    <label>City</label>
                                        <input type="text" name="city" className="form-control"/>
                                </div>
                                <div className="form-group">
                                     <label>Country</label>
                                         <input type="text" name="country" className="form-control"/>
                                </div>
                                    <button className="btn btn-primary btn-block">Get Weather</button>
                                    <button type="reset" className="btn btn-danger btn-block" onClick={props.handleReset}>Reset</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );

export default Form;