const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Tactical Dog", "Billionaire Dog", "Cute Dog"],
    [
      "https://i.imgur.com/H37kxPH.jpeg", // Images
      "https://i.imgur.com/LRoLTlK.jpeg",
      "https://i.imgur.com/gzdy2Lo.jpeg",
    ],
    [1000, 700, 400], // HP values
    [100, 150, 250], // Attack damage value
    "Mercenary Cat", // Boss name
    "https://i.imgur.com/93RzKbf.jpeg", // Boss image
    10000, // Boss hp
    75 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  console.log("Done deploying and minting!");

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
