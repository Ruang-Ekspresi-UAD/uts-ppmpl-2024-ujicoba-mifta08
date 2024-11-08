import request from "supertest";
import { app } from "../server.js";
import { expect } from "chai";

describe("Integration Testing - test request endpoint user", () => {
    it("should return user data when a valid ID is provided", async () => {
        const response = await request(app).get("/users/1");

        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal({ id: 1, name: "Miftahul Rizqha" });
    });

    it("should return 404 when a user with the given ID is not found", async () => {
        const response = await request(app).get("/users/100");

        expect(response.status).to.equal(404);
        expect(response.text).to.equal("User Not Found");
    });
});