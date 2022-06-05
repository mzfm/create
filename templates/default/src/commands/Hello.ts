import { Game_Interpreter } from "rmmz"
import { MZFMCommand, PluginCommandDocs, overrideMethod } from "@mzfm/common"

export interface HelloArgs {
  name: string
}

export const Hello: MZFMCommand<HelloArgs> = {
  setGlobal: true,
  initialize: () => {
    console.log("Initializing Hello")
    overrideMethod(
      Game_Interpreter,
      "setup",
      function (this: Game_Interpreter, original, ...args) {
        console.log("Setup")
        original.call(this, ...args)
      }
    )
  },
  run: function (args: HelloArgs) {
    const { name } = args
    console.log(`Hello, ${name}!`)
  },
}

export const DOCS: PluginCommandDocs<typeof Hello> = {
  description: "Example Hello Command",
  args: {
    name: {
      text: "Name",
      description: "The name to say hello to",
      default: "World",
      type: String,
    },
  },
}
