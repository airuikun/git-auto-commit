const fs = require('fs-extra')
const dateFns = require('date-fns')
const git = require('simple-git');

const dir = `/Users/airuikun/Desktop/project/technology/git-auto-commit/mongoose_crud`
// const dirRM = `/Users/airuikun/Desktop/project/technology/git-auto-commit/mongoose_crud/README.md`
const dirRM = `/Users/airuikun/Desktop/project/technology/git-auto-commit/mongoose_crud/recordLeah.js`

const user = '第一名的小蝌蚪'
const email = '30694912@qq.com'

execProcess()

async function execProcess() {
    await writeFile()
}

async function writeFile() {
    try {
        const record = dateFns.format(new Date(), 'YYYY/MM/DD hh:mm:ss')
        //判断是否存在recordLeah.js文件 没有则创建
        await fs.ensureFile(dirRM)

        let readData = await fs.readFile(dirRM, 'utf-8')
        await fs.appendFile(dirRM, `git auto commit: ${record} \n`)
        git(dir)
            // .addConfig('user.name', user)
            // .addConfig('user.email', email)
            .add('./*')
            .commit(`git auto commit: ${record}`, { '--author': `"${user} <${email}>"`, '--date': `Sun Sep 4 08:00:00 2018 +0800`})
            // .push('origin', 'master')  
        console.log(`提交成功：${record}`)
    } catch (error) {
        console.log('error', JSON.stringify(error))
    }
    
}

