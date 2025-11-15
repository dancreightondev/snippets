import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	snippets: defineTable({
		name: v.string(),
		id: v.string(),
		instanceId: v.optional(v.string()),
		text: v.optional(v.string()),
		code: v.optional(v.string()),
		items: v.optional(v.array(v.string())),
		currentXp: v.optional(v.number()),
		targetXp: v.optional(v.number()),
	}),
});
