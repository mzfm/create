import { PluginCommandDocs } from "@mzfm/common/dist/docs"
import { Hello } from "../../commands/Hello"

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
