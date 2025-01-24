interface SubItem {
  title: string
  text: string
  href?: string
  icon?: JSX.Element
}

interface MenuItem {
  title: string
  icon?: JSX.Element
  calloutHeading?: string
  calloutText?: string
  subItems?: SubItem[]
}

export const menuNavItems: MenuItem[] = [
  {
    title: 'Tools',
    calloutHeading: 'Video Editor',
    calloutText: 'Edit video clips, combine tracks together, and add effect all in one place',
    subItems: [
      { title: 'Repurpose Studio', text: 'Turn a video into social-ready clips' },
      { title: 'Dubbing', text: 'Translate dialogue into 30+ languages' },
      { title: 'Subtitler', text: 'Add captions and subtitles to videos in the browser' },
      { title: 'Audio Editor', text: 'Record, edit, and clean audio for podcasts and videos' },
      { title: 'Resize Video', text: 'Change the size and dimensions of a video' },
      { title: 'Transcribe Video', text: 'Turn videos into text automatically' },
      { title: 'Speaker Focus', text: 'Auto-resize videos to focus on the speakers' },
      { title: 'Text to Speech', text: 'Turn text into realistic voiceovers in just a few clicks' },
      { title: 'Trim with Transcript', text: 'Edit videos by editing text' },
      { title: 'View All', text: "Discover all of Kapwing's tools in one place" },
    ],
  },
  {
    title: 'AI',
    calloutHeading: 'Kapwing AI',
    calloutText: "Discover all of Kapwing's AI-powered tools",
    subItems: [
      { title: 'AI Video Editor', text: "Create videos with Kapwing's cutting-edge AI tools" },
      { title: 'Video Generator', text: 'Create a video about anything with AI' },
      { title: 'Script Generator', text: 'Turn ideas into scripts in a few clicks' },
      { title: 'B-Roll Generator', text: 'Generate relevant, high-quality B-Roll automatically' },
      { title: 'Subtitle Generator', text: 'Create instant video subtitles with AI' },
      { title: 'Smart Cut', text: 'Automatically remove silences from your video' },
      { title: 'Translate Video', text: 'Make content accessible with translated audio and subtitles' },
      { title: 'Clean Audio', text: 'Enhance audio quality and remove background noise' },
      { title: 'Article to Video', text: 'Turn any article into a video in a few clicks' },
      { title: 'View All', text: "Discover all of Kapwing's smart tools" },
    ],
  },
  {
    title: 'Solutions',
    subItems: [
      {
        title: 'For Marketing Teams',
        text: 'Grow your brand with modern editing tools that speed up content creation',
        href: '/primitives/docs/overview/introduction',
      },
      {
        title: 'For Training Teams',
        text: 'Create and edit screen recordings, tutorials, and instructional videos',
        href: '/primitives/docs/overview/getting-started',
      },
      {
        title: 'For Schools',
        text: 'Bring learning to life with digital lessons and multimedia assignments',
        href: '/primitives/docs/guides/styling',
      },
      {
        title: 'Make Social Media Videos',
        text: "Create engaging content that's tailored for every social platform",
        href: '/primitives/docs/guides/animation',
      },
      {
        title: 'Make Video Ads',
        text: 'Create professional, scroll-stopping video ads that generate leads',
        href: '/primitives/docs/overview/accessibility',
      },
      {
        title: 'Translate Videos',
        text: 'Reach a wider audience by localizing videos, audio, and subtitles',
        href: '/primitives/docs/overview/releases',
      },
    ],
  },
  {
    title: 'Learn',
    calloutHeading: 'Resources',
    calloutText: 'Articles and guides to help you create more',
    subItems: [
      { title: 'Video Tutorials', text: 'Get step-by-step guidance on how to use our tools' },
      { title: 'Help Center', text: 'Get answers to common questions about Kapwing' },
      { title: 'About Us', text: 'Find out more about our company and product' },
      { title: 'Careers', text: 'Learn more about working at Kapwing' },
      { title: 'Company Blog', text: 'Follow along for stories from our startup journey' },
      { title: 'Contact Us', text: 'Learn how to get in touch with our team' },
    ],
  },
]
