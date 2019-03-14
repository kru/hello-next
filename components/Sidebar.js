import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const sideBarStyle = {
  display: "flex",
  flex: 1,
  flexDirection: "column"
};

const Sidebar = () => (
  <div style={sideBarStyle}>
    <li>
      <Link href="/post">
        <a style={linkStyle}>Menu 1</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a style={linkStyle}>Menu 2</a>
      </Link>
    </li>
  </div>
);

export default Sidebar;
