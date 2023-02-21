#! /usr/bin/env node
import path from "path";
import fs from "fs/promises";
import {
    eslintRc,
    gitIgnore,
    mainTs,
    nodemonJson,
    packageJson,
    prettierRc,
    printHelp,
    tsConfig,
} from "../utils.js";

if (process.argv[2] == "new") {
    const projectName = process.argv[3];
    const projectFolder = path.join(process.cwd(), projectName);

    // Proyekt papkasini yaratish!
    fs.mkdir(projectFolder)
        .then(() => {
            console.log(
                `✅ ${projectName} nomli proyekt ${projectFolder} direktoriyasida ochildi!`
            );
            // package.json ni yozish
            return fs.writeFile(
                path.join(projectFolder, "package.json"),
                packageJson
            );
        })
        .then(() => {
            console.log("✅ package.json 📦 yaratildi!");
            // eslint konfiguratsiya
            return fs.writeFile(
                path.join(projectFolder, ".eslintrc"),
                eslintRc
            );
        })
        .then(() => {
            console.log("✅ .eslintrc 💫 yaratildi!");
            return fs.writeFile(
                path.join(projectFolder, "nodemon.json"),
                nodemonJson
            );
        })
        .then(() => {
            console.log("✅ nodemon.json 🟩 yaratildi!");
            return fs.writeFile(
                path.join(projectFolder, ".prettierrc"),
                prettierRc
            );
        })
        .then(() => {
            console.log("✅ .prettierrc yaratildi!");
            return fs.writeFile(
                path.join(projectFolder, ".env"),
                "# .env da yozgan narsalaringizni .env.example da ham yozib qo'ying!"
            );
        })
        .then(() => {
            console.log("✅ .env yaratildi!");
            return fs.writeFile(
                path.join(projectFolder, ".env.example"),
                "# .env da yozilgan narsalaringizni ushbu faylga qiymatisiz comment orqali yozib qo'ying masalan: \n" +
                    "# .env da BOT_TOKEN=yujh789fuiur9409hn bo'lsa bu faylda:\n" +
                    "# BOT_TOKEN = "
            );
        })
        .then(() => {
            console.log("✅ .env.example yaratildi!");
            return fs.writeFile(
                path.join(projectFolder, "tsconfig.json"),
                tsConfig
            );
        })
        .then(() => {
            console.log("✅ tsconfig.json  yaratildi!");
            return fs.writeFile(
                path.join(projectFolder, ".gitignore"),
                gitIgnore
            );
        })
        .then(() => {
            console.log("✅ .gitignore  yaratildi!");
            return fs.mkdir(path.join(projectFolder, "src"));
        })
        .then(() => {
            return fs.writeFile(
                path.join(projectFolder, "src", "main.ts"),
                mainTs
            );
        })
        .then(() => {
            console.log("✅ src/main.ts  yaratildi!");
            console.log(
                `\n\n✅ ${projectName} proyekti Initializatsiya qilindi!`
            );
        })
        .catch((err) => {
            if (err.code === "EEXIST") {
                console.log(`⚠️ ${projectName} nomli papka allaqachon mavjud!`);
            } else {
                console.log(err);
            }
        });
} else {
    printHelp();
}
