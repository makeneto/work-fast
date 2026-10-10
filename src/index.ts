#!/usr/bin/env node
import { access, cp, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

const { values } = parseArgs({
  options: {
    force: { type: "boolean", short: "f", default: false },
    dir: { type: "string", short: "d", default: "guia" },
  },
});

const here = dirname(fileURLToPath(import.meta.url));
const packageRoot = join(here, "..");
const guideSource = join(packageRoot, "fluxo-rapido");
const pdfSource = join(packageRoot, "trabalhar-rápido.pdf");
const target = join(process.cwd(), values.dir as string);

const exists = await access(target).then(
  () => true,
  () => false,
);

if (exists && !values.force) {
  console.error(`The folder "${values.dir}" already exists. Use --force to overwrite.`);
  process.exit(1);
}

await mkdir(target, { recursive: true });
await cp(guideSource, join(target, "fluxo-rapido"), {
  recursive: true,
  force: true,
});
await cp(pdfSource, join(target, "trabalhar-rápido.pdf"), { force: true });

console.log(`Folder "${values.dir}" added to the project root.`);
console.log(`Start with: ${values.dir}/fluxo-rapido/00-como-usar.md`);