export enum SERVICE {
  BEATPORT = 'beatport',
  FACEBOOK = 'facebook',
  YOUTUBE = 'youtube',
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram',
  SOUNDCLOUD = 'soundcloud',
  MIXCLOUD = 'mixcloud',
  LINKEDIN = 'linkedin',
  GITHUB = 'github',
  SPOTIFY='spotify',
  WEB = 'web',
}

export type SocialColor = {
  [key in SERVICE]: string
}
