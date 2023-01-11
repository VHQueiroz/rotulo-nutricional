const core = require('@actions/core');
const exec = require('@actions/exec');
const { context } = require('@actions/github');

async function run() {
    try {
        await exec.exec('git', ['config', 'user.email', '<your-email>']);
        await exec.exec('git', ['config', 'user.name', '<your-username>']);
        await exec.exec('git', ['checkout', '-b', 'gh-pages']);
        await exec.exec('git', ['add', '.']);
        await exec.exec('git', ['commit', '-m', 'Initial pages commit']);
        await exec.exec('git', ['push', 'origin', 'gh-pages']);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
