# carousel-for-react



Carousel for React, an elegant Carousel Component. (http://othmaneblial.github.io/carousel-for-react/)



### Installation

```bash
npm install carousel-for-react --save
```



### [Demo](http://othmaneblial.github.io/carousel-for-react/)




### Example

```js
import React from 'react';
import {ReSelectSingle}  from 'carousel-for-react';

class App extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       selectedPosition: 0
     }
   }


   setSelectedPostion = (selectedPosition) => {
     this.setState({selectedPosition: selectedPosition});
   }




   render() {


      return (
         <div>
              <Carousel
                getSelectedPostion = {this.setSelectedPostion}
                carouselItems={[<Image image='1.jpeg' />, <Image image='2.jpg' />, <Image image='3.jpg' />, <Image image='4.jpeg' />, <Image image='5.jpeg' />]}
                width={900}
                height={500}
              />

         </div>
         );
   }
}

```



### Development
Want to run demos locally

```bash
git clone https://github.com/othmaneblial/carousel-for-react
npm install
yarn run dev-server
open http://localhost:8080
```
