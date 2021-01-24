import React from "react";
import { PlaidLink, LinkSuccess, LinkExit } from "react-native-plaid-link-sdk";
import { Text } from "react-native";

export default function MyPlaidComponent() {
  const onSuccess = (success) => {
    fetch("https://yourserver.com/get_access_token", {
      method: "POST",
      body: {
        publicToken: linkSuccess.publicToken,
        accounts: linkSuccess.metadata.accounts,
        institution: linkSuccess.metadata.institution,
        linkSessionId: linkSuccess.metadata.linkSessionId,
      },
    });
  };

  const onExit = (linkExit) => {
    supportHandler.report({
      error: linkExit.error,
      institution: linkExit.metadata.institution,
      linkSessionId: linkExit.metadata.linkSessionId,
      requestId: linkExitlinkExit.metadata.requestId,
      status: linkExit.metadata.status,
    });
  };

  usePlaidEmitter((event) => {
    console.log(event);
  });
  return (
    <PlaidLink
      tokenConfig={{
        token: "#GENERATED_LINK_TOKEN#",
      }}
      onSuccess={(success) => {
        console.log(success);
      }}
      onExit={(exit) => {
        console.log(exit);
      }}
    >
      <Text>Add Account</Text>
    </PlaidLink>
  );
}
