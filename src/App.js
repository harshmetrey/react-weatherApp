import React from 'react';
//components
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

//constants
const API_KEY = "ae7a0855bc77c1083a0b6690ae487c96";

class App extends React.Component {
    state = {
      temperature : '',
      city: '',
      humidity : '',
      description : '',
      error : '',
  }

  handleReset = (props) => {
    this.setState({
      temperature : '',
      city: '',
      country: '',
      humidity: '',
      description :'',
      error: '',
    });
  }

    getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();

      if(city && country) {
          if(!data.main){
            return this.setState({error : data.message})
          }
        this.setState({
          temperature : data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description : data.weather[0].description,
          error: '',
        });
      } else {
        this.setState({
          temperature : '',
          city: '',
          country: '',
          humidity: '',
          description :'',
          error: 'Please enter city or country',
        });
      }
    }
     
  render () {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
        <Titles/>
            </div>
            <div className="col">
        <Form getWeather = {this.getWeather}
          handleReset = {this.handleReset} />
            </div>
          </div>
          <Weather temperature = {this.state.temperature}
                 city = {this.state.city}
                 country  = {this.state.country}
                 humidity = {this.state.humidity}
                 description = {this.state.description}
                 error = {this.state.error}

        />
        </div>
      </div>
    );
  }
}

export default App;
