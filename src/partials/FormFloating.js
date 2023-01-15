export default function FormFloating ({ type, name, className, value, placeholder }) {
  return (
      <div className={ `transition-all flex flex-col justify-center rounded-md group/floating outline outline-gray-400 hover:outline-main hover:outline-md p-2 ${ className }`}>
        <label htmlFor={ name } className="transition-all group-hover/floating:text-sm text-md text-gray-400 group-hover/floating:font-light">{name}</label>
        {
          type === "textarea"
          ? <textarea rows="3" id={ name || "input" } className="w-full h-min-10 text-sm bg-transparent text-main placeholder-main group-hover/floating:border-0 group-hover/floating:outline-0" placeholder={ placeholder || "type here ..." }>{ value }</textarea>
          : <input id={ name || "input" } className="text-sm w-full h-0 focus:h-fit bg-transparent text-main placeholder-main group-hover/floating:border-0 group-hover/floating:outline-0" type="text" name={ name || "input" } value={ value } placeholder={ placeholder || "type here ..." } />
        }
      </div>
    )
}