import { PropsWithChildren, FunctionComponent } from "react";

const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto mt-16">{children}</div>
  );
};

export default Container;
