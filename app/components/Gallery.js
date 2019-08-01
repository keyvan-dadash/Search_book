import React,{Component} from 'react';

class Gallery extends Component{
  render(){
    return(
      <div>
      {
        this.props.items.map((item,index) => {
          let {title,imageLinks,infoLink} = item.volumeInfo;
          return(
            <div key ={index} class="book">
              <img src = {imageLinks != undefined ? imageLinks.thumbnail : ''}
              alt = "book image" class="book-img"/>
              <div class="book-text">
                <a key={index} href={ infoLink } target="_blank">{title}</a>
              </div>
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default Gallery;
