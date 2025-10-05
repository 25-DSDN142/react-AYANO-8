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

let leftcheek = face. keypoints[50];
let rightcheek = face. keypoints[280];

fill(255, 192, 203);
noStroke();
ellipse(leftcheek.x, leftcheek.y, 70, 40);
ellipse(rightcheek.x, rightcheek.y, 70, 40);

let r = max(leftEyeWidth, leftEyeHeight) * 2; // レンズの直径
let bridgeY = (leftEyeCenterY + rightEyeCenterY) / 2;
let leftBridgeX = leftEyeCenterX + r/1.5; 
let rightBridgeX = rightEyeCenterX - r/1.5; 


let lashLength = 15; // まつげの長さ
let lashAnglesLeft = [PI/4, PI/4 + 0.15, PI/4 - 0.15];   // 左目の角度
let lashAnglesRight = [3*PI/4, 3*PI/4 + 0.15, 3*PI/4 - 0.15]; // 右目の角度


noStroke();
fill(255,255,255,150);
ellipse(leftEyeCenterX, leftEyeCenterY, r, r);
ellipse(rightEyeCenterX, rightEyeCenterY, r, r);

fill(255, 225, 180,); 
arc(leftEyeCenterX, leftEyeCenterY, r, r, PI, 0);  // 上半分
arc(rightEyeCenterX, rightEyeCenterY, r, r, PI, 0); // 上半分

noFill();
stroke(0);
strokeWeight(15);
// レンズ
line(leftBridgeX, bridgeY, rightBridgeX, bridgeY);

strokeWeight(10);
ellipse(leftEyeCenterX, leftEyeCenterY, r, r);
ellipse(rightEyeCenterX, rightEyeCenterY, r, r);


fill(0);
//ellipse(leftEyeCenterX, leftEyeCenterY, r/4, r/4);
//ellipse(rightEyeCenterX, rightEyeCenterY, r/4,r/4);
arc(leftEyeCenterX, leftEyeCenterY, r/3, r/3, 0, PI);
arc(rightEyeCenterX, rightEyeCenterY, r/3, r/3, 0, PI);




stroke(0);//したまつげ
strokeWeight(5);

for (let angle of lashAnglesLeft) {
  let lx = leftEyeCenterX + (r/2) * cos(angle);
  let ly = leftEyeCenterY + (r/2) * sin(angle);
  let lx2 = lx + lashLength * cos(angle);
  let ly2 = ly + lashLength * sin(angle);
  line(lx, ly, lx2, ly2);
}

for (let angle of lashAnglesRight) {
  let rx = rightEyeCenterX + (r/2) * cos(angle);
  let ry = rightEyeCenterY + (r/2) * sin(angle);
  let rx2 = rx + lashLength * cos(angle);
  let ry2 = ry + lashLength * sin(angle);
  line(rx, ry, rx2, ry2);
}

let noseRadius = 40;

fill(255, 225, 180);   // 肌色
noStroke();
ellipse(noseTipX, noseTipY, noseRadius, noseRadius);

// --- 輪郭を描く ---
noFill();
stroke(0);
strokeWeight(5);
arc(noseTipX, noseTipY, noseRadius, noseRadius, 0, 3*PI/2);


/*let radius = 30;
let lipda=face.keypoints[92];
let angle = radians(188); // 弧の開始角度

noFill();
stroke(0);
strokeWeight(6);



arc(lipda.x, lipda.y, radius, radius, radians(150),radians(290));
*/
let lipkamo=face.keypoints[186];
let lipkamo1=face.keypoints[185];
let lipkamo2=face.keypoints[0];
let lipkamo3=face.keypoints[410];

fill(255, 29,230);

bezier(lipkamo.x, lipkamo.y, lipkamo1.x, lipkamo1.y, lipkamo2.x, lipkamo2.y, lipkamo3.x, lipkamo3.y);

stroke(0);
strokeWeight(6);
bezier(lipkamo.x, lipkamo.y, lipkamo1.x, lipkamo1.y, lipkamo2.x, lipkamo2.y, lipkamo3.x, lipkamo3.y);

noFill();

let underlip = face.keypoints[410];
let underlip1 = face.keypoints[199];
let underlip2 = face.keypoints[42];
let underlip3 = face.keypoints[186];

bezier(underlip.x, underlip.y, underlip1.x, underlip1.y, underlip2.x, underlip2.y, underlip3.x, underlip3.y);





let lipkamo4=face.keypoints[186];
let lipkamo5=face.keypoints[216];
let lipkamo6=face.keypoints[206];
let lipkamo7=face.keypoints[92];
bezier(lipkamo4.x, lipkamo4.y, lipkamo5.x, lipkamo5.y, lipkamo6.x, lipkamo6.y, lipkamo7.x, lipkamo7.y);





// 左口角（keypoints[57]）から右口角（keypoints[287]）に向かって線
/*let leftLip = face.keypoints[186];
let rightLip = face.keypoints[287];
line(leftLip.x, leftLip.y, rightLip.x, rightLip.y);*/

/*noFill();
stroke(0);
strokeWeight(10);
ellipse(rightEyeCenterX, rightEyeCenterY,rightEyeWidth*2, rightEyeHeight*2);
ellipse(leftEyeCenterX, leftEyeCenterY,leftEyeWidth*2, leftEyeHeight*2, );
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