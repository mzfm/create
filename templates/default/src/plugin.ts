import { MZFMPlugin } from "@mzfm/common"
import { Hello } from "./commands/Hello"

const PARAMS = {}
const COMMANDS = {
  Hello,
}
export const PLUGIN: MZFMPlugin<typeof PARAMS, typeof COMMANDS> = {
  name: "{{pluginName}}",
  params: PARAMS,
  commands: COMMANDS,
}
