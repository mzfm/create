import { MZFMPlugin } from "@mzfm/common"
import { Hello } from "./commands/Hello"

export interface PluginParams {}

const COMMANDS = {
  Hello,
}

export const PLUGIN = new MZFMPlugin<PluginParams, typeof COMMANDS>("{{pluginName}}", COMMANDS)
