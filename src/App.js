import logo from './logo.svg';
import './App.css';
import { useState } from "react";



function App() {
  document.body.style ='background: rgb(56, 231, 213)';
  return (
  <div className="App">
    <div className='container image-caption-box'>
      <div className="row main-center">
      <div className="col-lg-6">
      <h1>Please submit image below</h1>
      <form>
        <label>
          New Image URL
        </label>
          <input type="text" />
           <button type="submit">Save</button>
        </form>

        <form>
        <label>
          New Image Caption
        </label>
          <input type="text" />
           <button type="submit">Save</button>
        </form>
            <div className='image-card'>     
               <img src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80"></img>
               <h2>Sea Turtle Bob</h2>
               <p>This is the image description!</p>
            </div>  
        
        </div>
     </div>
    </div>

    </div>

       
  );
}

export default App;
