import React, {Component} from 'react';

class Pet extends Component {
    //return some html that we want to put in the DOM
    render() {
        return (
            // have to create className instead of class because babel doesnt know the difference between html and javascript
            <div className="card">
                <h2 className="name">Green Eyes</h2>
                <img src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                     alt="random cat" />
                <h5 style={{fontSize: "2em", margin: "2px"}}>Hobbies</h5>
                <HobbyList />
            </div>
        )
        // ONLY NEED FOR NON JSX?BABEL
        // const h2 = ReactDOMFactories.h2(null, "Green Eyes");
        // const img = ReactDOMFactories.img({
        //     src: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", 
        //     alt: "random cat"
        // });
        // return ReactDOMFactories.div(null, h2, img);
    }
}