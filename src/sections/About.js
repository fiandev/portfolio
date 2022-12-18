

const About = ({ about }) => {
  
  return (
      <section id="about" className={ `absolute inset-x-0 bg-slate-50 transition-all duration-1000 min-h-screen lg:min-h-screen flex flex-col gap-4 justify-center lg:px-8 items-center` }>
        <h1 className="text-3xl capitalize font-bold font-mono">About Me</h1>
        {
          about.split("\n").map((text) => {
            return <p className="mx-4 text-sm lg:text-md font-light font-serif">{ text }</p>
          })
        }
        
      </section>
    )
}

export default About;