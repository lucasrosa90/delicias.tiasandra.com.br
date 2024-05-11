import * as yup from 'yup'

import { addTextIndefiniteArticle } from '@/core/helpers/texts/indefiniteArticle'

function invalidMessage({ label, path }: { label?: string; path: string }) {
  return `Enter a valid ${label ?? path}`
}

function getFieldName(label: string, path: string) {
  if (label) {
    return label
  }

  if (path === 'displayName') {
    return 'name'
  }

  return path
}

yup.setLocale({
  mixed: {
    default: invalidMessage,
    required: ({ label, path }) => `Please enter ${addTextIndefiniteArticle(getFieldName(label, path))}`,
    oneOf: 'Please pick an option',
  },
  array: {
    max: ({ max }) => `Please pick less than or exactly ${max} options`,
    min: ({ min }) => (min === 1 ? 'Please pick an option' : `Please pick at least ${min} options`),
    length: ({ length }) => `Please pick exactly ${length} options`,
  },
  string: {
    email: invalidMessage,
    matches: invalidMessage,
    length: invalidMessage,
    lowercase: invalidMessage,
    max: invalidMessage,
    min: invalidMessage,
    trim: invalidMessage,
    uppercase: invalidMessage,
    url: invalidMessage,
    uuid: invalidMessage,
  },
})

yup.addMethod(yup.string, 'domain', function pattern(message) {
  return this.test({
    message: message ?? invalidMessage({ path: 'domain' }),
    test: value =>
      value === null ||
      value === '' ||
      value === undefined ||
      RegExp(/^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/).test(value),
  })
})

export default yup
