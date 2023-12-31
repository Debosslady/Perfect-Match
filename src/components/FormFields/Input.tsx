const Input = ({ disabled = false, className='', ...props }) => (
  <input
      disabled={disabled}
      className={`${className} rounded-md shadow-sm border py-3 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
      {...props}
  />
)

export default Input