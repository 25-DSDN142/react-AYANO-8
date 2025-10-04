// ----=  Faces  =----
/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {

  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face\
    console.log(face);
    if (showKeypoints) {
      drawPoints(face)
    }

    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */
    // Here are some variables you may like to use. 
    // Face basics
    let faceCenterX = face.faceOval.centerX;
    let faceCenterY = face.faceOval.centerY;
    let faceWidth = face.faceOval.width;
    let faceheight = face.faceOval.height;
    // Left eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;
    // Left eyebrow
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;

    // Lips
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;

    // Right eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    // Right eyebrow
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;

    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;






















let noseTip = face.keypoints[98];
let noseTip2 = face.keypoints[327];
let chin = face.keypoints[150];
let chin2 =face.keypoints[379];

let startX = noseTip.x;
let startY = noseTip.y;
let start10X = noseTip2.x;
let start10Y = noseTip2.y;


let endX = chin.x;
let endY = chin.y;

let control1X = startX-110;
let control1Y = startY;

let control2X = startX-80;
let control2Y = startY+35;

let control3X = startX+180;
let control3Y = startY;

let control4X = startX+120;
let control4Y = startY+50;

let end2X = chin2.x;
let end2Y = chin2.y;

let broww =  face.keypoints[107];
let broww2 = face.keypoints[336];
let broww3 = face.keypoints[54];
let broww5 = face.keypoints[21];
let broww4 = face.keypoints[284];
let broww6 = face.keypoints[251];

let start1X = broww.x;
let start1Y = broww.y;
let start2X = broww2.x;
let start2Y = broww2.y;


let end1X = broww3.x;
let end1Y = broww3.y;
let end3X = broww5.x;
let end3Y = broww5.y;
let end4X = broww4.x;
let end4Y = broww4.y;
let end5X = broww6.x;
let end5Y = broww6.y;



// 描画
noFill();
stroke(0);
strokeWeight(7);
bezier(startX, startY, control1X, control1Y, control2X, control2Y, endX, endY);
bezier(start10X, start10Y, control3X, control3Y, control4X, control4Y,end2X, end2Y);//ほうれい線
ellipse(lipsCenterX, lipsCenterY, lipsWidth, lipsHeight);

bezier(start1X, start1Y, start1X-20, start1Y-30, end1X+20, end1Y-30, end1X, end1Y);
bezier(start1X, start1Y, start1X-20, start1Y-20, end1X+20, end1Y-20, end3X, end3Y);

bezier(start2X, start2Y, start1X+20, start1Y+30, end1X +20, end1Y+30, end4X, end4Y);
bezier(start2X, start2Y, start1X+20, start1Y+30, end1X +80, end1Y+20, end5X, end5Y);
/*let noseTip = face.keypoints[4];
    let upperLip = face.keypoints[13];
    let leftCheek = face.keypoints[234];
    let rightCheek = face.keypoints[454];


    

    noFill();
    stroke(0);
    strokeWeight(4);

    beginShape();
    curveVertex(noseTip.x, noseTip.y);
    curveVertex(noseTip.x, noseTip.y);
    curveVertex(leftCheek.x, leftCheek.y - 10);
    curveVertex(upperLip.x, upperLip.y);
    curveVertex(rightCheek.x, rightCheek.y - 10);
    curveVertex(upperLip.x, upperLip.y);
    endShape();*/

   

    






    /*
    Start drawing on the face here
    */
   

    /*drawPoints(face.leftEye);
    drawPoints(face.leftEyebrow);
    drawPoints(face.lips);
    drawPoints(face.rightEye);
    drawPoints(face.rightEyebrow);*/
    



    //drawX(rightEyeCenterX,rightEyeCenterY);
    //drawX(leftEyeCenterX,leftEyeCenterY);


    // drawX(noseTipX,noseTipY); 
    

    // drawX(face.keypoints[332].x,face.keypoints[332].y);
    // drawX(face.keypoints[103].x,face.keypoints[103].y);


    /*
    Stop drawing on the face here
    */

  }
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}














function drawX(X, Y) {
  push()

  strokeWeight(15)
  line(X - 20, Y - 20, X + 20, Y + 20)
  line(X - 20, Y + 20, X + 20, Y - 20)

  pop()
}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop()

}