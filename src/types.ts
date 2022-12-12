import { WsProvider } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import { Probot } from "probot";

export type TipNetwork = "localtest" | "kusama" | "polkadot";

export type TipSize = "small" | "medium" | "large";

export type TipMetadata = {
  provider: WsProvider;
  botTipAccount: KeyringPair;
  tipUrl: string;
};

export type ContributorAccount = {
  address: string;
  network: TipNetwork;
};

export type Contributor = {
  githubUsername: string;
  account: ContributorAccount;
};

export type State = {
  allowedGitHubOrg: string;
  allowedGitHubTeam: string;
  seedOfTipperAccount: string;
  bot: Probot;
};
