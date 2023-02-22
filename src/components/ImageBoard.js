//function ImageBoard{
//    return(
//      <div>
//        <ImageForm />
//        <ImageList />
//      </div>
//    )
//}

//export default ImageBoard;
import ImageForm from "./ImageForm"
import ImageList from "./ImageList";
import { useState } from "react";


const INITIAL_DATA = [{
    //create initial variable
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    caption: 'an awesome image',
}]

function ImageBoard() {
    // define variables, use initial image array 
    const [images, setImages] = useState(INITIAL_DATA);

    const addImage = (image) => {
        //call set images and pass through the desired value
        //[...spread previous images and add new image to end of the array]
        setImages([...images, image])
    }

    return(
      <div>
        <ImageForm addImage = {addImage} />
        <ImageList images= {images} />
      </div>
    );
};

export default ImageBoard