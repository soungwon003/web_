const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const INITIAL_COLOR = "#000000";
const CANVAS_SIZE_X = 1280;
const CANVAS_SIZE_Y = 720;
const saveBtn = document.getElementById("jsSave");
const link = document.createElement("a");
const clear = document.getElementById("jsClear");
const Rect = document.getElementById("jsRect");
const Circle = document.getElementById("jsArc");
const Triangle = document.getElementById("jsTriangle");
const TextBtn = document.getElementById("jsText");
const Text_Btn = document.getElementById("js_TextBtn");
const J_Text = document.getElementById("js_Text");
const Word = document.getElementById("jsWord");
const Word_Size = document.getElementById("Word_Size");
const img = new Image();
canvas.width = CANVAS_SIZE_X;
canvas.height = CANVAS_SIZE_Y;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE_X, CANVAS_SIZE_Y);
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
let painting = false;
let filling = false;
let square = false;
let circle = false;
let tri = false;
let text = false;
let word = "";
let word_size = 20;
ctx.font = "20px Arial";
ctx.fillStyle = "black";
let jtext = "";
let dImg = false;
function stopPainting() {
  painting = false;
}
function startPainting() {
  painting = true;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function onMouseUp(event) {
  stopPainting();
}
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}
function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}
function handleModeClick() {
  if (filling == true) {
    filling = false;
    mode.innerText = "배경색";
  } else {
    filling = true;
    mode.innerText = "그리기";
  }
}
function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE_X, CANVAS_SIZE_Y);
  }
}
function handleSaveClick() {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJs[EXPORT]";
  link.click();
}
function MakeRect() {
  if (square == true) {
    square = false;
    Rect.innerText = "사각형";
  } else {
    square = true;
    Rect.innerText = "끄기";
    canvas.addEventListener("click", MakeRect2);
  }
}
function MakeRect2(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (square == true) {
    ctx.strokeRect(x, y, 100, 100);
  }
}
function MakeArc() {
  if (circle == true) {
    circle = false;
    Circle.innerText = "원";
  } else {
    circle = true;
    Circle.innerText = "끄기";
    canvas.addEventListener("click", MakeArc2);
  }
}
function MakeArc2(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (circle == true) {
    ctx.arc(x, y, 50, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
  }
}
function MakeTriangle() {
  if (tri == true) {
    tri = false;
    Triangle.innerText = "삼각형";
  } else {
    tri = true;
    Triangle.innerText = "끄기";
    canvas.addEventListener("click", MakeTriangle2);
  }
}
function MakeTriangle2(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (tri == true) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 100, y + 150);
    ctx.lineTo(x + 100, y + 150);
    ctx.closePath();
    ctx.stroke();
  }
}
function MakeText() {
  if (text == true) {
    text = false;
    TextBtn.innerText = "텍스트";
  } else {
    text = true;
    TextBtn.innerText = "끄기";
    canvas.addEventListener("click", MakeText2);
  }
}
function MakeText2(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (text == true) {
    ctx.fillText(jtext, x, y, 100);
  }
}
function inputText() {
  word = Word.value;
  word_size = parseInt(Word_Size.value);
  if (word == "Dotum") {
    switch (word_size) {
      case 10:
        ctx.font = "10px Dotum";
        break;
      case 20:
        ctx.font = "20px Dotum";
        break;
      case 30:
        ctx.font = "30px Dotum";
        break;
      case 40:
        ctx.font = "40px Dotum";
        break;
      case 50:
        ctx.font = "50px Dotum";
        break;
    }
  } else if (word == "Gulim") {
    switch (word_size) {
      case 10:
        ctx.font = "10px Gulim";
        break;
      case 20:
        ctx.font = "20px Gulim";
        break;
      case 30:
        ctx.font = "30px Gulim";
        break;
      case 40:
        ctx.font = "40px Gulim";
        break;
      case 50:
        ctx.font = "50px Gulim";
        break;
    }
  } else if (word == "Batang") {
    switch (word_size) {
      case 10:
        ctx.font = "10px Batang";
        break;
      case 20:
        ctx.font = "20px Batang";
        break;
      case 30:
        ctx.font = "30px Batang";
        break;
      case 40:
        ctx.font = "40px Batang";
        break;
      case 50:
        ctx.font = "50px Batang";
        break;
    }
  } else if (word == "Gungsuh") {
    switch (word_size) {
      case 10:
        ctx.font = "10px Gungsuh";
        break;
      case 20:
        ctx.font = "20px Gungsuh";
        break;
      case 30:
        ctx.font = "30px Gungsuh";
        break;
      case 40:
        ctx.font = "40px Gungsuh";
        break;
      case 50:
        ctx.font = "50px Gungsuh";
        break;
    }
  } else if (word == "Malgun Gothic") {
    switch (word_size) {
      case 10:
        ctx.font = "10px Malgun Gothic";
        break;
      case 20:
        ctx.font = "20px Malgun Gothic";
        break;
      case 30:
        ctx.font = "30px Malgun Gothic";
        break;
      case 40:
        ctx.font = "40px Malgun Gothic";
        break;
      case 50:
        ctx.font = "50px Malgun Gothic";
        break;
    }
  }
  jtext = J_Text.value;
}
function loadFile(input) {
  if (dImg == false) {
    dImg = true;
  }
  var file = input.files[0];
  img.src = URL.createObjectURL(file);
  canvas.addEventListener("click", drawImg);
}
function drawImg() {
  if (dImg == true) {
    ctx.globalAlpha = 0.2;
    ctx.drawImage(img, CANVAS_SIZE_X / 2, CANVAS_SIZE_Y / 2);
    dImg = false;
    ctx.globalAlpha = 1;
  }
}
Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
}
if (mode) {
  mode.addEventListener("click", handleModeClick);
}
if (range) {
  range.addEventListener("input", handleRangeChange);
}
if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}
if (clear) {
  clear.addEventListener("click", () =>
    ctx.clearRect(0, 0, CANVAS_SIZE_X, CANVAS_SIZE_Y)
  );
}
if (Rect) {
  Rect.addEventListener("click", MakeRect);
}
if (Circle) {
  Circle.addEventListener("click", MakeArc);
}
if (Triangle) {
  Triangle.addEventListener("click", MakeTriangle);
}
if (TextBtn) {
  TextBtn.addEventListener("click", MakeText);
}
if (Text_Btn) {
  Text_Btn.addEventListener("click", inputText);
}
