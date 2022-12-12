import {useState} from "react";
import styles from '../../styles/select.module.css';
import '/node_modules/currency-flags/dist/currency-flags.css';
import type {CurrencySymbol} from "../../pages/api/symbols";


type SelectProps = {
    id: string
    options: CurrencySymbol[] | undefined
    value?: CurrencySymbol
    onChange: (value: CurrencySymbol | undefined) => void
}


export function Select({id, value, onChange, options}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [highLightedIndex, setHighlightedIndex] = useState(0)

    function clearOptions() {
        onChange(undefined)
    }

    function selectOption(option: CurrencySymbol) {
        onChange(option)
    }

    function isOptionSelected(option: CurrencySymbol) {
        return option === value
    }

    return (
        <div
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen(prev => !prev)} tabIndex={0}
            className={`${styles.container} rounded border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}>
            <div className={'flex flex-row gap-1 w-full gap-1 '}>
                <div className={`currency-flag currency-flag-${value?.value.toLowerCase()} text-center m-auto`}/>
                <span className={`${styles.value} `}>{`${value?.value} - ${value?.label}`}</span>
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    clearOptions()

                }}
                className={styles['clear-btn']}>&times;</button>
            <div className={`${styles.divider}`}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>{
                options?.map((option, index) => (
                    <li
                        onClick={e => {
                            e.stopPropagation()
                            selectOption(option)
                            setIsOpen(false)
                        }}
                        id={id}
                        value={option.value}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        key={option.value}
                        className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ''}`}>{
                        <div className={'flex flex-row gap-1 w-full gap-1'}>
                            <div className={`currency-flag currency-flag-${option.value.toLowerCase()} my-auto`}></div>
                            <span>{option.label}</span>
                        </div>


                    }</li>
                ))
            }</ul>
        </div>
    )
}