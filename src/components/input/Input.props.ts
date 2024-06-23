export default interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderRadius?: string;
}
