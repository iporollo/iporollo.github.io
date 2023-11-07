---
title: Triggerify NFT
date: "2022-06-05T00:00:00"
---

[Triggerify NFT](https://triggerify.xyz) was a meme project I built as part of my web3 exploration. 

## Backstory

In April 2022, I stayed in HackHouse NYC, a hacker house organized by [LaunchHouse](https://launchhouse.com). During my time in New York, most of the founders and builders that I met were in the web3 space. I've had massive FOMO towards web3 for a while, and the trip was the catalyst that fully "red-pilled" me. As I came back to San Francisco at the end of April, I started devoting a lot more of my time to researching web3. Specifically, how my experience in the data & infrastructure space can be carried over into web3. 

As part of my exploration, I wanted to build an application that used web3 technologies. As I was thinking of what to build, I remembered one of my old colleagues, [Fillip Peyton](), built a meme site for "triggering" images. He called it [triggerify.me](https://triggerify.me). It inspired me to build an NFT version of triggerify, that allows you to connect your wallet, select an NFT, "triggerify it", and mint it as a new NFT. 

If you have an Ethereum wallet and own NFTs, feel free to check it out at [https://triggerify.xyz](https://triggerify.xyz)

## Tech Stack

To build this I used NextJs for the frontend. I used the Rainbow rainbowkit which provided a component to connect wallets. I used the wagmi library as the provider. I used Alchemy's NFT api to fetch the NFT images related to a wallet. I then used nftport.xyz to mint the NFTs. The next step for this project is to create a custom smart contract so that it is not limited by nftport's 100 free mints. 

The most fun part of the implementation behind the creation of the gif. Since Triggerify NFT allows users to mint new versions of their NFT, there needed to be a way to animate (or "triggerify") the original NFT, then create a gif out of it, then mint that gif. For this, I used an HTML canvas along with gif.js. First, the NFT has to be rendered onto the canvas. Then the NFT has to be animated based on the trigger level selected. Once the user is done chosing the trigger level and hits the "Mint" button, a gif.js worker would kicks off. It records the canvas along with the "triggerified" NFT. It records ~300 frames before finishing, then creates a blob of the gif file. Once the blob file is created, it is send to NFTPort to mint the NFT.

The full code for the project is open sourced and can be found in this [Github repository]().

## Costs

I spun up a simple hobby container for $7 / month on Heroku. I'm curious if I can host this on something like IPFS for free :think: