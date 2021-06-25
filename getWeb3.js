export default async () => {
  try {
    await window.ethereum.enable();
    return new Web3(window.ethereum);
  } catch (error) {
    // eslint-disable-next-line no-alert
    window.alert('You need to allow MetaMask.');
    throw new Error('You need to allow MetaMask.');
  }
}