import Migration from "./Migrations.json";
import Election from "./Election.json";

export const MIGRATION_CONTRACT_ADDRESS = Migration.networks[80001].address;
export const ELECTION_CONTRACT_ADDRESS = Election.networks[80001].address;

export const MIGRATION_CONTRACT_ABI = Migration.abi;
export const ELECTION_CONTRACT_ABI = Election.abi;
