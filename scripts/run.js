const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Tactical Dog", "Billionaire Dog", "Cute Dog"], // Names
    [
      "https://i.imgur.com/H37kxPH.jpeg", // Images
      "https://i.imgur.com/LRoLTlK.jpeg",
      "https://i.imgur.com/gzdy2Lo.jpeg",
    ],
    [1000, 700, 400], // HP values
    [100, 150, 250], // Attack damage values
    "Mercenary Cat", // Boss name
    "https://i.imgur.com/93RzKbf.jpeg", // Boss image
    10000, // Boss hp
    75 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

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
