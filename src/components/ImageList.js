import { useState } from "react";


function ImageList({items}){

    

    const listItems = items.map(({name, src, text}) => (
        <li class='listItems'>
            <img name={name} src={src}/>
            <p class='imgText' name={name}>{text}</p>
        </li>
    ));


    return(
        <div class='listArea'>
            <ul class='list'>
                {listItems}
            </ul>
        </div>
    )
};

export default ImageList;
