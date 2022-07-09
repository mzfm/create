import { PluginDocs } from "@mzfm/common"
import { DOCS as Hello } from "../docs/commands/Hello"
import { PLUGIN } from "../plugin"
import packageConfig from "../../package.json"

const { name: projectName, author, description, version } = packageConfig

const copyright = `
Copyright (c) {{year}} {{contact}}

License: The {{license}} License.
`
const helpText = ""

export default {
  name: PLUGIN.name,
  projectName,
  author,
  version,
  title: "MZFM Plugin",
  targets: ["MZ"],
  description,
  url: "{{url}}",
  params: {},
  commands: {
    Hello,
  },
  helpText,
  copyright,
} as PluginDocs<typeof PLUGIN>
