import { createThirdwebClient } from "thirdweb";

const CLIENT_ID = "4df579dc69cc1b886e9acc3145905cc5" as string; //process.env.NEXT_PUBLIC_CLIENT_ID as string;

export const client = createThirdwebClient({clientId: CLIENT_ID,});