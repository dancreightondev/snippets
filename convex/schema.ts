import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	snippets: defineTable({
		name: v.string(), // the user-facing name of the snippet
		type: v.string(), // the code-facing name of the snippet, used to determine what to render
	}),
});
