export const ERC20ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
  inputs: [
    {
      internalType: 'address',
      name: 'spender',
      type: 'address',
    },
    {
      internalType: 'uint256',
      name: 'amount',
      type: 'uint256',
    },
  ],
  name: 'approve',
  outputs: [
    {
      internalType: 'bool',
      name: '',
      type: 'bool',
    },
  ],
  stateMutability: 'nonpayable',
  type: 'function',
}]

export const ERC721ABI = [{
  inputs: [
    {
      internalType: 'address',
      name: 'to',
      type: 'address',
    },
    {
      internalType: 'uint256',
      name: 'tokenId',
      type: 'uint256',
    },
  ],
  name: 'safeMint',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}]
