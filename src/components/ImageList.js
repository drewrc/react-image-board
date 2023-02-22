//function ImageList(){
//    return(
//      <ul>
//        <li>
//            <div className='image-card'>     
//               <img src="{{img}}"></img>
//               <h2>{{title}}</h2>
//               <p>{{description}}</p>
//            </div>  
//        </li>
//      </ul>
//    )
//};
//https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80

//export default ImageList;

function ImageList({ images }) {
    //set up props in ({})
    //can use naniod to generate id for KEY 

    const imagesHTML = images.map((image, index) => ( 
    <li key={index}>
        <img src={image.url} alt={image.caption} />
        <p>{image.caption}</p>
    </li>
    ));

    return <ul>{imagesHTML}</ul>
    
};

export default ImageList;