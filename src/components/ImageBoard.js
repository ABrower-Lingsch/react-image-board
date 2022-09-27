import ImageForm from "./ImageForm";
import ImageList from "./ImageList";

function ImageBoard({items, addImage}) {
    return(
      <div>
        <ImageForm addImage={addImage}/>
        <ImageList items={items} />
      </div>
    )
};

export default ImageBoard;