import InputBox from './components';
import './index.css';
import { useState, useCallback, useEffect, useRef } from 'react';
import useCurrencyInfor from './hooks/useCurrencyInfo'

function App() {

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0)
    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)
    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    return (
        <>
            <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
                style={{
                    background: `url(https://images.pexels.com/photos/26110304/pexels-photo-26110304/free-photo-of-parkschloss-leipzig.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                }}>
                <div className="w-full">
                    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                convert();
                            }}>
                            <div className="w-full mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setFrom(currency)}
                                    selectCurrency={from}
                                />
                            </div>
                            <div className="w-full mb-1">
                                <InputBox
                                    label="To"
                                    amount={convertedAmount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setTo(currency)}
                                    selectCurrency={to}
                                />
                            </div>
                            <div className="w-full flex justify-between">
                                <button
                                    type="button"
                                    onClick={swap}
                                    className="bg-blue-500 text-white p-2 rounded"
                                >
                                    Swap
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white p-2 rounded"
                                >
                                    Convert
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;