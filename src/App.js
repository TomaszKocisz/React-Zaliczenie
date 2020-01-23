import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import CatalogPage from "./components/CatalogPage";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={CatalogPage} />
          <Route path="/about" component={AboutPage} />
          <Route render={() => <h2>Page not found</h2>} />
          <CatalogPage />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
