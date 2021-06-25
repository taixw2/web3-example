import getWeb3 from './getWeb3'
import * as abi from './abi'

// production: '0x0077D27Cb82Ff12322987b225BFCE0bB6E8931B4',
// development: '0xcd7ab30b116a9baab5f553af7145c9f763062380',
const ERC20ContractAddress = "0xcd7ab30b116a9baab5f553af7145c9f763062380"

// development: 0xfc1d6BA4355714D0fb5C79619f924b916AC1BAc3
const ERC721ContractAddress = "0x0638d412Ddf096BcddDb57a97428C4EC42C049cD"

const web3 = await getWeb3()

const accounts = {
  // mock platform address
  platformWalletAddress: {
    address: '0xd9491bA4b50bD0b072c4E2eF68D85cF9e5c18E0f',
  },
};

const erc20Contract = new web3.eth.Contract(abi.ERC20ABI, ERC20ContractAddress)
const erc721Contract = new  web3.eth.Contract(abi.ERC721ABI, ERC721ContractAddress)
const metamaskAccounts = await web3.eth.getAccounts()

// approve
document.getElementById("approve").addEventListener("click", () => {
  // 允许平台从我的钱包中转 xxx amount
  erc20Contract.methods.approve(
    accounts.platformWalletAddress.address,
    web3.utils.toWei('100000', 'ether')
  ).send({
    from: metamaskAccounts[0]
  })
  .on('transactionHash', hash => {
    console.log("transactionHash", hash)
  })
  .on("error", (err) => {
    console.error(err);
  })
})

// mint
document.getElementById("mint").addEventListener("click", () => {
  // 给自己铸币
  erc721Contract.methods.safeMint(metamaskAccounts[0], ~~(Math.random() * 10000000)).send({
    from: metamaskAccounts[0]
  })
  .on('transactionHash', hash => {
    console.log("transactionHash", hash)
  })
})

document.getElementById("transfer").addEventListener("click", () => {
  // 转账给某个钱包地址
  erc20Contract.methods.transfer(accounts.platformWalletAddress.address, web3.utils.toWei('100000', 'ether')).send({
    from: metamaskAccounts[0]
  })
  .on('transactionHash', hash => {
    console.log("transactionHash", hash)
  })
})
