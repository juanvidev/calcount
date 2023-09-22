import { Text, TextProps } from './Themed';

export function TextRoboto(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'Roboto' }]} />;
}
