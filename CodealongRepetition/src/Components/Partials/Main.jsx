// Function Component Main
// props findes i Home.jsx
export const Main = (props) => {
  return (
    <main>
      <h2>This is main</h2>
      {props.children}
    </main>
  );
};
