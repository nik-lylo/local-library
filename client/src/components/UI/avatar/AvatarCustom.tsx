import React, { FC } from "react";
import "./avatarCustom.scss";

interface AvatarCustomProps {
  url: string;
}

const AvatarCustom: FC<AvatarCustomProps> = ({ url }) => {
  return (
    <div className="avatar-custom">
      {url === "" ? (
        <div className="avatar-custom__icon icon-user"></div>
      ) : (
        <img src="#" alt="" />
      )}
    </div>
  );
};

export default AvatarCustom;
