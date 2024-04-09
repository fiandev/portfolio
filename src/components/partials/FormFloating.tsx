"use client";

export default function FormFloating({
  type = "text",
  name,
  text,
  className,
  value,
  placeholder,
  formClassName,
  error = null,
  onChange = () => {},
}: {
  type?: "text" | "textarea" | "password" | "number" | "range" | "phone";
  name?: string;
  text?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  formClassName?: string;
  error?: null | any;
  onChange?: any,
}) {
  return (
    <div
      className={`transition-all flex flex-col justify-center rounded-md group/floating outline outline-gray-200 hover:outline-main hover:outline-md p-2 text-gray-400 ${className} ${formClassName} ${
        error ? "hover:outline-rose-500 outline-rose-400" : ""
      } `}
    >
      <label
        htmlFor={name}
        className="transition-all group-hover/floating:text-sm text-md group-hover/floating:font-light"
      >
        {text || name}
      </label>
      {type === "textarea" ? (
        <textarea
          onChange={onChange}
          rows={3}
          name={name || "input"}
          id={name || "input"}
          className={`peer w-full h-min-4 text-sm bg-transparent border-0 outline-0 ${
            error
              ? "placeholder-rose-500 text-rose-500"
              : "text-main placeholder-main"
          }`}
          placeholder={placeholder || "type here ..."}
        >
          {value}
        </textarea>
      ) : (
        <input
        onChange={onChange}
          id={name || "input"}
          className={`peer text-sm w-full h-0 focus:h-fit bg-transparent border-0 outline-0 ${
            error
              ? "placeholder-rose-500 text-rose-500"
              : "text-main placeholder-main"
          }`}
          type={type}
          name={name || "input"}
          value={value}
          placeholder={placeholder || "type here ..."}
        />
      )}

      {error ? (
        <p className={`text-xs text-rose-500 font-light`}>{error}</p>
      ) : null}
    </div>
  );
}
