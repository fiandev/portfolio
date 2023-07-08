export default function ErrorPage({
  code = 500,
  message = "server error",
  suggest,
}) {
  return (
    <div className="h-screen flex flex-col justify-center text-center items-center">
      <h1 className="text-main font-bold text-xl lg:text-2xl">{code}</h1>
      <div className="font-semibold flex flex-col text-center">
        <p className="text-gray-600 text-lg lg:text-xl">{message}</p>
        {suggest ? (
          <span className="text-blue-400 text-xs lg:text-sm">{suggest}</span>
        ) : null}
      </div>
    </div>
  );
}
