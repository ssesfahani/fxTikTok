import { Context } from 'hono'
import MetaHelper from '../../util/metaHelper'

export function MessageResponse(title: string, message: string, c: Context): JSX.Element {
  return (
    <>
      {MetaHelper(c, [
        {
          name: 'og:title',
          content: title
        },
        {
          name: 'theme-color',
          content: '#ff0050'
        },
        {
          name: 'og:description',
          content: message
        }
      ])}
    </>
  )
}
