import React, { Component } from 'react';
import Card from './card';
import Pokedex from './pokedex';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = ({
      search: '',
      searchData: ''
    });
  }
  static defaultProps = Pokedex;

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleClick = () => {
    
    let search_value = this.state.search;
    let searchArray = [];

    for(let i = 0; i < this.props.pokemon.length; i++) {

      if (this.props.pokemon[i].name.includes(search_value.toLocaleLowerCase())) {
        searchArray.push(this.props.pokemon[i]);
      }
    }
    console.log(searchArray);
    this.setState({
      searchData: searchArray,
      search: search_value,
    })
  };

  resetHandleClick = () => {
    this.setState({
      searchData: '',
      search: '',
    })
  }

  render () {
    // console.log(this.props);
    return (
      <>
        <div className="container">
          <div className="row">
            <h1 className="text-center"> Search Pokedex</h1>
            <div className="col-sm-6">
              <input type="text" name="search"  className = 'form-control'  onChange={ this.handleChange } value = {this.state.search}/>
            </div>

            <div className="col-sm-6">
              <button className = 'btn btn-danger' onClick={this.handleClick}> Search </button>
              <button className = 'btn btn-danger' onClick={this.resetHandleClick} style ={{marginLeft:"15px"}}> Reset </button>
            </div>
          </div>

          <div className="row">
            {
              (this.state.searchData.length !== 0) 
              ?
              this.state.searchData.map((item) => {
                return <Card key={item.id} data={item} />
              })
              :
              this.props.pokemon.map((item) => {
                return <Card key={item.id} data={item} />
              })
            }
          </div>
        </div>
      </>
    );
  };
};

export default App;