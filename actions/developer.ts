import { EstateType } from "@/types/developer";
import { loggedInUser } from "./auth";
import { fetchAPI } from "./fetch";
import { estateZType } from "@/schemas/developer";

export async function getAllEstates(pageNumber?:number): Promise<{
  data: {
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalRecords: number;
    data: EstateType[];
  } | null;
  error: string | null;
}> {
  const { data, error } = await loggedInUser();
  if (error) {
    return { data: null, error: "There was an error fetching your data" };
  }
  let endPoint = "https://dev-api.giddaa.com/developer/estate/get-all";
  if (pageNumber) {
    endPoint = endPoint+"?pageNumber="+pageNumber
  }

  const { data: fetchData, error: fetchErr } = await fetchAPI({
    url: endPoint,
    method: "GET",
    authToken: data?.token,
  });

  if (fetchErr) {
    return { data: null, error: "Error fetching data" };
  }
  return { data: fetchData.value.value, error: null };
}



export async function getCountries(){
    const { data, error } = await loggedInUser();
  if (error) {
    return { data: null, error: "There was an error fetching your data. Please log in" };
  }
    const { data:fetchData, error:fetchErr } = await fetchAPI({
        url: "https://dev-api.giddaa.com/public/country/get-all?pageSize=1000",
        method: "GET",
        authToken: data?.token,
      });
      if (fetchErr) {
        return { data: null, error: "There was an error fetching your data." };
      }
      return {data:fetchData.value.value.data, error:null}
}

export async function getStates(countryId:string){
    const { data, error } = await loggedInUser();
  if (error) {
    return { data: null, error: "There was an error fetching your data. Please log in" };
  }
    const { data:fetchData, error:fetchErr } = await fetchAPI({
        url: `https://dev-api.giddaa.com/public/state/${countryId}/get-all?pageSize=1000`,
        method: "GET",
        authToken: data?.token,
      });
      if (fetchErr) {
        return { data: null, error: "There was an error fetching your data." };
      }
      return {data:fetchData.value.value.data, error:null}
}

export async function getCities(stateId:string){
    const { data, error } = await loggedInUser();
  if (error) {
    return { data: null, error: "There was an error fetching your data. Please log in" };
  }
    const { data:fetchData, error:fetchErr } = await fetchAPI({
        url: `https://dev-api.giddaa.com/public/city/${stateId}/get-all?pageSize=1000`,
        method: "GET",
        authToken: data?.token,
      });
      if (fetchErr) {
        return { data: null, error: "There was an error fetching your data." };
      }
      return {data:fetchData.value.value.data, error:null}
}

export async function createEstate(formData:estateZType) {
    const { ...payload } = formData;
    const { data, error } = await loggedInUser();
  if (error) {
    return { data: null, error: "There was an error fetching your data. Please log in" };
  }
  const { data:fetchData, error:fetchErr } = await fetchAPI({
    url: `https://dev-api.giddaa.com/developer/estate/create`,
    method: "POST",
    body: payload,
    authToken: data?.token,
  });
  if (fetchErr) {
    console.log(fetchErr)
    return { data: null, error: "There was an error creating the estate." };
  }
  console.log(fetchData)
  return {data:fetchData, error:null}

}

export async function getEstate(estateId:string):Promise<{
    data: EstateType | null;
    error: string | null;
}>{
    const { data, error } = await loggedInUser();
  if (error) {
    return { data: null, error: "There was an error fetching your data. Please log in" };
  }
    const { data:fetchData, error:fetchErr } = await fetchAPI({
        url: `https://dev-api.giddaa.com/developer/estate/${estateId}`,
        method: "GET",
        authToken: data?.token,
      });
      if (fetchErr) {
        return { data: null, error: "There was an error fetching your data." };
      }
      return {data:fetchData.value.value.data, error:null}
}
