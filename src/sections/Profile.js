import Shapes from "../partials/Shapes";

const Profile = () => {
  
  return (
      <div className="w-screen h-screen grid sm:grid-cols-1 md:grid-cols-2">
        
        <div className="group relative flex items-center justify-center">
          <Shapes className="group-hover:rotate-45 w-32 h-32 bg-main border shadow-md p-2" />
          <img className="w-24 h-24 absolute shadow-md" src="https://github.com/fiandev.png" />
        </div>
        
        <div className="relative w-full">
          lorem
        </div>
        
        
      </div>
    )
}

export default Profile;