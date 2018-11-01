/**
 * Created by Rayr Lee on 2018/4/27.
 */

import chokidar from 'chokidar';
import path from 'path';
import chalk from 'chalk';
import {CLIEngine} from 'eslint';

const cli = new CLIEngine({});
const {log} = console;

const Level = ['undefined', 'warning', 'error'];
const LevelShow = ['green', 'yellow', 'red'];

export default function () {
    log(chalk.green(`JS代码校验开始（未处理的js无法commit！warning：1元1行，error：5元1行）`));

    chokidar.watch(path.resolve(__dirname, '../../src'), {ignored: /(^|[\/\\])\../}).on('change', (path) => {

        const report = cli.executeOnFiles([path]).results;

        for (let i = 0; i < report.length; i++) {
            const {filePath, errorCount, warningCount, messages} = report[i];
            log(chalk.magenta(`发现文件 ${filePath} 被修改`));
            log(chalk.magenta(`校验提示 error: ${errorCount}, warning: ${warningCount}`));
            if (messages.length === 0) {
                continue;
            }
            messages.map(({line, column, severity, message, ruleId}) => {
                log(chalk[LevelShow[severity]](`${line}:${column} => ${Level[severity]}  ${message} ${ruleId}`));
            });
        }
    });
}
