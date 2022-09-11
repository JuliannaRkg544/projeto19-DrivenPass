import * as wifiRepository from "../repository/wifiRepository.js";

async function createWifi(
  title: string,
  password: string,
  lable: string,
  userId: number
) {
  const wifi = await wifiRepository.searchAllWifi(userId);
  if (wifi.length > 0) {
    const wifititle = wifi.map((wifi) => {
      return wifi.title;
    });
    if (wifititle.includes(title)) {
      throw { type: "forbidden", message: "title name already exist" };
    }
  }
  const wifidata: wifiRepository.WifiData = {
    userId,
    title,
    lable,
    password,
  };
  return await wifiRepository.createWifi(wifidata);
}

async function searchAllWifi(userId: number) {
  const wifi = await wifiRepository.searchAllWifi(userId);
  if (wifi.length === 0) {
    throw { type: "unauthorized", message: "not note for this userid" };
  }
  return wifi;
}

async function searchWifiById(wifiId: number) {
  const wifi = await wifiRepository.searchWifiById(wifiId);
  if (!wifi) {
    throw { type: "unauthorized", message: "not note for this id" };
  }
  return wifi;
}

async function deleteWifi(wifiId: number, userId: number) {
  const wifi = await wifiRepository.searchWifiById(wifiId);
  if (!wifi) {
    throw { type: "unauthorized", message: "does not exist" };
  }
  if (Number(wifi.userId) !== Number(userId)) {
    throw { type: "unauthorized", message: " is not your note" };
  }
  await wifiRepository.deleteWifi(wifiId);
}

export { createWifi, searchAllWifi, searchWifiById, deleteWifi };
