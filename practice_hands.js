// ----=  HANDS  =----
/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {
  // hands part
  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    //console.log(hand);
    if (showKeypoints) {
      drawConnections(hand)
    }

    // This is how to load in the x and y of a point on the hand.
    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;

     let pinkyFingerTipX = hand.pinky_finger_tip.x;
     let pinkyFingerTipY = hand.pinky_finger_tip.y;

     let ringFingerTipX = hand.ring_finger_tip.x;
     let ringFingerTipY = hand.ring_finger_tip.y;

     let middleFingerTipX = hand.middle_finger_tip.x;
     let middleFingerTipY = hand.middle_finger_tip.y;


    /*
    Start drawing on the hands here
    */

    //fill(225, 225, 0);
    //ellipse(indexFingerTipX, indexFingerTipY, 30, 30);
     
    //stroke(30);
   // strokeWeight(3);
    //line(indexFingerTipX, indexFingerTipY, 700, 0);
    
    //fill(245, 23, 80);
    //ellipse(indexFingerTipX, indexFingerTipY, pinkyFingerTipX, pinkyFingerTipY);
    
    fill(0, 255, 0);
    //ellipse(700, 10, 20, 50);
ellipse(indexFingerTipX, indexFingerTipY, 80, 80);
  ellipse(middleFingerTipX, middleFingerTipY, 70, 70 );
  ellipse(ringFingerTipX,ringFingerTipY, 70, 70);
  ellipse(pinkyFingerTipX,pinkyFingerTipY, 60, 60);  // drawPoints(hand)

    //fingerPuppet(indexFingerTipX, indexFingerTipY);

    //chameleonHandPuppet(hand)

    /*
    Stop drawing on the hands here
    */
  }
  // You can make addtional elements here, but keep the hand drawing inside the for loop. 
  //------------------------------------------------------
}






function fingerPuppet(x, y) {
  fill(255, 38, 219) // pink
  ellipse(x, y, 100, 20)
  ellipse(x, y, 20, 100)

  fill(255, 252, 48) // yellow
  ellipse(x, y, 20) // draw center 

}


function pinchCircle(hand) { // adapted from https://editor.p5js.org/ml5/sketches/DNbSiIYKB
  // Find the index finger tip and thumb tip
  let finger = hand.index_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

  // This circle's size is controlled by a "pinch" gesture
  fill(0, 255, 0, 200);
  stroke(0);
  strokeWeight(2);
  circle(centerX, centerY, pinch);

}

function chameleonHandPuppet(hand) {
  // Find the index finger tip and thumb tip
  // let finger = hand.index_finger_tip;

  let finger = hand.middle_finger_tip; // this finger now contains the x and y infomation! you can access it by using finger.x 
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

  // This circle's size is controlled by a "pinch" gesture
  fill(0, 255, 0, 200);
  stroke(0);
  strokeWeight(2);
  circle(centerX, centerY, pinch);

  let indexFingerTipX = hand.index_finger_tip.x;
  let indexFingerTipY = hand.index_finger_tip.y;
  fill(0)
  circle(indexFingerTipX, indexFingerTipY, 20);

}

function drawConnections(hand) {
  // Draw the skeletal connections
  push()
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = hand.keypoints[pointAIndex];
    let pointB = hand.keypoints[pointBIndex];
    stroke(255, 0, 0);
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  pop()
}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {
  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 10);
  }
  pop()

}

