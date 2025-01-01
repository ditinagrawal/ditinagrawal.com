import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";
import { projectId, dataset } from "./lib/env.api";

export default defineConfig({
  name: "ditinagrawal",
  title: "ditin-sanity",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [deskTool(), visionTool(), codeInput(), table()],
  schema: { types: schemaTypes },
});
