export type Props = {
  children: React.ReactNode,
  anim?: 'slide-up'|'slide-down'|'slide-right'|'slide-left',
  delay?: number,
  duration?: number,
}

export type CSSProps = {
  inView: boolean,
  anim?: 'slide-up'|'slide-down'|'slide-right'|'slide-left',
  delay?: number,
  duration?: number,
}
