import Head from "next/head";

const Navbar = ({ title }: { title: String }) => {
  return (
    <>
      <Head>
        <title>{`ChatSmart - ${title}`}</title>
        <meta
          name="description"
          content="Connecting People, One Post at a Time"
        />
      </Head>
      <nav>Navbar</nav>
    </>
  );
};

export default Navbar;
