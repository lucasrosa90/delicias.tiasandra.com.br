// export { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

declare module 'yup' {
  // @ts-expect-error @ts-ignore
  interface StringSchema<
    TType extends yup.Maybe<string> = string | undefined,
    TContext extends yup.AnyObject = yup.AnyObject,
    TOut extends TType = TType,
  > extends yup.Schema<TType, TContext, TOut> {
    domain: (msg?: yup.Message) => StringSchema<TType, TContext>
  }
}

export default yup
