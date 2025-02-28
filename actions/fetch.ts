type FetchOptions = {
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any;
    authToken?: string;
  };
  
  export async function fetchAPI({ url, method = "GET", body, authToken }: FetchOptions) {
    try {
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };
  
      if (authToken) {
        headers["Authorization"] = `Bearer ${authToken}`;
      }
  
      const response = await fetch(url, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });
       
      const data = await response.json();

  
      if (!response.ok) {
        console.log(data)
        return { data:null, error: data.value.message };
      }
  
      return { data, error: null };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      return { data: null, error: error.message ?? "There has been an error" };
    }
  }
  