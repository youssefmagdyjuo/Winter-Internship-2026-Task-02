import React from 'react'
import Select from 'react-select';

export default function Selector({options,placeholder,onChange}) {
    return (
            <Select
                className="input"
                options={options}
                placeholder={placeholder}
                isSearchable
                onChange={onChange}
                styles={{
                    control: (base) => ({
                        ...base,
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderRadius: '0.5rem',
                        padding: '0rem',
                        minHeight: 'unset',
                        boxShadow: 'none',
                        '&:hover': {
                            borderColor: 'var(--color-primary)',
                        },
                    }),

                    valueContainer: (base) => ({
                        ...base,
                        padding: '0rem',
                    }),

                    input: (base) => ({
                        ...base,
                        color: 'var(--color-secondary)',
                        margin: 0,
                        padding: 0,
                    }),

                    singleValue: (base) => ({
                        ...base,
                        color: 'var(--color-secondary)',
                    }),

                    placeholder: (base) => ({
                        ...base,
                        color: 'var(--light-gray)',
                    }),

                    menu: (base) => ({
                        ...base,
                        backgroundColor: 'var(--white)',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                        zIndex: 20,
                    }),

                    option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected
                            ? 'var(--color-primary)'
                            : state.isFocused
                                ? '#e6f7fb'
                                : 'transparent',
                        color: state.isSelected
                            ? '#fff'
                            : 'var(--color-secondary)',
                        cursor: 'pointer',
                    }),

                    indicatorSeparator: () => ({
                        display: 'none',
                    }),

                    dropdownIndicator: (base) => ({
                        ...base,
                        padding: '0 0.5rem',
                        color: 'var(--gray)',
                        '&:hover': {
                            color: 'var(--color-primary)',
                        },
                    }),
                }}
            />
    )
}
