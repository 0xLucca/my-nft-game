const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Tactical Dog", "Billionaire Dog", "Cute Dog"], // Names
    [
      "QmWwdvfs45tzcyqmVWCb4tKDc99TiQGWaFUG4DCpAoyFcL", // Images
      "QmbBM42gruM2Z1LepX9BUK6X5TDk5tk5PzsSZHp6BaFrkb",
      "QmT9mTMgsSRdCZhRBY3HhvXDdKrT4sdx5rgTYzMQFSeVmb",
    ],
    [1000, 700, 400], // HP values
    [100, 150, 250], // Attack damage values
    "Mercenary Cat", // Boss name
    "QmSd1VCDk5oMg8DMohpMADoFaFoDx3NMgfwZtRN5CHmUto", // Boss image
    10000, // Boss hp
    75 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.restoreHealth();
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
