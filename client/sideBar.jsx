import React from "react";
import SideBarAlbum from "./album.jsx";

const sideBar = ({ albums }) => {
  return (
    <section className="navigation">
      <div className="navigation__list">
        <div
          className="navigation__list__header"
          role="button"
          data-toggle="collapse"
          href="#playlists"
          aria-expanded="true"
          aria-controls="playlists"
        >
          Albums
        </div>
        {albums.map(album => (
          <div>
            <SideBarAlbum album={album} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default sideBar;
