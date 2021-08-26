import React, { Component } from 'react';
import Reviews from './Reviews';
import './App.css'
import Sidebar from './Sidebar';
import AverageRating from './AverageRating';
import SentimentAnalysis from './SentimentAnalysis';
import WebsiteVisitors from './WebsiteVisitors';

class App extends Component {
    render() {
        return (
            <div>
                <div className='board'>
                    <Sidebar />
                    <Reviews />
                    <AverageRating />
                    <SentimentAnalysis />
                    <WebsiteVisitors />
                </div>
            </div>
        );
    }
}

export default App;
