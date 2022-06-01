import { AJAX } from "./helper.js";
import { ETHER_API_KEY } from "./helper.js";

const wallet = "0x1477AaccD85079AFF8c8e0d54A65c245CCEcBaDd";

const singleAccountBalance = `https://api.etherscan.io/api?module=account&action=balance&address=${wallet}&tag=latest&apikey=${ETHER_API_KEY}`;

AJAX(singleAccountBalance);
