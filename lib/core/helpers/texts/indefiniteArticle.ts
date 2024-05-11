export function textIndefiniteArticle(str: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const firstLetter = str.charAt(0).toLowerCase()
  const article = vowels.includes(firstLetter) ? 'an' : 'a'
  return article
}

export function addTextIndefiniteArticle(str: string): string {
  return `${textIndefiniteArticle(str)} ${str}`
}
