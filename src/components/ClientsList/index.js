import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { clients } from "../../selectors/clientsSelector";
import { venues } from "../../selectors/venuesSelector";
import { listClients } from "../../actions/clients";
import { listVenues } from "../../actions/venues";
import ListItem from "./ListItem";
import FilterBar from "./FilterBar";

import styles from "./styles";

const ClientsList = (props) => {
  const [valueSlide, setValue] = React.useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [clients, updateClients] = useState(props.clients);
  const [venues, updateVenues] = useState(props.clients);

  useEffect(() => {
    updateClients(props.clients);
  }, [props.clients]);

  useEffect(() => {
    updateVenues(props.venues);
  }, [props.venues]);

  useEffect(() => props.listClients(), []);
  useEffect(() => props.listVenues(), []);

  const renderItems = () => {
    const clientsList = [...clients].filter(
      (element) =>
        (!element.email.search(searchInput) ||
          !element.name.search(searchInput)) &&
        element.age >= valueSlide[0] &&
        element.age <= valueSlide[1]
    );

    const render = clientsList.map((client) => (
      <ListItem
        onPress={() =>
          setActiveFavourite({ id: client.id, active: !activeFavourite.active })
        }
        activeFavourite={
          activeFavourite.id === client.id ? activeFavourite : null
        }
        venues={venues}
        data={client}
      />
    ));
    return render;
  };
  const [activeFavourite, setActiveFavourite] = useState({
    id: "",
    active: false
  });
  const [searchInput, setSearchInput] = useState("");
  const handleInputChange = (e) => {
    setSearchInput([e.target.value]);
  };
  return (
    <div style={styles.container}>
      <FilterBar
        onInputChange={handleInputChange}
        value={searchInput}
        onSlideChange={handleChange}
        valueSlide={valueSlide}
      />

      <div style={styles.clientsList}>{renderItems(searchInput)}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    clients: clients(state),
    venues: venues(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listClients: () => dispatch(listClients()),
    listVenues: () => dispatch(listVenues())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);
