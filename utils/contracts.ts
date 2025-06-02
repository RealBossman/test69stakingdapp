import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingContractABI";

const nftContractAddress = "0x294B1F0b9b3873122Bf57Fea159C8898a2B0f555";
const rewardTokenContractAddress = "0x4b46baE20730916CeeF88201FAC2945542A11A09";
const stakingContractAddress = "0xA2f2bedB0Ec38904AaA84e09d1A5e0F19A45595B";

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
