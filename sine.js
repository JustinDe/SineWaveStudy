var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var cWidth = document.getElementById('mycanvas').width;
var cHeight = document.getElementById('mycanvas').height;
//Debugging
console.log("cW: "+ cWidth); 
console.log("cH: "+ cHeight);
//--------
var amp = cHeight/4;
var freq = .05;
var origin = cHeight/2;
var Xpoints = {};
var Ypoints = {};

function baseLine()
{
  ctx.beginPath();
  ctx.moveTo(0,origin);
  ctx.lineTo(cWidth,origin);
  ctx.stroke();
}

function sineWave()
{
  ctx.lineWidth = 3;
  var y = Ypoints[0];
  for(var x = 0; x <= cWidth; x++)
  {
    ctx.beginPath();
    ctx.moveTo(x, y);
    y = Ypoints[x];
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  ctx.lineWidth = 1;
}
function Top()
{
  ctx.strokeStyle = '#0000ff';
  for(var i = 0; i <= cWidth; i++)
  {
    ctx.beginPath();
    ctx.moveTo(Xpoints[i],0);
    ctx.lineTo(Xpoints[i],Ypoints[i]);
    ctx.stroke();
  }
  ctx.strokeStyle = '#000000';
}
function Bottom()
{
  ctx.strokeStyle = '#00ff00';
  for(var i = 0; i <= cWidth; i++)
  {
    ctx.beginPath();
    ctx.moveTo(Xpoints[i],500);
    ctx.lineTo(Xpoints[i],Ypoints[i]);
    ctx.stroke();
  }
  ctx.strokeStyle = '#000000';
}
function innerWave()
{
  ctx.strokeStyle = '#ff0000';
  for(var i = 0; i <= cWidth; i++)
  {
    ctx.beginPath();
    ctx.moveTo(Xpoints[i],origin);
    ctx.lineTo(Xpoints[i],Ypoints[i]);
    ctx.stroke();
  }
  ctx.strokeStyle = '#000000';
}

function reDraw()
{
  ctx.clearRect(0,0,cWidth,cHeight);
  if(document.getElementById("cb_baseline").checked)
  {
    baseLine();
  }
  if(document.getElementById("cb_sinewave").checked)
  {
    sineWave();
  }
  if(document.getElementById("cb_top").checked)
  {
    Top();
  }
  if(document.getElementById("cb_bottom").checked)
  {
    Bottom();
  }
  if(document.getElementById("cb_innerwave").checked)
  {
    innerWave();
  } 
}
function buildWave()
{
  var x = 0;
  var y = amp * Math.sin(freq * x) + origin;
  for(var i = 0; i <= cWidth; i++)
  {
    Xpoints[i] = i;
    Ypoints[i] = amp * Math.sin(freq * i) + origin;
  }
  //SineWave Debugging
  for(var i = 0; i <= cWidth; i++)
  {
    console.log(Xpoints[i] + "," + Ypoints[i]);
  }
}