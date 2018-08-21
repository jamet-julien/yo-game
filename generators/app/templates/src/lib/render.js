export default function Render({ width, height }) {
  let renderFunction = [],
    _width = width,
    _height = height;

  function push(funcDraw) {
    renderFunction.push(funcDraw);
  }

  function draw(context, deltaTime) {
    context.clearRect(0, 0, _width, _height);
    renderFunction.map(funcDraw => {
      funcDraw(context, deltaTime);
    });
  }

  return {
    push,
    draw
  };
}
