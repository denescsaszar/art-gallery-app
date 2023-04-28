import Footer from "../Footer";
import Heading from "../Heading";
import Nav from "../Nav";

export default function Layout({ data, children }) {
  return (
    <Layout>
      <Heading />
      <Nav data={data} />
      {children}
      <Footer />
    </Layout>
  );
}
