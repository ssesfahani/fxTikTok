import { Context } from 'hono'
import MetaHelper from '../../util/metaHelper'

export function ErrorResponse(error: string, c: Context): JSX.Element {
  return (
    <>
      {MetaHelper(c, [
        {
          name: 'og:title',
          content: `❌ ${error}`
        },
        {
          name: 'theme-color',
          content: '#dd2e44'
        },
        {
          name: 'og:description',
          content: 'An error occurred while trying to fetch data. Please try again later.'
        },
        {
          name: 'og:site_name',
          content: 'fxTikTok'
        }
      ])}
    </>
  )
}
