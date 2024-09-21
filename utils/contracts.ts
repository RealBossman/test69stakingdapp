import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingContractABI";

const nftContractAddress = "0x19eB60cB3A3f489E3e45988feCBAB2FA73535620";
const rewardTokenContractAddress = "0x1d57ed76a064733cbb0263b9f877b146755437fb";
const stakingContractAddress = "0x4655D1E9729680753fF176F10832B476Be0F3201";

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