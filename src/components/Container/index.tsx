import { PropsWithChildren, FunctionComponent } from "react";

const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col flex-1 max-w-5xl min-h-screen mx-auto mt-8 lg:mt-16">
      {children}
    </div>
  );
};

export default Container;
