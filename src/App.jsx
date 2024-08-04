function App() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.stroke();
  return (
    <>
      <canvas id="myCanvas" width="1000" height="100"></canvas>
    </>
  );
}

export default App;
