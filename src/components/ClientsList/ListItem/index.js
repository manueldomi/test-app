import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ClientShow from "./ClientShow";
import {
  getFavourites,
  addFavourite,
  removeFavourite
} from "../../../actions/clients";

import { favourites } from "../../../selectors/clientsSelector";
import FavoritesList from "./FavouritesList";
import MockBackend from "../../../MockBackend";

import styles from "./styles";

const ListItem = ({
  data,
  onPress,
  activeFavourite,
  venues,
  favourites,
  getFavourites,
  addFavourite,
  removeFavourite
}) => {
  const [favouritesArray, updateFavourites] = useState(favourites);
  const listFavourites = () => {
    getFavourites(data.id);
  };
  const onMediaPress = (venueId, isFavourite) => {
    isFavourite
      ? removeFavourite(data.id, venueId, () => getFavourites(data.id))
      : addFavourite(data.id, venueId, () => getFavourites(data.id));
  };
  useEffect(() => updateFavourites(favourites), [favourites]);
  const renderFavourites = () => {
    if (activeFavourite && activeFavourite.active)
      return (
        <FavoritesList
          venues={venues}
          data={favouritesArray}
          onPress={onMediaPress}
        />
      );
  };
  return (
    <div style={styles.container}>
      <ClientShow
        onPress={() => {
          listFavourites();
          onPress();
        }}
        data={data}
        active={activeFavourite && activeFavourite.active}
      />
      {renderFavourites()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favourites: favourites(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFavourites: (id) => dispatch(getFavourites(id)),
    addFavourite: (clientId, venueId, callback) =>
      dispatch(addFavourite(clientId, venueId, callback)),
    removeFavourite: (clientId, venueId, callback) =>
      dispatch(removeFavourite(clientId, venueId, callback))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
