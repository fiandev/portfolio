export default function Loading() {
  return (
    <div className="relative w-full h-full bg-white dark:bg-slate-800">
      <div className="absolute inset-0 flex w-4 h-4 rounded-full bg-transparent border-r-2 border-main animate-spin duration-100"></div>
    </div>
  );
}
