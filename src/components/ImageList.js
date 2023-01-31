import { useState } from "react";
import {nanoid} from "nanoid"


function ImageList({items}){

    

    const listItems = items.map(({name, src, text}) => (
        <li className='listItems' key={nanoid()}>
            <img name={name} src={src} />
            <p className='imgText' name={name} >{text}</p>
        </li>
    ));


    return(
        <div className='listArea'>
            <ul className='list'>
                {listItems}
            </ul>
        </div>
    )
};

export default ImageList;
