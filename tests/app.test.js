const request = require("supertest");
const app = require("../app/app");

describe("CI/CD App Tests", () => {
  test("GET / should return CI/CD UI", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("CI/CD PIPELINE IS WORKING");
  });

  test("GET /health should return UP", async () => {
    const res = await request(app).get("/health");
    expect(res.body.status).toBe("UP");
  });
});
