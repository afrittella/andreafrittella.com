import { youtube, youtube_v3 } from '@googleapis/youtube'
import { NextApiRequest, NextApiResponse } from 'next'

type PlaylistType = 'edits' | 'releases' | 'remixes' | 'mixtapes'

const PLAYLISTS: Record<PlaylistType, string> = {
  remixes: 'PLKqfdNXrLRbYWMkG_idJRNBMDkmB3nDQN',
  edits: 'PLKqfdNXrLRbb9G7QQFMQmdjeBLRJKYPA0',
  releases: 'PLKqfdNXrLRbYGUK0efJrfAks_swUXtYEb',
  mixtapes: 'PLKqfdNXrLRbaaF-r8swzRhjZdxl6StzAZ',
}

async function getVideos(playlist: PlaylistType = 'releases') {
  const yt = youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_KEY as string,
  })

  const playlistContent = await yt.playlistItems.list({
    part: ['snippet', 'contentDetails'],
    playlistId: PLAYLISTS[playlist],
    maxResults: 60,
  })

  if (!playlistContent.data.items) {
    return []
  }

  return playlistContent.data.items.sort((a, b) =>
    (a.contentDetails?.videoPublishedAt || '') >
    (b.contentDetails?.videoPublishedAt || '')
      ? -1
      : 1,
  )
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<youtube_v3.Schema$PlaylistItem[]>,
) {
  const videos = await getVideos(
    (req.query['tab'] as PlaylistType) || 'releases',
  )
  res.status(200).json(videos)
}
