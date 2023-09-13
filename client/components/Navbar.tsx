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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <nav>Navbar</nav>
    </>
  );
};

export default Navbar;
