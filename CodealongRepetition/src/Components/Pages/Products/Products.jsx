import { useAuth } from "../../App/Auth/Auth";
import { Layout } from "../../App/Layout/Layout";

// Function Component Home
export const Products = () => {
  // Eksempel på anvendelse af useAuth hook
  const { loginData } = useAuth();

  return (
    // Kalder Layout component med title som props
    <Layout
      title="Layout titel:Produkter"
      description="Layout description:Se vores udvalg af instrumenter"
    >
      {/* Eksempel på tracking af om bruger er logget ind */}
      {/* Vi kan sætte den til at vise noget hvis vi er logget ind, og ingenting hvis vi ikke er logget ind */}
      {!loginData ? (
        <p>Jeg er ikke logget ind</p>
      ) : (
        <p>Jeg er logget ind som {loginData.username}</p>
      )}
    </Layout>
  );
};
