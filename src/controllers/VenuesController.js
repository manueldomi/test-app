import MockBackend from "../MockBackend";

class VenuesController {
  addVenue = async (venue) => {
    try {
      const result = await MockBackend.addVenue(venue);

      return result;
    } catch (error) {
      throw error;
    }
  };

  listVenues = async () => {
    try {
      const result = await MockBackend.listVenues();

      return result;
    } catch (error) {
      throw error;
    }
  };
}

export default new VenuesController();
