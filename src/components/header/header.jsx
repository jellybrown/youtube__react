import React, { Component } from 'react';


class Header extends Component {
   
    inputRef = React.createRef();
    
   handleSearch = () => {
        console.log("search");
       const value = this.inputRef.current.value;
       
       this.props.onSearch(value);
       console.log(value)
      this.inputRef.current.value = '';
    }

    onClick = () => {
        this.handleSearch();
    }

    onKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleSearch();
        }
    }


    render() {
        return (
            <header>
                <h1>
                    <a href="#a">
                        <img src="./images/logo.png" alt="logo"/>
                        <span className="name">Jintube</span>
                    </a>
                </h1>
                <form className="search_header">
                    <input ref={this.inputRef} type="search" id="search_form" onClick={this.onClick} onKeyPress={this.onKeyPress}/>
                    <label htmlFor="search_form"></label>
                    <button type="submit" className="search_btn"><img src="./images/search.png" alt="search icon"/></button>
               </form>
            </header>
        );
    }
}

export default Header;