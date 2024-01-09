import React, { useEffect } from "react";

const BlockNumber = () => {
  // const apiUrlCurrent = `https://explorer.mantle.xyz/api?module=block&action=getblocknobytime×tamp=${currentTimestamp}&closest=after`;
  // const listOfBlocks = `https://explorer.mantle.xyz/api?module=account&action=getminedblocks&address=0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7`;
  // const apiUrlTwelveHoursAgo = `https://explorer.mantle.xyz/api?module=block&action=getblocknobytime&timestamp=${twelveHoursAgoTimestamp}&closest=before`;
  // const currentTime = Date.now();

  // // Calculate 12 hours in milliseconds
  // const twelveHoursInMillis = 12 * 60 * 60 * 1000;

  // // Calculate the timestamp 12 hours ago from the current time
  // const twelveHoursAgoTimestamp = Math.floor(
  //   (currentTime - twelveHoursInMillis) / 1000
  // );

  // console.log("Timestamp 12 hours ago:", twelveHoursAgoTimestamp);

  // const fetchBlockNumber = async () => {

  //   try {
  //     // Fetch block number 12 hours ago
  //     const allBlocks = await fetch(listOfBlocks);
  //     const responseTwelveHoursAgo = await fetch(apiUrlTwelveHoursAgo);
  //     const dataTwelveHoursAgo = await responseTwelveHoursAgo.json();
  //     const allBlocksLists = await allBlocks.json();
  //     if (allBlocksLists.status === "1") {
  //       console.log(allBlocks);
  //     } else {
  //       console.error("Unable to fetch block number");
  //     }

  //     if (
  //       dataTwelveHoursAgo.status === "1" &&
  //       dataTwelveHoursAgo.result &&
  //       dataTwelveHoursAgo.result.blockNumber
  //     ) {
  //       console.log(
  //         "Block number 12 hours ago:",
  //         dataTwelveHoursAgo.result.blockNumber
  //       );
  //     } else {
  //       console.error("Unable to fetch block number 12 hours ago");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching block number 12 hours ago:", error);
  //   }

  //   // API endpoint for current timestamp
  //   // ?module=block&action=getblocknobytime×tamp={blockTimestamp}&closest={before/after}

  //   try {
  //     // Fetch current block number
  //     const responseCurrent = await fetch(apiUrlCurrent);
  //     const dataCurrent = await responseCurrent.json();

  //     if (
  //       dataCurrent.status === "1" &&
  //       dataCurrent.result &&
  //       dataCurrent.result.blockNumber
  //     ) {
  //       console.log("Current block number:", dataCurrent.result.blockNumber);
  //     } else {
  //       console.error("Unable to fetch current block number");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching current block number:", error);
  //   }
  // };

  //   // Fetch block numbers when the component mounts
  //   // Get the current time in milliseconds
    

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        color: "black",
      }}
    ></div>
  );
};

export default BlockNumber;
