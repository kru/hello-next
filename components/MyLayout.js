import Header from "./Header";
import SideBar from "./Sidebar";

const layoutStyle = {
  display: "flex",
  flexDirection: "row",
  flex: 1,
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const contentStyle = {
  display: "flex",
  flex: 1,
  flexDirection: "column"
};

const Layout = props => (
  <div style={layoutStyle}>
    <SideBar />
    <div style={contentStyle}>{props.children}</div>
  </div>
);

export default Layout;
