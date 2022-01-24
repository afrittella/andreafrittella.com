export enum SERVICE {
  BEATPORT = 'beatport',
  FACEBOOK = 'facebook',
  YOUTUBE = 'youtube',
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
  SOUNDCLOUD = 'soundcloud',
  MIXCLOUD = 'mixcloud',
}

export type SocialColor = {
  [key in SERVICE]: string
}