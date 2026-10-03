const request = require("supertest");
const app = require("../src/app");

describe("GET /", () => {
  test("should return CI/CD pipeline is working!", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("CI/CD pipeline is working!");
  });
});
