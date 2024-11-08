import request from "supertest";
import { expect } from "chai";
import { app } from "../server.js"; // Gunakan named import

describe("API Testing - mengambil user berdasarkan id", () => {
    it("should return user data for valid user ID", async () => {
        const res = await request(app).get("/users/1");
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property("id", 1);
        expect(res.body).to.have.property("name", "Miftahul Rizqha");
    });

    it("should return 404 when user not found", async () => {
        const res = await request(app).get("/users/999");
        expect(res.status).to.equal(404);
        expect(res.text).to.equal("User Not Found");
    });
});
