import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
/*
headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '021d7a1f2bmsh13c25b72d4b5063p1edd61jsn391a49a6bbe3'
  }
*/

export const fetchBayutAPI = async (url) => {
  console.log("I am fetching: ", url);
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": process.env.BayutAPI_KEY,
    },
  });
  return data;
};
//021d7a1f2bmsh13c25b72d4b5063p1edd61jsn391a49a6bbe3
export const getRelatedProps = async (purpose, price) => {
  return await fetchBayutAPI(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=${purpose}&hitsPerPage=9`
  );
};

export const getPropsForSale = async () => {
  const count = 20;
  return await fetchBayutAPI(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=${count}`
  );
};

export const getPropsForRent = async (count = 20, page = 1) => {
  return await fetchBayutAPI(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=${count}&page=${page}`
  );
};

export const getDetailedProp = async (id = 4937770) => {
  return await fetchBayutAPI(`${baseUrl}/properties/detail?externalID=${id}`);
};
export const filterProps = async (
  userPurpose,
  userMinPrice,
  userMaxPrice,
  userMinRooms,
  userMaxRooms,
  userMinBaths,
  userMaxBaths,
  userMinArea,
  userMaxArea,
  userFurnishingStatus,
  userTypeId,
  page = "1"
) => {
  const count = 20;
  console.log("Hey I am running with pageNo = ", page);
  let queryUrl = `${baseUrl}/properties/list?locationExternalIDs=5002&hitsPerPage=${count}`;
  if (userPurpose != "") {
    queryUrl += `&purpose=${userPurpose}`;
  }
  if (userMaxArea != 0) {
    queryUrl += `&areaMin=${userMinArea}&areaMax=${userMaxArea}`;
  }
  if (userMaxPrice != 0) {
    queryUrl += `&priceMin=${userMinPrice}&priceMax=${userMaxPrice}`;
  }
  if (userMaxRooms != 0) {
    queryUrl += `&roomsMin=${userMinRooms}&roomsMax=${userMaxRooms}`;
  }
  if (userMaxBaths != 0) {
    queryUrl += `&bathsMin=${userMinBaths}&bathsMax=${userMaxBaths}`;
  }
  if (userFurnishingStatus != "") {
    queryUrl += `&furnishingStatus=${userFurnishingStatus}`;
  }
  if (userTypeId != 0) {
    queryUrl += `&categoryExternalID=${userTypeId}`;
  }
  queryUrl += `&page=${page}`;
  return await fetchBayutAPI(queryUrl);
};
