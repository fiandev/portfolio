const Hamburger = ({ toggleActive, className }) => {
  return (
      <div 
        onClick={ toggleActive } 
        className={ `${ className } group hover:border rounded-md border-main px-2 flex flex-col gap-2 justify-center items-end` }
        >
        <span className={ `transition duration-500 block w-8 h-0.5 group-hover:w-${ Math.floor(Math.random() * (8 - 2 + 1) + 2) } bg-main` }></span>
        <span className={ `transition duration-500 block w-8 h-0.5 group-hover:w-${ Math.floor(Math.random() * (8 - 2 + 1) + 2) } bg-main` }></span>
        <span className={ `transition duration-500 block w-8 h-0.5 group-hover:w-${ Math.floor(Math.random() * (8 - 2 + 1) + 2) } bg-main` }></span>
      </div>
    )
}

export default Hamburger;