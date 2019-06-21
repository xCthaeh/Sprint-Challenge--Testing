const request = require("supertest");
const server = require("./index");

describe("GET [/games]", () => {
  it("should return a 200 status code", async () => {
    const res = await request(server).get("/games");
    expect(res.status).toBe(200);
  });

  it("should return JSON response", async () => {
    const res = await request(server).get("/games");
    expect(res.type).toEqual("application/json");
  });

  it("games should have title and genre fields", async () => {
    const res = await request(server).get("/games");
    gameMatches = res.body.filter(game => game["title"] && game["genre"]);
    expect(res.body.length).toBe(gameMatches.length);
  });
});
