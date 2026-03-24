import { ordino, ordinoUpdate } from "../payloads/OrdinoPayloads";
import { oi, ApiServiceType } from "@ordino.ai/ordino-engine";

const http = oi.api(ApiServiceType.HTTP);

class OrdinoService {
    static create_item() {
        http.baseUrl("https://demoapi.ordino.ai/api/");
        http.setUrl("items");
        http.requestPost(ordino).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('message', 'Item created successfully');
            expect(response.body.data).to.have.property('id');
            expect(response.body.data).to.have.property('name', ordino.name);
            expect(response.body.data).to.have.property('description', ordino.description);
            expect(response.body.data).to.have.property('category', ordino.category);
            expect(response.body.data).to.have.property('createdAt');
            expect(response.body.data).to.have.property('updatedAt');
            http.setValue("itemId", response.body.data.id);
        });
        return this;
    }

    static get_all_items() {
        http.setUrl(`items`);
        http.requestGet().then((response) => {
            expect(response.status).to.eq(200);

        });
        return this;
    }

    static get_item_by_Id() {
        http.setUrl(`items/${http.getValue("itemId")}`);
        http.requestGet().then((response) => {
            expect(response.status).to.eq(200);

        });
        return this;
    }

    static update_item() {
        http.setUrl(`items/${http.getValue("itemId")}`);
        http.requestPut(ordinoUpdate).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('message', 'Item updated successfully');
            expect(response.body.data).to.have.property('id');
            expect(response.body.data).to.have.property('name', ordinoUpdate.name);
            expect(response.body.data).to.have.property('description', ordinoUpdate.description);
            expect(response.body.data).to.have.property('category', ordinoUpdate.category);
            expect(response.body.data).to.have.property('createdAt');
            expect(response.body.data).to.have.property('updatedAt');
        });
        return this;
    }

    static delete_item() {
        http.setUrl(`items/${http.getValue("itemId")}`);
        http.requestDelete().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('message', 'Item deleted successfully');
        });
        return this;
    }

}

export default OrdinoService;