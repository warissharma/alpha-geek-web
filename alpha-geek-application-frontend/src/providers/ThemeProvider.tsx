"use client";
import { useAppSelector } from "@/src/redux/store";

export default function HtmlComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeObject = useAppSelector((state) => state.theme);
  return (
    <html
      lang="en"
      className={
        themeObject.theme === ""
          ? themeObject.mode
          : themeObject.theme + "-" + themeObject.mode
      }
    >
      {children}
    </html>
  );
}
