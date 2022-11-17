import {useState} from "react";
import {CurrencyFlag} from "react-currency-flags/dist/components";
import styles from '../../styles/select.module.css';
import '/node_modules/currency-flags/dist/currency-flags.css';

interface CFProps {
    currency: string
}

const CurrencyFlagComp = ({currency}: CFProps) => <CurrencyFlag currency={currency} size={'sm'} />


export type SelectOption = {
    label: string,
    value: string,
    symbol: string,
}

type SelectProps = {
    options: SelectOption[]
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
}


export function Select({value, onChange, options}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [highLightedIndex, setHighlightedIndex] = useState(0)

    function clearOptions() {
        onChange(undefined)
    }

    function selectOption(option: SelectOption) {
        onChange(option)
    }

    function isOptionSelected(option: SelectOption) {
        return option === value
    }

    return (
        <div
            onBlur={() => setIsOpen(false)}
            onClick={() => setIsOpen(prev => !prev)} tabIndex={0} className={`${styles.container} rounded border-gray-700 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}>
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
                options.map((option, index) => (
                    <li
                        onClick={e => {
                            e.stopPropagation()
                            selectOption(option)
                            setIsOpen(false)
                        }}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        key={option.value} className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ''}`}>{
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