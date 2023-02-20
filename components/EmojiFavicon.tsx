interface EmojiFaviconProps {
  emoji: string;
}

const EmojiFavicon = ({ emoji }: EmojiFaviconProps) => (
  // https://css-tricks.com/emoji-as-a-favicon/
  <link
    rel="icon"
    href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
  />
);

export default EmojiFavicon;
