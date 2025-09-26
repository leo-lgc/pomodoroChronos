type DefaultInputProps = {
  labelText: string;
  id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  type,
  id,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <div className='formRow'>
        <label htmlFor={id}>{labelText}</label>
        <input id={id} name={id} type={type} {...rest}></input>
      </div>
    </>
  );
}
