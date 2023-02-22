import { useState } from "react";

function ImageForm({ addImage }) {
  const [url, setURL] = useState("");
  const [caption, setCaption] = useState("");

  //event listener that prevents the page from reseting back to default
  const handleSubmit = (e) => {
    e.preventDefault();

    const newImage = {
      //use values from state
      url,
      caption,
    };

    addImage(newImage);
    setURL("");
    setCaption("");
  };

  //put name attributes on inputs**
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url">URL</label>
      <input
        type="url"
        name="url"
        value={url}
        onChange={(e) => setURL(e.target.value)}
      />

      <label htmlFor="caption"> Caption</label>
      <input
        type="text"
        name="caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button type="submit">Save image</button>
    </form>
  );
}


export default ImageForm;
