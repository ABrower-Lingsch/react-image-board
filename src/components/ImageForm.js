import {useState} from 'react';
import {BsImage} from 'react-icons/bs'
import {BsFillPlusCircleFill} from 'react-icons/bs'

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
        setSrc("");
        setText("");

    };

    


    return(
        <div>
        <nav class='navBar'><BsFillPlusCircleFill/></nav>
      <form class='inputForm' onSubmit={handleSubmit}>
        
        <div class='inputs'>
            <input type='url' class='urlInput' name='urlInput' value={src} onChange={handleSrcInput} placeholder='Image URL'></input>
            <input type='text' class='textInput' name='textInput' value={text} onChange={handleTextInput} placeholder='Image Caption'></input>
        </div>
        <div class='buttons'>
        <button class='closeButton' name='closeButton'>CANCEL</button>
        <button class='submitButton' name='submitButton'><BsImage/> ADD IMAGE</button>
        </div>
      </form>
      </div>
    )
};


export default ImageForm;