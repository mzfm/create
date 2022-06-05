import { Game_Interpreter } from "rmmz"
import { MZFMCommand, PluginCommandDocs, overrideMethod, MZFMInterpreter } from "@mzfm/common"

export interface HelloArgs {
  name: string
}

export const Hello: MZFMCommand<HelloArgs> = {
  setGlobal: true,
  initialize: (commandName: string) => {
    console.log(`Initializing ${commandName}`)
    overrideMethod(
      Game_Interpreter,
      "setup",
      function (this: MZFMInterpreter, original, ...args) {
        console.log("Setup")
        original.call(this, ...args)
      }
    )
    return true
  },
  run: function (ctx, args) {
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
