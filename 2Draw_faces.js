// ----=  Faces  =----
/* load images here */
let bgImage;
function prepareInteraction() {
  bgImage = loadImage('/images/headphone.png');
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




/*let imagesa = face.keypoints[10];

push();
    imageMode(CENTER);
   
    // 顔に追従させたい場合は x, y を face.keypoints[...] に置き換える
    image(bgImage, imagesa.x, imagesa.y-60,600, 400);
    pop();
*/


let imagesa = face.keypoints[9];

// 顔の基準として目の間の距離を取得
let leftEye = face.leftEye.keypoints[0]; 
let rightEye = face.rightEye.keypoints[3]; 
let eyedist = dist(leftEye.x, leftEye.y, rightEye.x, rightEye.y);

// 目の距離に応じて画像サイズを変える
let imgWidth = map(eyedist, 20, 80, 50, 280);  // 目の距離 20～80 に応じて幅 300～600
let imgHeight = map(eyedist, 20, 80, 10, 150); // 高さも同じく調整

let offsetY = -10; // 上にずらす

push();
imageMode(CENTER);
image(bgImage, imagesa.x, imagesa.y + offsetY, imgWidth, imgHeight);
pop();








let eyeDist = dist(leftEyeCenterX, leftEyeCenterY, rightEyeCenterX, rightEyeCenterY);
let leftcheek = face. keypoints[50];
let rightcheek = face. keypoints[280];


let cheekW = map(eyeDist, 40, 200, 40, 140);  // 幅
let cheekH = map(eyeDist, 40, 200, 25, 90);   // 高さ

//let lashLength = map(eyeDist, 40, 200, 5, 25);
//let noseRadius = map(eyeDist, 40, 200, 10, 60);
let lensStrokeW = map(eyeDist, 40, 200, 6, 18);   // メガネのふち
let eyeStrokeW  = map(eyeDist, 40, 200, 4, 12);   // 目の縁
let lashStrokeW = map(eyeDist, 40, 200, 3, 10);   // まつげ
let noseStrokeW = map(eyeDist, 40, 200, 2, 6);    // 鼻の線

// 頬
fill(255, 192, 203, 150);
noStroke();
ellipse(leftcheek.x, leftcheek.y, cheekW, cheekH);
ellipse(rightcheek.x, rightcheek.y, cheekW, cheekH);

/*fill(255, 192, 203,150);
noStroke();
ellipse(leftcheek.x, leftcheek.y, 120, 70);
ellipse(rightcheek.x, rightcheek.y, 120, 70);*/

let r = max(leftEyeWidth, leftEyeHeight) * 2; // レンズの直径
//let bridgeY = (leftEyeCenterY + rightEyeCenterY) / 2;
//let leftBridgeX = leftEyeCenterX + r/1.5; 
//let rightBridgeX = rightEyeCenterX - r/1.5; 


//let lashLength = 15; // まつげの長さ
let lashLength = map(eyeDist, 40, 200, 5, 25);
let lashAnglesLeft = [PI/4, PI/4 + 0.15, PI/4 - 0.15];   // 左目の角度
let lashAnglesRight = [3*PI/4, 3*PI/4 + 0.15, 3*PI/4 - 0.15]; // 右目の角度


noStroke();
fill(255,255,255,);
ellipse(leftEyeCenterX, leftEyeCenterY, r, r);
ellipse(rightEyeCenterX, rightEyeCenterY, r, r);

fill(0);
ellipse(leftEyeCenterX, leftEyeCenterY, r/2.5, r/2.5);
ellipse(rightEyeCenterX, rightEyeCenterY, r/2.5,r/2.5);
//arc(leftEyeCenterX, leftEyeCenterY, r/3, r/3, 0, PI);
//arc(rightEyeCenterX, rightEyeCenterY, r/3, r/3, 0, PI);

fill(222,184,135); 
arc(leftEyeCenterX, leftEyeCenterY, r, r, PI, 0);  // 上半分
arc(rightEyeCenterX, rightEyeCenterY, r, r, PI, 0); // 上半分

noFill();
stroke(0);
strokeWeight(lensStrokeW);
// レンズ
//line(leftBridgeX, bridgeY, rightBridgeX, bridgeY);
line(leftEyeCenterX + r/1.5, (leftEyeCenterY + rightEyeCenterY)/2,
     rightEyeCenterX - r/1.5, (leftEyeCenterY + rightEyeCenterY)/2);


strokeWeight(eyeStrokeW);
ellipse(leftEyeCenterX, leftEyeCenterY, r, r);
ellipse(rightEyeCenterX, rightEyeCenterY, r, r);







stroke(0);//したまつげ
strokeWeight(lashStrokeW);

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

//let noseRadius = 40;
let noseRadius = map(eyeDist, 40, 200, 10, 60);
fill(222,184,135);   // 肌色
noStroke();
ellipse(noseTipX, noseTipY, noseRadius, noseRadius);

// --- 輪郭を描く ---
noFill();
stroke(0);
strokeWeight(noseStrokeW);
arc(noseTipX, noseTipY, noseRadius, noseRadius, 0, 3*PI/2);


let lipkamo=face.keypoints[186];
let lipkamo1=face.keypoints[185];
let lipkamo2=face.keypoints[17];
let lipkamo3=face.keypoints[410];

bezier(lipkamo.x, lipkamo.y, lipkamo1.x, lipkamo1.y, lipkamo2.x, lipkamo2.y, lipkamo3.x, lipkamo3.y);



noFill();
let lipkamo4=face.keypoints[186];
let lipkamo5=face.keypoints[216];
let lipkamo6=face.keypoints[206];
let lipkamo7=face.keypoints[92];
bezier(lipkamo4.x, lipkamo4.y, lipkamo5.x, lipkamo5.y, lipkamo6.x, lipkamo6.y, lipkamo7.x, lipkamo7.y);







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