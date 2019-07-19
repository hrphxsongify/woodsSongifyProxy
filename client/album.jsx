import React from "react";

const sideBarAlbum = ({ album }) => {
  return (
    <a href="#" className="navigation__list__item">
      <i className="ion-ios-musical-notes" />
      <span>{album.name}</span>
    </a>
  );
};

export default sideBarAlbum;
