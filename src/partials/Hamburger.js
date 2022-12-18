const Hamburger = ({ toggleActive, IsActive, className }) => {
  return (
      <div onClick={ toggleActive } className={ `${ className } group transition duration-500 rounded-md border-main flex flex-col gap-2 justify-center items-center` }>
          <span className={ `block w-8 h-0.5 transition-all ${ IsActive ? "origin-top-left rotate-45" : ""} bg-main` }></span>
          <span className={ `block w-8 h-0.5 transition-all ${ IsActive ? "origin-center scale-0" : "" } bg-main` }></span>
          <span className={ `block w-8 h-0.5 transition-all ${ IsActive ? "origin-bottom-left rotate-[-45deg]" : "" } bg-main` }></span>
      </div>
    )
}

export default Hamburger;