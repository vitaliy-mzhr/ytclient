export const handleKeyPress = (e, cb) => {
  console.log(e, cb);
  const { value } = e.target;
  if (e.key === 'Enter') {
    cb(value)
  }
}