import { EstateType } from "@/types/developer";
import { loggedInUser } from "./auth";
import { fetchAPI } from "./fetch";

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
