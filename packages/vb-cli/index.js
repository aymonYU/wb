const program = require("commander");
const { parseArgs } = require("./utils/command");

program.version(require("./package").version).usage("<command> [options]");

program
  .command("init <app-name>")
  .description("init a new project")
  .option(
    "-p, --preset <presetName>",
    "Skip prompts and use saved or remote preset"
  )
  .option("-d, --default", "Skip prompts and use default preset")
  .option(
    "-i, --inlinePreset <json>",
    "Skip prompts and use inline JSON string as preset"
  )
  .action((name, cmd) => {
    const options = parseArgs(cmd);

    require("../commands/")(name, options);
  });

// program
//   .command("install <plugin> [pluginOptions]")
//   .description("install and invode your package")
//   .allowUnknownOption()
//   .action(plugin => {
//     require("../lib/add")(plugin, minimist(process.argv.slice(3)));
//   });

// program
//   .command("inspect [paths...]")
//   .description("inspect the webpack config in a project with vue-cli-service")
//   .option("--mode <mode>")
//   .option("--rule <ruleName>", "inspect a specific module rule")
//   .option("--plugin <pluginName>", "inspect a specific plugin")
//   .option("--rules", "list all module rule names")
//   .option("--plugins", "list all plugin names")
//   .option("-v --verbose", "Show full function definitions in output")
//   .action((paths, cmd) => {
//     require("../lib/inspect")(paths, cleanArgs(cmd));
//   });

// program
//   .command("serve [entry]")
//   .description("serve a .js or .vue file in development mode with zero config")
//   .option("-o, --open", "Open browser")
//   .option("-c, --copy", "Copy local url to clipboard")
//   .action((entry, cmd) => {
//     loadCommand("serve", "@vue/cli-service-global").serve(
//       entry,
//       cleanArgs(cmd)
//     );
//   });

// program
//   .command("build [entry]")
//   .description("build a .js or .vue file in production mode with zero config")
//   .option(
//     "-t, --target <target>",
//     "Build target (app | lib | wc | wc-async, default: app)"
//   )
//   .option(
//     "-n, --name <name>",
//     "name for lib or web-component mode (default: entry filename)"
//   )
//   .option("-d, --dest <dir>", "output directory (default: dist)")
//   .action((entry, cmd) => {
//     loadCommand("build", "@vue/cli-service-global").build(
//       entry,
//       cleanArgs(cmd)
//     );
//   });

// program
//   .command("ui")
//   .description("start and open the vue-cli ui")
//   .option(
//     "-p, --port <port>",
//     "Port used for the UI server (by default search for available port)"
//   )
//   .option("-D, --dev", "Run in dev mode")
//   .option("--quiet", `Don't output starting messages`)
//   .option("--headless", `Don't open browser on start and output port`)
//   .action(cmd => {
//     checkNodeVersion(">=8.6", "vue ui");
//     require("../lib/ui")(cleanArgs(cmd));
//   });

// program
//   .command("init <template> <app-name>")
//   .description(
//     "generate a project from a remote template (legacy API, requires @vue/cli-init)"
//   )
//   .option("-c, --clone", "Use git clone when fetching remote template")
//   .option("--offline", "Use cached template")
//   .action(() => {
//     loadCommand("init", "@vue/cli-init");
//   });

// program
//   .command("config [value]")
//   .description("inspect and modify the config")
//   .option("-g, --get <path>", "get value from option")
//   .option("-s, --set <path> <value>", "set option value")
//   .option("-d, --delete <path>", "delete option from config")
//   .option("-e, --edit", "open config with default editor")
//   .option("--json", "outputs JSON result only")
//   .action((value, cmd) => {
//     require("../lib/config")(value, cleanArgs(cmd));
//   });

// // output help information on unknown commands
// program.arguments("<command>").action(cmd => {
//   program.outputHelp();
//   console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`));
//   console.log();
// });

// // add some useful info on help
// program.on("--help", () => {
//   console.log();
//   console.log(
//     `  Run ${chalk.cyan(
//       `vue <command> --help`
//     )} for detailed usage of given command.`
//   );
//   console.log();
// });

// program.commands.forEach(c => c.on("--help", () => console.log()));

// // enhance common error messages
// const enhanceErrorMessages = require("../lib/util/enhanceErrorMessages");

// enhanceErrorMessages("missingArgument", argName => {
//   return `Missing required argument ${chalk.yellow(`<${argName}>`)}.`;
// });

// enhanceErrorMessages("unknownOption", optionName => {
//   return `Unknown option ${chalk.yellow(optionName)}.`;
// });

// enhanceErrorMessages("optionMissingArgument", (option, flag) => {
//   return (
//     `Missing required argument for option ${chalk.yellow(option.flags)}` +
//     (flag ? `, got ${chalk.yellow(flag)}` : ``)
//   );
// });

program.parse(process.argv);

// if (!process.argv.slice(2).length) {
//   program.outputHelp();
// }

// // commander passes the Command object itself as options,
// // extract only actual options into a fresh object.
