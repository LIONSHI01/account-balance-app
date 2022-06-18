/* Moralis init code */
const serverUrl = "https://w4jt9wczr0ur.usemoralis.com:2053/server";
const appId = "cOhVzIVvs2EJ3t87SQD28iBHG93KyNm8ReVhaToF";
Moralis.start({ serverUrl, appId });

/* TODO: Add Moralis Authentication code */

/* Authentication code */
async function login() {
  try {
    // let user = Moralis.User.current();
    // if (!user) {
    //   user = await Moralis.authenticate({
    //     signingMessage: "Log in using Moralis",
    //   })
    //     .then(function (user) {
    //       console.log("logged in user:", user);
    //       console.log(user.get("ethAddress"));
    //       // console.log(user.getAllERC20());
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
    const balances = await Moralis.Web3.getAllERC20({
      address: "0x7c04c40Eeb8Ab6B645c2739F69c72AA7f10E4AdB",
    });
    console.log(balances);
  } catch (err) {
    console.error(err);
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
