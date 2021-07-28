import React, { Component } from 'react';
import Card from './card';
import Pokedex from './pokedex';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = ({
      isSearch: false,
      search: 'sunil'
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
    // (this.state.search.length > 0) ? this.props.pokemon = searchArray : this.setState({ search: '' });
  };


  render () {
    // console.log(this.props);
    return (
      <>
        <div className="container">
          <div className="row">
            <h1 className="text-center"> Search Pokedex</h1>
            <div className="col-sm-6">
              <input type="text" name="search"  className = 'form-control'  onChange={ this.handleChange }/>
            </div>

            <div className="col-sm-6">
              <button className = 'btn btn-danger' onClick={this.handleClick}> Search </button>
            </div>
          </div>

          <div className="row">
            {
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