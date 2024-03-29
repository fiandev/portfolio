import colors from "colors";

export default function log(text = "", type = "warning") {
  const icons: any = {
    warning: colors.yellow("[!]"),
    info: colors.cyan("[•]"),
    danger: colors.red("[∆]"),
    success: colors.green("[✓]"),
  };

  console.log(`${icons[type as keyof icons]}`);
}
