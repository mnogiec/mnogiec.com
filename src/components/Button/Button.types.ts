export type Props = {
  children: React.ReactNode | string,
  margin?: string,
  submit?: boolean,
  basic?: boolean,
  link?: string,
  outLink?: string,
  size?: string,
  border?: boolean;
  light?: boolean,
  bold?: boolean,
  upper?: boolean,
  disabled?: boolean,
  target?: '_blank'|'_self'|'_parent'|'_top',
  clicked?: (param:any)=>any,
}
