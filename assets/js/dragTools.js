//moving the 3 tools
let dragValue;

function drag(id) {
  let tool = document.getElementById(id);
  tool.style.position = "absolute";
  tool.onclick = function (e) {
    dragValue = tool;
  };
  document.ondblclick = function (e) {
    dragValue = tool.remove();
    tool = document.createElement("img");
    tool.src = "/assets/farm-imgs/stage0.png";
    stage.className = "above";
    loc1.appendChild(stage);
  };
}

document.onmousemove = function (e) {
  let x = e.pageX;
  let y = e.pageY;
  dragValue.style.left = x + "px";
  dragValue.style.top = y + "px";
};

//points
let point = 50;
document.getElementById("points").innerHTML = point;
//farming on the 9 locations
// All stages are false by default.
let isStage0 = false;
let isStage1 = false;
let isStage2 = false;

// check loc1 once clicked
let loc1 = document.getElementById("loc1");
loc1.addEventListener("click", function () {
  //if img tag is 1, and it has the class soil, then I can (farm stage0)
  let checkImgLength = document.querySelectorAll("#loc1 img").length;
  console.log(checkImgLength);
  let stage;
  if (checkImgLength == 1) {
    // I can farm stage0
    stage = document.createElement("img");
    stage.src = "/assets/farm-imgs/stage0.png";
    stage.className = "above";
    loc1.appendChild(stage);
    isStage0 = true;
  } else if (checkImgLength != 1 && isStage0 == true) {
    // go to stage 1, but remove stage 0 element !
    document.querySelector("#loc1 .above").remove();
    stage = document.createElement("img");
    stage.src = "/assets/farm-imgs/stage1.png";
    stage.className = "above";
    loc1.appendChild(stage);
    isStage1 = true;
    // reduce 5 points for seeds
    document.getElementById("points").innerHTML -= 5;
    isStage0 = false;
  } else if (checkImgLength != 1 && isStage1 == true) {
    // go to stage 2, but remove stage 1 element!
    document.querySelector("#loc1 .above").remove();
    stage = document.createElement("img");
    stage.src = "/assets/farm-imgs/stage2.png";
    stage.className = "above";
    loc1.appendChild(stage);
    isStage2 = true;
    isStage1 = false;
  } else {
    alert("Nah! Try doing something else.");
  }
});

// const node = document.createElement("img");
// const Imgnode = document.createTextNode("Water");
// node.appendChild(Imgnode);
// document.getElementById("myList").appendChild(node);
