import MetaHelper from '../../util/metaHelper'

export function MessageResponse(title: string, message: string): JSX.Element {
  return (
    <>
      {MetaHelper([
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
