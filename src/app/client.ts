import { createThirdwebClient } from "thirdweb";

const CLIENT_ID = "bccf2ee2072999fb74132709c417cf93" as string; //process.env.NEXT_PUBLIC_CLIENT_ID as string;

export const client = createThirdwebClient({clientId: CLIENT_ID,});