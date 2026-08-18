export default function FormField({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  as = 'input',
  options = [],
}) {
  const inputId = `field-${name}`

  return (
    <div>
      <label htmlFor={inputId} className="field-label">
        {label}
        {required && <span className="text-amber-dark"> *</span>}
      </label>

      {as === 'select' ? (
        <select
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="field-input"
        >
          <option value="" disabled>
            {placeholder || 'Select an option'}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : as === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={4}
          className="field-input resize-none"
        />
      ) : (
        <input
          id={inputId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="field-input"
        />
      )}

      {error && <p className="mt-1 font-mono text-xs text-red-600">{error}</p>}
    </div>
  )
}
