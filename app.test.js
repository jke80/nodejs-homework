const mongoose = require("mongoose");
require("dotenv").config();
const { DB_HOST } = process.env;
const req = require("supertest");
const app = require("./app");

describe("POST /users/login", () => {
  beforeAll(async () => {
    await mongoose.connect(DB_HOST);
    await req(app).post("/users/register").send({
      email: "user@example.com",
      password: "password",
    });
  });

  it("should respond with status code 200,should respond token and user", async () => {
    const res = await req(app).post("/users/login").send({
      email: "user@example.com",
      password: "password",
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(typeof res.body.token).toBe("string");
    expect(res.body.token).not.toBe("");
    expect(res.body.user).toHaveProperty("email");
    expect(res.body.user).toHaveProperty("subscription");
    expect(typeof res.body.user.email).toBe("string");
    expect(typeof res.body.user.subscription).toBe("string");
  });
}, 8000);