/*
let leftnose= face.keypoints[237];//鼻の孔
let rightnose= face.keypoints[457];
let leftnosee= face. keypoints[206];//唇と鼻の間
let rightnosee= face. keypoints[426];
let leftnosesa= face. keypoints[214];//２０６と平行な位置
let rightnosesa= face. keypoints[434];
let end1 = face. keypoints[149];
let end2= face. keypoints[378];//１っ本目の口の線

let leftnose1= face.keypoints[48];
let rightnose1= face.keypoints[278];
let leftnose2= face.keypoints[207];
let rightnose2= face.keypoints[427];
let leftnose3= face.keypoints[192];
let rightnose3= face.keypoints[416];
let end3= face.keypoints[136];
let end4= face.keypoints[365];//２本目の口の線

let leftnose4= face.keypoints[135];
let rightnose4= face.keypoints[364];
let leftnose5= face.keypoints[140];
let rightnose5= face.keypoints[369];
let leftnose6= face.keypoints[202];
let rightnose6= face.keypoints[422];//３本目の口




let leftEyebrow1= face.keypoints[55];
let rightEyebrow1= face.keypoints[285];
let leftEyebrow2= face.keypoints[107];
let rightEyebrow2= face.keypoints[336];
let leftEyebrow3= face.keypoints[69];
let rightEyebrow3= face.keypoints[299];
let leftEyebrow4= face.keypoints[54];
let rightEyebrow4= face.keypoints[284];
let leftEyebrow5= face.keypoints[68];
let rightEyebrow5= face.keypoints[298];
let leftEyebrow6= face.keypoints[21];
let rightEyebrow6= face.keypoints[251];
let leftEyebrow7= face.keypoints[108];
let rightEyebrow7= face.keypoints[337];
let leftEyebrow8= face.keypoints[103];
let rightEyebrow8= face.keypoints[332];

let leftnoseda= face.keypoints[193];
let rightnoseda= face.keypoints[417];
let leftnoseda1= face.keypoints[51];
let rightnoseda1= face.keypoints[281];
let leftnoseda2= face.keypoints[220];
let rightnoseda2= face.keypoints[440];
let leftnoseda3= face.keypoints[198];
let rightnoseda3= face.keypoints[420];//鼻

let leftcheek= face.keypoints[234];
let rightcheek= face.keypoints[454];
let leftcheek1= face.keypoints[117];
let rightcheek1= face.keypoints[346];
let leftcheek2= face.keypoints[118];
let rightcheek2= face.keypoints[347];
let leftcheek3= face.keypoints[101];
let rightcheek3= face.keypoints[330];

let leftcheek4= face.keypoints[205];
let rightcheek4= face.keypoints[425];
let leftcheek5= face.keypoints[187];
let rightcheek5= face.keypoints[411];
let leftcheek6= face.keypoints[123];
let rightcheek6= face.keypoints[352];
let leftcheek7= face.keypoints[50];
let rightcheek7= face.keypoints[280];




//Start drawing on the face here
    
noFill();
stroke(0);
strokeWeight(10);
bezier(leftnose.x, leftnose.y, leftnosee.x, leftnosee.y, leftnosesa.x, leftnosesa.y, end1.x, end1.y);
bezier(rightnose.x, rightnose.y, rightnosee.x, rightnosee.y, rightnosesa.x, rightnosesa.y, end2.x, end2.y);
bezier(leftnose1.x, leftnose1.y, leftnose2.x, leftnose2.y, leftnose3.x, leftnose3.y, end3.x, end3.y);
bezier(rightnose1.x, rightnose1.y, rightnose2.x, rightnose2.y, rightnose3.x, rightnose3.y, end4.x, end4.y);

bezier(leftEyebrow1.x, leftEyebrow1.y, leftEyebrow2.x, leftEyebrow2.y, leftEyebrow3.x, leftEyebrow3.y, leftEyebrow4.x, leftEyebrow4.y);
bezier(rightEyebrow1.x, rightEyebrow1.y, rightEyebrow2.x, rightEyebrow2.y, rightEyebrow3.x, rightEyebrow3.y, rightEyebrow4.x, rightEyebrow4.y);
bezier(leftEyebrow1.x, leftEyebrow1.y, leftEyebrow2.x, leftEyebrow2.y, leftEyebrow5.x, leftEyebrow5.y, leftEyebrow6.x, leftEyebrow6.y);
bezier(rightEyebrow1.x, rightEyebrow1.y, rightEyebrow2.x, rightEyebrow2.y, rightEyebrow5.x, rightEyebrow5.y, rightEyebrow6.x, rightEyebrow6.y);
bezier(leftEyebrow1.x, leftEyebrow1.y, leftEyebrow2.x, leftEyebrow2.y, leftEyebrow7.x, leftEyebrow7.y, leftEyebrow8.x, leftEyebrow8.y);
bezier(rightEyebrow1.x, rightEyebrow1.y, rightEyebrow2.x, rightEyebrow2.y, rightEyebrow7.x, rightEyebrow7.y, rightEyebrow8.x, rightEyebrow8.y);

bezier(leftnose.x, leftnose.y, leftnose4.x, leftnose4.y, leftnose5.x, leftnose5.y, leftnose6.x, leftnose6.y);
bezier(rightnose.x, rightnose.y, rightnose4.x, rightnose4.y, rightnose5.x, rightnose5.y, rightnose6.x, rightnose6.y);

bezier(leftnoseda.x, leftnoseda.y, leftnoseda1.x, leftnoseda1.y, leftnoseda2.x, leftnoseda2.y, leftnoseda3.x, leftnoseda3.y);
bezier(rightnoseda.x, rightnoseda.y, rightnoseda1.x, rightnoseda1.y, rightnoseda2.x, rightnoseda2.y, rightnoseda3.x, rightnoseda3.y);

bezier(leftcheek.x, leftcheek.y, leftcheek1.x, leftcheek1.y, leftcheek2.x, leftcheek2.y, leftcheek3.x, leftcheek3.y);
bezier(rightcheek.x, rightcheek.y, rightcheek1.x, rightcheek1.y, rightcheek2.x, rightcheek2.y, rightcheek3.x, rightcheek3.y);

bezier(leftcheek3.x, leftcheek3.y, leftcheek5.x, leftcheek5.y, leftcheek6.x, leftcheek6.y, leftcheek7.x, leftcheek7.y);
bezier(rightcheek3.x, rightcheek3.y, rightcheek5.x, rightcheek5.y, rightcheek6.x, rightcheek6.y, rightcheek7.x, rightcheek7.y);

*/
/*let r = max(leftEyeWidth, leftEyeHeight) * 2; // 幅と高さの大きい方を使う
let leftInnerX = leftEyeCenterX + r/2-150;
let rightInnerX = rightEyeCenterX - r/2+150;
let bridgeY = (leftEyeCenterY + rightEyeCenterY) / 2;

//let leftear= face.keypoints[124];
//let rightear= face.keypoints[353];
let leftear1= face.keypoints[156];
let rightear1= face.keypoints[383];
let leftear2= face.keypoints[139];
let rightear2= face.keypoints[368];
let leftear3= face.keypoints[162];
let rightear3= face.keypoints[389];



noFill();
stroke(0);
strokeWeight(10);
ellipse(leftEyeCenterX, leftEyeCenterY, r, r);
ellipse(rightEyeCenterX, rightEyeCenterY, r, r);
line(leftInnerX, bridgeY, rightInnerX, bridgeY);
bezier(leftear1.x, leftear1.y, leftear1.x, leftear1.y, leftear2.x, leftear2.y, leftear3.x, leftear3.y);
bezier(rightear1.x, rightear1.y, rightear1.x, rightear1.y, rightear2.x, rightear2.y, rightear3.x, rightear3.y);
*/