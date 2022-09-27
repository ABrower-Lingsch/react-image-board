import {useState} from 'react';

function ImageForm({addImage}){


    const [src, setSrc] = useState("");

    const [text, setText] = useState("");

    const handleSrcInput = (e) => {
        setSrc(e.target.value);
    };

    const handleTextInput = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newImage = {
            src,
            text,
        }

        addImage(newImage);
        // setSrc("");
        // setText("");

    };

    


    return(
      <form onSubmit={handleSubmit}>
        <input type='url' name='urlInput' value={src} onChange={handleSrcInput}></input>
        <input type='text' name='textInput' value={text} onChange={handleTextInput}></input>
        <button name='closeButton'>Cancel</button>
        <button name='submitButton'>Add Image</button>
      </form>
    )
};


export default ImageForm;