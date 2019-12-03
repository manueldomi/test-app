import React, { useState } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { addClient, listClients } from "../../actions/clients";
import { addVenue } from "../../actions/venues";

import AddField from "./AddField";
import AddInput from "./AddInput";
import styles from "./styles";

const initalState = {
  name: "",
  email: "",
  lastName: "",
  firstName: "",
  companyName: "",
  age: 0
};
const ListHeader = (props) => {
  const [clientInputActive, setClientInput] = useState(false);
  const [inputs, setInput] = useState(initalState);

  const addClient = () => {
    const { addClient, listClients } = props;
    const { name, email, lastName, firstName, age } = inputs;
    const body = { name, email, lastName, firstName, age };
    addClient(body, () => {
      listClients();
      toast("Successfully Added Client");
      setClientInput(false);
      setInput(initalState);
    });
  };

  const addVenue = () => {
    const { addVenue } = props;
    const { companyName } = inputs;
    const body = { name: companyName };
    addVenue(body, () => {
      toast("Successfully Added Venue");
      setCompanyInput(false);
      setInput(initalState);
    });
  };

  const [companyInputActive, setCompanyInput] = useState(false);
  const renderClientInput = () => {
    const { name, email, firstName, lastName, age } = inputs;
    if (clientInputActive)
      return (
        <AddInput
          type="CLIENT"
          onCancelPress={() => setClientInput(false)}
          onInputChange={(e) =>
            setInput({ ...inputs, [e.target.name]: e.target.value })
          }
          name={name}
          email={email}
          firstName={firstName}
          lastName={lastName}
          age={age}
          onAcceptPress={addClient}
        />
      );
  };
  const renderCompanyInput = () => {
    if (companyInputActive)
      return (
        <AddInput
          onCancelPress={() => setCompanyInput(false)}
          type="COMPANY"
          companyName={inputs.companyName}
          onInputChange={(e) =>
            setInput({ ...inputs, [e.target.name]: e.target.value })
          }
          onAcceptPress={addVenue}
        />
      );
  };
  return (
    <div style={styles.container}>
      <AddField
        onPress={() => {
          setClientInput(true);
          setCompanyInput(false);
        }}
        title="Client"
      />
      {renderClientInput()}
      <AddField
        onPress={() => {
          setCompanyInput(true);
          setClientInput(false);
        }}
        title="Company"
      />
      {renderCompanyInput()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addClient: (client, callback) => dispatch(addClient(client, callback)),
    listClients: () => dispatch(listClients()),
    addVenue: (name, callback) => dispatch(addVenue(name, callback))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader);
