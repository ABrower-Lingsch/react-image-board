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

    const handleCancel = (e) => {
        e.preventDefault();
        setSrc("");
        setText("");
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
                    <label htmlFor='urlInput'></label>
                    <input type='url' class='urlInput' id='urlInput' value={src} onChange={handleSrcInput} placeholder='Image URL'></input>
                    <label htmlFor='textInput'></label>
                    <input type='text' class='textInput' id='textInput' value={text} onChange={handleTextInput} placeholder='Image Caption'></input>
                </div>
                <div class='buttons'>
                    <button class='closeButton' name='closeButton' onClick={handleCancel}>CANCEL</button>
                    <button class='submitButton' name='submitButton'><BsImage/> ADD IMAGE</button>
                </div>
            </form>
        </div>
    )
};


export default ImageForm;