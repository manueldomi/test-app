import React from "react";
import ClientsList from "./ClientsList";
import ListHeader from "./ListHeader";
import styles from "./styles";
import Toaster from "./Toaster";

const App = () => {
  return (
    <div style={styles.container}>
      <Toaster />
      <ListHeader />
      <ClientsList />
    </div>
  );
};

export default App;
