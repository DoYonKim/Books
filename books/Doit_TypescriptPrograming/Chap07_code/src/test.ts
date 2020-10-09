import { readFileSync, readFile } from 'fs'

export const readJson_test = (): void => {

    //package.json 파일 동기로 읽기
    console.log('read package.json using synchronus api...')
    const buffer: Buffer = readFileSync('./package.json')
    console.log(buffer.toString())

    //package.json 파일 비동기로 읽기
    readFile('./package.json', (err: Error | null, buffer: Buffer) => {
        console.log('read package.json using asynchronous api..')
        console.log(buffer.toString())
    })

    //Promise와 async/await 구문 사용
    const readFilePromise = (filename: string): Promise<string> => {

        return new Promise<string>((resolve, reject) => {
            readFile(filename, (error: Error | null, buffer: Buffer) => {
                if (error)
                    reject(error)
                else
                    resolve(buffer.toString())
            })
        })
    }

    (async () => {
        const content = await readFilePromise('./package.json')
        console.log('read package.json using Promise and async/await')
        console.log(content)
    })()

}