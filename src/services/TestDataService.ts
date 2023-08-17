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

  update(id:any, data: any): Promise<any> {
    return http.put(`/UpdateItem/${id}`, data);
  }  
}

export default new TestDataService();