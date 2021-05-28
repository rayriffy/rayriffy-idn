import { useCallback, useEffect, useRef, useState } from 'react'

import { NextPage } from 'next'

import { toUnicode, toASCII } from 'punycode/'
import debounce from 'lodash/debounce'
import { Switch } from '@headlessui/react'

const Page: NextPage = () => {
  const [result, setResult] = useState('')
  const [isEncode, setIsEncode] = useState(false)

  const [input, setInput] = useState('')
  const setDebounceInput = debounce((value, mode) => {
    calculate(value, mode)
  }, 300)

  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
  }

  const calculate = (input: string, isEncode: string) => {
    const res = isEncode ? toUnicode(input) : toASCII(input)
    setResult(res)
  }

  const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }) => {
      setInput(value)
      setDebounceInput(value, isEncode)
    },
    [isEncode]
  )

  const noFirstTrigger = useRef(false)
  useEffect(() => {
    if (noFirstTrigger.current) {
      setDebounceInput(input, isEncode)
    } else {
      noFirstTrigger.current = true
    }
  }, [isEncode])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="max-w-md mx-auto">
        <h1 className="mt-24 font-bold text-gray-900 text-2xl text-center">
          IDN Converter Tool
        </h1>
        <p className="text-gray-700 pt-1 pb-2 text-center">
          Very easy to use, just type anything to encode/decode
          internationalized domain name.
        </p>
        <div className="py-4">
          <input
            type="text"
            value={input}
            onChange={onChange}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
          <Switch.Group as="div" className="flex items-center py-4">
            <Switch
              checked={isEncode}
              onChange={setIsEncode}
              className={classNames(
                isEncode ? 'bg-indigo-600' : 'bg-gray-200',
                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              )}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={classNames(
                  isEncode ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                )}
              />
            </Switch>
            <Switch.Label as="span" className="ml-3">
              <span className="text-sm font-medium text-gray-900">Encode</span>
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Result
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Click on result below to select, and copy to your clipboard!
            </p>
          </div>
          <div className="px-4 py-5 sm:p-6">
            {result.length === 0 ? <span className="text-gray-500 cursor-not-allowed text-center">No results</span> : <span className="select-all text-center">{result}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
