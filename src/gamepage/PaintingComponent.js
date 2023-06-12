import paintingSprite from '../assets/PaintingSprite.png';

const PaintingComponent = ({paintingPositionX, paintingPositionY}) => {
    return ( 
        <><img src={paintingSprite}
            style={{
                height: "40px", 
                width: "100px", 
                display: "flex", 
                position: "absolute",
                left: `${paintingPositionX}px`,
                top: `${paintingPositionY}px`,
                }}/>
        </>
     );
}
 
export default PaintingComponent;