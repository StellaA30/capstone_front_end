const PaintingListContainer = ({stolenArtworkList, questionBeingDisplayed, currentGame}) => {
    return ( 
       <div>
         <div> 
            <h3> These are the cool paintings you stole</h3> 
            <h3>Total Score: {currentGame.score}</h3>
         </div>

         <div className="caught-fish">
                          {stolenArtworkList.map(stolenArtwork => <div><div classname="caught-fish-image"><img src={stolenArtwork.artwork.url} height="100px"/></div> <p>"{stolenArtwork.artwork.title}", {stolenArtwork.artwork.artist}
              </p></div>)}
          </div>
       </div>
     );
}
// console.log(stolenArtwork[1].artwork.id);
export default PaintingListContainer;

//