require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://ethereum-goerli-rpc.allthatnode.com',
      from: '0x36C63B0B9475eED24F55afBBDe87286d3221261E',
      accounts: [
        '6d6842d569319f82d36e5aafcc0f75ccf0cb62f751fbe28dba74b6693cd256a9',
        // '1c2401be93482925263dccd993801b9c0358390368cced6634de6385f44e3e1a',
        // '45fe3065ccad072594e971b578808c93df21a2e79d66f8d28ecbb460c2e992a5',
        // '14c40cb6ee36088ecf889b384223b9462ed7472cfd54d260227d198417af0d74',
      ],
    }
  }
};
