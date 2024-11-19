import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingContractABI";

const nftContractAddress = "0x294B1F0b9b3873122Bf57Fea159C8898a2B0f555";
const rewardTokenContractAddress = "0xe063dab453125460a158307b748692d9905a19d3";
const stakingContractAddress = "0x99E236500Dc4C41E07561f8a083378B2c38aDD06";

export const NFT_CONTRACT = getContract({
	client: client,
	chain: chain,
	address: nftContractAddress,
});

export const REWARD_TOKEN_CONTRACT = getContract({
	client: client,
	chain: chain,
	address: rewardTokenContractAddress,
});

export const STAKING_CONTRACT = getContract({
	client: client,
	chain: chain,
	address: stakingContractAddress,
	abi: stakingABI,
});