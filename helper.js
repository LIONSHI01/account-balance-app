// export const API_KEY = "91fa63f7a40081482140c545e910c5139710b598";
export const ETHER_API_KEY = "US4TVU1M8UF4K7T2CBXS1MU5E3IPC2718G";

export const AJAX = async function (url) {
  try {
    // const options = {
    //   // method: "GET",
    //   accept: "application/json",
    //   AccessKey: "91fa63f7a40081482140c545e910c5139710b598",
    // };

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
