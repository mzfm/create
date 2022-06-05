import { MZFMPlugin } from "@mzfm/common"
import { Hello } from "./commands/Hello"

const DEFUALT_PARAMS = {}
const COMMANDS = {
  Hello,
}
export const PLUGIN: MZFMPlugin<typeof DEFUALT_PARAMS, typeof COMMANDS> = {
  name: "{{pluginName}}",
  default_params: DEFUALT_PARAMS,
  commands: COMMANDS,
}
