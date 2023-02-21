const createJSON = (object) => {
    return JSON.stringify(object, null, 4);
};

export const printHelp = () => {
    console.log(
        "CLI ni ishlatish uchun ritnyx new [PROJECT_NOMI]ni kiriting!\n"
    );
};

export const packageJson = createJSON({
    name: "telegrafbot-nt",
    version: "1.0.0",
    description: "",
    main: "app.js",
    type: "module",
    scripts: {
        prebuild: "rimraf ./build",
        dev: "npx nodemon",
        build: "npm run prebuild && npx tsc",
        start: "npm run build && node build/main",
        lint: "npx eslint ./src",
        format: "npx eslint ./src --fix",
    },
    keywords: [],
    author: "",
    license: "ISC",
    devDependencies: {
        "@types/node": "^18.11.17",
        "@typescript-eslint/eslint-plugin": "^5.47.0",
        "@typescript-eslint/parser": "^5.47.0",
        dotenv: "^16.0.3",
        eslint: "^8.30.0",
        husky: "^8.0.2",
        nodemon: "^2.0.20",
        prettier: "^2.8.1",
        rimraf: "^3.0.2",
        "ts-node": "^10.9.1",
    },
});

export const eslintRc = createJSON({
    parser: "@typescript-eslint/parser",
    extends: ["plugin:@typescript-eslint/recommended"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {},
});

export const nodemonJson = createJSON({
    watch: ["src"],
    ext: ".ts, .js",
    ignore: [],
    exec: "npx ts-node ./src/main.ts",
});

export const prettierRc = createJSON({
    semi: true,
    trailingComma: "all",
    singleQuote: true,
    printWidth: 120,
    tabWidth: 2,
});

export const gitIgnore =
    "" +
    `# compiled output
/dist
/node_modules
/build
.env
package-lock.json

# Logs
logs
*.log
npm-debug.log*
pnpm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# OS
.DS_Store

# Tests
/coverage
/.nyc_output

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# IDE - VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json`;

export const tsConfig = createJSON({
    compilerOptions: {
        target: "ES2018",
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        module: "NodeNext",
        rootDir: "./src",
        allowJs: true,
        sourceMap: true,
        outDir: "./build",
        removeComments: true,
        esModuleInterop: true,
        forceConsistentCasingInFileNames: true,
        strict: true,
        noImplicitAny: true,
        skipLibCheck: true,
    },
    include: ["src/**/*"],
    exclude: ["node_modules"],
    lib: ["esnext"],
    "ts-node": {
        esm: true,
    },
});

export const mainTs =
    "// Telegram --> https://t.me/ritnyxdev\n// Github --> https://github.com/ritnyxdev/typenix";
