// SPDX-License-Identifier: MIT

pragma solidity >=0.8.9 <0.9.0;

import 'erc721a/contracts/extensions/ERC721AQueryable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/cryptography/MerkleProof.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';

contract Seed is ERC721AQueryable, Ownable, ReentrancyGuard {

  bytes32 public merkleRoot;
  mapping(address => bool) public whitelistClaimed;
  string[] public metadataUriList;

  constructor(
    string memory _tokenName,
    string memory _tokenSymbol
  ) ERC721A(_tokenName, _tokenSymbol) {
    metadataUriList.push('Offset metadataUri');
  }

  modifier mintCompliance(string memory metadataUri) {
    require(bytes(metadataUri).length > 0, 'Invalid Metadata URI!');
    _;
  }

  function mint(string memory _metadataUri) public payable mintCompliance(_metadataUri) {
    metadataUriList.push(_metadataUri);

    _safeMint(_msgSender(), 1);
  }

  function _startTokenId() internal view virtual override returns (uint256) {
    return 1;
  }

  function tokenURI(uint256 _tokenId) public view virtual override(ERC721A, IERC721A) returns (string memory) {
    require(_exists(_tokenId), 'ERC721Metadata: URI query for nonexistent token');
    require(metadataUriList.length > _tokenId, 'Token does not haveSender does not have associated metadata');

    return metadataUriList[_tokenId];
  }

  function getMetadataUriListLength() public view returns (uint256) {
    return metadataUriList.length;
  }
}