import { Game_Interpreter } from "rmmz"
import { MZFMCommand, overrideMethod, MZFMInterpreter } from "@mzfm/common"

export interface HelloArgs {
  name: string
}

export const Hello: MZFMCommand<HelloArgs> = {
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
  },
  run: function (this: MZFMInterpreter, args, ctx) {
    const { name } = args
    console.log(`Hello, ${name}!`)
  },
}