import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "../StateProvider";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://images.squarespace-cdn.com/content/v1/541c0b85e4b03f1e8810dfc9/1562324988658-Y3TYATG7CXT5JJDW551O/ke17ZwdGBToddI8pDm48kOrmWGHb03nzwc4W1nKV7FIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dnS2h5LEY0WtYx9R4lbXnqfxRyuArMDVpduMtKJHm3CcW07ycm2Trb21kYhaLJjddA/spotify-playlist"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
