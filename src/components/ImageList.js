import { useState } from "react";


function ImageList({items}){

    

    const listItems = items.map(({name, src, text}) => (
        <li>
            <img name={name} src={src}/>
            <p name={name}>{text}</p>
        </li>
    ));


    return(
      <ul>
        {listItems}
      </ul>
    )
};

export default ImageList;
