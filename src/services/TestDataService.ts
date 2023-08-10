import http from "@/api/itemApi";

/* eslint-disable */
class TestDataService {
  getAll(): Promise<any> {
    return http.get("/GetItems");
  }

  create(data: any): Promise<any> {
    return http.post("/CreateItem", data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/${id}`);
  }

  update(data: any): Promise<any> {
    return http.put(`/UpdateItem`, data);
  }  
}

export default new TestDataService();