import MetaHelper from '../../util/metaHelper'

export function WarningResponse(title: string, reason: string): JSX.Element {
  return (
    <>
      {MetaHelper([
        {
          name: 'og:title',
          content: `⚠️ ${title}`
        },
        {
          name: 'theme-color',
          content: '#f7c500'
        },
        {
          name: 'og:description',
          content: `Sorry, we were unable to show this video due to ${reason}. If you would like to view the video, please visit TikTok directly.`
        }
      ])}
    </>
  )
}
