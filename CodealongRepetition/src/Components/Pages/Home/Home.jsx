import { Layout } from "../../App/Layout/Layout";

// Function Component Home
export const Home = () => {
  return (
    // Kalder Layout component med title og description props
    <Layout
      title="Layout titel: Velkommen til StringsOnline"
      description="StringsOnline sælger musikinstrumenter"
    >
      {/* Alt inde i Layout komponentet er props.children */}
      <p>Her kommer mine props fra Home.jsx</p>
    </Layout>
  );
};
