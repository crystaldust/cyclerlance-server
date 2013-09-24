
function getIntroText( req, res ) {
  console.log( req.body );
//  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send( 'Hi! I\'m Lance, a bicycle amateur from China!' );
  console.log( res.setHeader );
}


exports.getIntroText = getIntroText;
