import { ordinoSuite } from "@ordino.ai/ordino-engine";
import OrdinoService from "../../service/requests/ordinoService";

ordinoSuite("API Tests", () => {
  
  it("Should add a new item", () => {
    OrdinoService.create_item();
  });

  it("Should get all items", () => {
    OrdinoService.get_all_items();
  });

  it("Should get an item by id", () => {
    OrdinoService.get_item_by_Id();
  });

  it("Should update an item", () => {
    OrdinoService.update_item();
  });

  it("Should delete an item", () => {
    OrdinoService.delete_item();
  });
 
});