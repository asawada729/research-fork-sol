// SPDX-License-Identifier: MIT

pragma solidity >=0.8.9 <0.9.0;

import 'erc721a/contracts/extensions/ERC721AQueryable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';

contract ResearchFork is ERC721AQueryable, Ownable, ReentrancyGuard {

  bytes32 public merkleRoot;
  uint256 public price = 0.01 ether;
  uint256 public curatorRoyaltyPercentage = 20;
  uint256 public seedProvidersRoyaltyPercentage = 80;
  uint256 public numSeeds;
  address[] public seedProviderAddressList;
  // uint256[] public curatedSeedTokenIdList;
  address public curatorAddress;
  string public metadataUri;

  constructor(
    address _curatorAddress,
    address[] memory _seedProviderAddressList,
    // uint256[] memory _curatedSeedTokenIdList,
    string memory _metadataUri,
    string memory _tokenName,
    string memory _tokenSymbol
  ) ERC721A(_tokenName, _tokenSymbol) {
    curatorAddress = _curatorAddress;
    seedProviderAddressList = _seedProviderAddressList;
    // curatedSeedTokenIdList = _curatedSeedTokenIdList;
    numSeeds = _seedProviderAddressList.length;
    metadataUri = _metadataUri;
  }

  modifier mintPriceCompliance() {
    require(msg.value >= price, 'Insufficient funds!');
    _;
  }

  function mint() public payable mintPriceCompliance() {
    _safeMint(_msgSender(), 1);
  }

  function withdraw() external onlyOwner {
    // Send fund to curator
    (bool sentToCurator, ) = payable(curatorAddress).call{value: address(this).balance * curatorRoyaltyPercentage / 100}('');
    require(sentToCurator, 'Could not transfer fund to curator');

    // Send fund to seed providers
    for (uint256 i=0; i<numSeeds; i++) {
      (bool sentToSeedProvider, ) = payable(seedProviderAddressList[i]).call{value: address(this).balance * seedProvidersRoyaltyPercentage / numSeeds / 100}('');
      require(sentToSeedProvider, 'Could not transfer fund to a seed provider');
    }
  }

  // function getSeedProviderAddress(uint256 tokenId) public {

  // }

  function _startTokenId() internal view virtual override returns (uint256) {
    return 1;
  }

  function tokenURI(uint256 _tokenId) public view virtual override(ERC721A, IERC721A) returns (string memory) {
    require(_exists(_tokenId), 'ERC721Metadata: URI query for nonexistent token');

    return metadataUri;
  }
}