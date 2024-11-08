interface Props {
  color?: string;
  height?: string;
  width?: string;
}

export const ArrowRight = (props: Props) => {
  const { color = '#5f6368', height = '24px', width = '24px' } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
      fill={color}
    >
      <path xmlns="http://www.w3.org/2000/svg" d="M663.15-446H168v-66h495.15L431.46-743.69 479-792l313 313-311 311-47.54-48.31L663.15-446Z"/>
    </svg>
  );
};
