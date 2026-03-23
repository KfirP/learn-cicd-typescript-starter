import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

describe("auth", () =>{
    test("no authorization header", () => {
        const apiKey = getAPIKey({"age": "18"})
        expect(apiKey).toBeNull();
    });

    test("invalid auth header", () => {
        expect(getAPIKey({"authorization": "nospace"})).toBeNull();
        expect(getAPIKey({"authorization": "noApiKey genericapikey"})).toBeNull();
    });

    test("valid auth header", () => {
        expect(getAPIKey({"authorization": "ApiKey validapikey"})).toBe("validapikey");
    })
});