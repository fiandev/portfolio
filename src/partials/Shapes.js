const Shapes = ({ className, children }) => {
  let borders = ["rounded-full", "rounded", "rounded-md", "rounded-lg"];
  let border = borders[Math.floor(Math.random() * borders.length)];
  
  return (
      <div className={ `transition-all delay-200 flex justify-center items-center rotate-45 hover:rotate-45 ${ className } ${ border }` }>
        .
      </div>
   )
}

export default Shapes;