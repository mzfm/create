#!/usr/bin/env node

import { create } from "create-create-app"
import { resolve } from "path"

const templateRoot = resolve(__dirname, "..", "templates")

const caveat = ``

create("@mzfm/create", {
  templateRoot,
  extra: {
    url: {
      type: "input",
      describe: "Plugin URL",
      default: "",
      prompt: "if-no-arg",
    },
    pluginName: {
      type: "input",
      describe: "Plugin name",
      default: "MZFM_Plugin",
      prompt: "if-no-arg",
    },
  },
  caveat,
})
