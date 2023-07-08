import { useTheme } from "@hooks/useTheme";

export default function Wrapper({ children }: { children?: React.ReactNode }) {
  const theme = useTheme();

  return <div className="w-full pt-10 md:pt-14 lg:pt-10">{children}</div>;
}
