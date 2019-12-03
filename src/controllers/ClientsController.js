import MockBackend from "../MockBackend";

class ClientsController {
  listClients = async () => {
    try {
      const result = await MockBackend.listClients();
      return result;
    } catch (error) {
      throw error;
    }
  };

  addClient = async (client) => {
    try {
      const result = await MockBackend.addClient(client);

      return result;
    } catch (error) {
      throw error;
    }
  };

  removeClient = async (clientId) => {
    try {
      const result = await MockBackend.removeClient(clientId);
      return result;
    } catch (error) {
      throw error;
    }
  };

  getClient = async (clientId) => {
    try {
      const result = await MockBackend.getClient(clientId);
      return result;
    } catch (error) {
      throw error;
    }
  };

  getFavourites = async (clientId) => {
    try {
      const result = await MockBackend.getClientFavoriteVenues(clientId);
      return result;
    } catch (error) {
      throw error;
    }
  };

  addFavourite = async (clientId, venueId) => {
    try {
      const result = await MockBackend.addFavoriteVenueToClient(
        clientId,
        venueId
      );
      return result;
    } catch (error) {
      throw error;
    }
  };
  removeFavourite = async (clientId, venueId) => {
    try {
      const result = await MockBackend.removeFavoriteVenueFromClient(
        clientId,
        venueId
      );
      return result;
    } catch (error) {
      throw error;
    }
  };
}

export default new ClientsController();
