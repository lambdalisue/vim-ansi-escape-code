import type { Denops } from "https://deno.land/x/denops_std@v5.0.2/mod.ts";
import { trimAndParse } from "https://deno.land/x/ansi_escape_code@v1.0.2/mod.ts";
import { assert, is } from "https://deno.land/x/unknownutil@v3.10.0/mod.ts";
import * as fn from "https://deno.land/x/denops_std@v5.0.1/function/mod.ts";

export function main(denops: Denops): void {
  denops.dispatcher = {
    async trimBufferContent(bufnr: unknown): Promise<void> {
      assert(bufnr, is.Number);
      const content = await fn.getbufline(denops, bufnr, 1, "$");
      const [trimmed, _annotations] = trimAndParse(content.join("\n"));
      await fn.setbufline(denops, bufnr, 1, trimmed.split("\n"));
    },
  };
}
