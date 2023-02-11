export default function ErrorPage ({ code = 500, message = "server error", suggest }) {
  return (
      <div className="h-screen flex flex-col justify-center text-center items-center">
        <h1 className="text-main font-bold text-xl">
          {code}
        </h1>
        <div className="font-semibold flex flex-col text-center">
          <p className="text-gray-600 text-md">{ message }</p>
          {
            suggest ?
              <span className="text-blue-400 text-xs">{ suggest }</span>
            : null
          }
        </div>
      </div>
    )
}