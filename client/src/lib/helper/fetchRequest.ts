export async function fetchRequest(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body: any = null,
  headers: any = {}
) {
  try {
    if (body) {
      body = JSON.stringify(body);
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(url, { method, body, headers });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Somethings went wrong!!!");
    }
    return data;
    return ["hello"];
  } catch (e: any) {
    throw new Error(e.message);
  }
}
