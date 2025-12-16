import React, { ReactNode, Ref } from "react";
import ExportHeader from "./export-header";
import ExportFooter from "./export-footer";

const ExportWrapper = ({
  ref,
  className,
  children,
  style,
  wrapperClassName,
}: {
  ref: Ref<HTMLElement> | undefined;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  wrapperClassName?: string;
}) => {
  return (
    <main
      style={style}
      ref={ref}
      className={`w-5xl overflow-hidden aspect-square ${className} p-10 gap-10 flex flex-col`}
    >
      <ExportHeader />
      <div className={`flex-1 ${wrapperClassName}`}>{children}</div>
      <ExportFooter />
    </main>
  );
};

export default ExportWrapper;
