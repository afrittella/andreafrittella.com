import { youtube, youtube_v3 } from '@googleapis/youtube'
import { NextApiRequest, NextApiResponse } from 'next'

async function getVideos() {
  const yt = youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_KEY as string,
  })

  const playlistContent = await yt.playlistItems.list({
    part: ['snippet', 'contentDetails'],
    playlistId: 'PLKqfdNXrLRbYWMkG_idJRNBMDkmB3nDQN',
    maxResults: 60,
  })

  if (!playlistContent.data.items) {
    return []
  }

  return playlistContent.data.items
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<youtube_v3.Schema$PlaylistItem[]>
) {
  const videos = await getVideos()
  res.status(200).json(videos)
}
