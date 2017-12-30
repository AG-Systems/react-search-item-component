import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Search section_list={["title", "description"]} highlight_color_text={"black"} highlight_color_bg={"#21ce99"}data={[{"id":25,"created_at":"2017-12-06T09:45:55.237Z","updated_at":"2017-12-06T09:45:55.237Z","title":"Star Wars","img":"https://i.imgur.com/T5KsB0l.jpg","paid":null,"description":"Star Wars is an American epic space opera media franchise, centered on a film series created by George Lucas. It depicts the adventures of various characters 'a long time ago in a galaxy far, far away'.","hashed_url":"auriga","youtube_url":null},{"id":26,"created_at":"2017-12-06T09:45:55.248Z","updated_at":"2017-12-06T09:45:55.248Z","title":"The Social Network","img":"https://i.imgur.com/QDw4ycl.gif","paid":null,"description":"In 2003, Harvard undergrad and computer genius Mark Zuckerberg (Jesse Eisenberg) begins work on a new concept that eventually turns into the global social network known as Facebook.","hashed_url":"maxadorable","youtube_url":null},{"id":27,"created_at":"2017-12-06T09:46:19.390Z","updated_at":"2017-12-06T09:46:19.390Z","title":"How To Invest Money On Your Phone!","img":"https://i.ytimg.com/vi/rsqdJScOl6c/hqdefault.jpg","paid":null,"description":"Start investing your money with your phone really easily and quickly Topic: How To Invest Money On Your Phone! Thanks for Watching! Please LIKE the ...","hashed_url":"f0350c5d","youtube_url":"rsqdJScOl6c"},{"id":28,"created_at":"2017-12-30T02:30:27.935Z","updated_at":"2017-12-30T02:30:27.935Z","title":"Which cryptocurrency is going to crash?","img":"https://i.ytimg.com/vi/Z9Dx5DzfzFQ/hqdefault.jpg","paid":null,"description":"It has been such a been bull market past few months that it's really hard to know which coins are actually fads and real. My recommendation is to read as much as you can on each crypto you...","hashed_url":"42ee3b4c","youtube_url":"Z9Dx5DzfzFQ"}]}/>
      </div>
    );
  }
}

export default App;
