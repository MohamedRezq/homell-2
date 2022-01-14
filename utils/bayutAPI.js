import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
/*
headers: {
    'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '021d7a1f2bmsh13c25b72d4b5063p1edd61jsn391a49a6bbe3'
  }
*/

export const fetchBayutAPI = async (url) => {
  console.log("I am fethcing new url: ", url)
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "021d7a1f2bmsh13c25b72d4b5063p1edd61jsn391a49a6bbe3",
    },
  });
  return data;
};

export const getPropsForSale = async (count = 20) => {
  return await fetchBayutAPI(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=${count}&page=1`
  );
};

export const getPropsForRent = async (count = 20) => {
  return await fetchBayutAPI(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=${count}`
  );
};

export const getDetailedProp = async (id = 4937770) => {
  return await fetchBayutAPI(
    `${baseUrl}/properties/detail?externalID=${id}`
  )
}
export const filterProps = async (
  purpose = "for-sale",
  minArea,
  maxArea,
  minPrice,
  maxPrice,
  noRooms,
  noBaths,
  furnishStatus,
  typeId
) => {
  const count = 15;
  console.log("got API props: ",purpose = "for-sale",
      minArea,
      maxArea,
      minPrice,
      maxPrice,
      noRooms,
      noBaths,
      furnishStatus,
      typeId);
  let queryUrl = `${baseUrl}/properties/list?locationExternalIDs=5002&hitsPerPage=${count}`
  if (purpose != "default") {queryUrl += `&purpose=${purpose}`}
  if (minArea != "0") {queryUrl += `&areaMin=${minArea}&areaMax=${maxArea}`}
  if (minPrice != "0") {queryUrl += `&priceMin=${minPrice}&priceMax=${maxPrice}`}
  if (noRooms != "0") {queryUrl.concat(`&roomsMax=${noRooms}&roomsMin=${noRooms}`)}
  if (noBaths != "0") {queryUrl.concat(`&bathsMin=${noBaths}&bathsMax=${noBaths}`)}
  if (typeId != "4") {queryUrl.concat(`&categoryExternalID=${typeId}`)}
  if (furnishStatus != "unfurnished") {queryUrl.concat(`&furnishingStatus=${furnishStatus}`)}
console.log("Final Query: ", queryUrl)
  return await fetchBayutAPI(
    queryUrl
  );
};
