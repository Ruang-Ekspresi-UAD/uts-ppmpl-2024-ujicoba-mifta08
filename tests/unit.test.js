import { expect } from "chai";
import { findUserById } from "../repository.js";

describe("unit testing - mencari user berdasarkan id", () => {
    it("mencari user dengan id yang ada", async () => {
        const user = findUserById(1);
        expect(user).to.deep.equal({ id: 1, name: "Miftahul Rizqha" });
    })

    it("testing ketika user id tidak ada", async()=>{
        const user = findUserById(100);
        expect(user).to.be.null;
    })


})

