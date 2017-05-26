import React from 'react';
import Header from './Header';
import About from './About';
import AlbumComingSoon from './AlbumComingSoon';
import Landing from './Landing';
import Music from './Music';
import Videos from './Videos';
import Photos from './Photos';
import Calendar from './Calendar';
import Contact from './Contact';
import Links from './Links';
import Footer from './Footer';
import axios from 'axios';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            UpcomingGigs: [],
            RegisteredUser: {}
        }
    }

    updateUpcomingGigs({date: location}) {
        if (this.state.UpcomingGigs.length != 0) {
            this.setState(this.state.UpcomingGigs.push({date: location}));
        }
    }
    updateCurrentUser(id) {
        this.setState({CurrentUser: Number(id)})
    }

    render() {
      const childWithProp = React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child);
      });

        return (
            <div className="main">
                <Header/>
                <Landing/>
                <AlbumComingSoon/>
                <Music/>
                <Videos/>
                <Photos/>
                <Calendar/>
                <Contact/>
                <Links/>
                <Footer/>
            </div>
        );
    }
}

export default App;
