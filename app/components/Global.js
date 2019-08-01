import React,{Component} from 'react';
import { FormGroup, InputGroup, FormControl,Glyphicon } from 'react-bootstrap';
import Gallery from './Gallery';

class Global extends Component{
  constructor(props){
    super(props);
    this.state = {
      query : '',
      items : []
    }
  }
  search(){
    const Base_Url = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${Base_Url}${this.state.query}`,{method: 'GET'} )
    .then(respon => respon.json())
    .then(json => {
      let{ items } = json;
      this.setState({items})
    });
  }
  render() {
    return (
      <div className='Global'>
      <h2>Search Book</h2>
      <FormGroup>
        <InputGroup>
          <FormControl
          type = "text"
          placeholder = "Search for book"
          onChange = {even => this.setState({query:even.target.value})}
          onKeyPress = {even =>{
            if(even.key == 'Enter'){
              this.search();
            }
          }}
          />
          <InputGroup.Addon onClick = {() => this.search()}>
          <button type="button">Search</button>
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>
      <Gallery items = {this.state.items}/>
      </div>
    )
  }
}

export default Global;
