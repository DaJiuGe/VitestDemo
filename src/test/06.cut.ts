import fs from 'node:fs'

export function cutRoute() {
  const data = fs.readFileSync('src/test/utils/obj.ts', 'utf8')
  const result = data.replace(/\{[^{}]*\}/g, (matched) => {
    if (matched.includes('index')) {
      return ''
    } else {
      return matched
    }
  }).replace(/\}[\s*,\s*]+\{/g, '},{')
    .replace(/\[[\s*,\s*]+\{/g, '[{')
    .replace(/\}[\s*,\s*]+\]/g, '}]')


  fs.writeFileSync('src/test/utils/obj-result.ts', result, 'utf8')
  return result
}
