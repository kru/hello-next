import { withRouter } from "next/router";
import Layout from "../components/MyLayout";

const Content = withRouter(props => (
  <div>
    <p>This is the blog post content.</p>
  </div>
));

const Page = props => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
