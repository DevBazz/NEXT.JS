import { ReactNode } from "react";

type CP = {
  children: ReactNode;
  comments: ReactNode;
  team: ReactNode;
};

const Layout = ({ children, comments, team }: CP) => {
  return (
    <div>
      <div>{children}</div>
      <div className="flex gap-4">
        {comments}
        {team}
      </div>
    </div>
  );
};

export default Layout;
