import { withRouter } from "next/router";
import Layout from "../components/Layout";

const Post = ({ router }) => {
  const { title } = router.query;
  return (
    <Layout title={title}>
      <p style={{ width: '80vw'}}>
        Lorem Ipsum Is Simply Dummy Text Of The Printing. Lorem Ipsum is simply
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type
        specimen book
      </p>
    </Layout>
  );
};

export default withRouter(Post);
