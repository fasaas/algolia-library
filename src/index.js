import React, { Component } from "react";
import PropTypes from "prop-types";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

export default class App extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const searchClient = algoliasearch(
      "latency",
      "6be0576ff61c053d5f9a3225e2a90f76"
    );
    return (
      <InstantSearch searchClient={searchClient} indexName="demo_ecommerce">
        <SearchBox />
        <Hits />
      </InstantSearch>
    );
  }
}
