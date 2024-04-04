'use client'
import React, { useEffect, useState } from 'react'
import dollarIcon from '../../../images/icon-dollar.svg'
import personIcon from '../../../images/icon-person.svg'
import logo from '../../../images/logo.svg'

const CalculatorComponent = () => {

    const [billAmount, setBillAmount] = useState<string>('');
    const [tipPercentage, setTipPercentage] = useState<string>('0');
    const [peopleAmount, setPeopleAmount] = useState<string>('');
    const [tipAmount, setTipAmount] = useState<string>('0.00');
    const [totalAmount, setTotalAmount] = useState<string>('0.00');


    // useEffect to handle calculations
    useEffect(() => {
        let tips: string;

        const calculateTipAmount = () => {
            tips = (Number(billAmount) * Number(tipPercentage) / Number(peopleAmount)).toFixed(2);
            return tips;
        }

        const calculateTotalAmount = () => {
            return ((Number(tips) + Number(billAmount)) / Number(peopleAmount)).toFixed(2);
        }

        if (billAmount && tipPercentage && peopleAmount) {
            setTipAmount(calculateTipAmount());
            setTotalAmount(calculateTotalAmount());
        }
    }, [billAmount, tipPercentage, peopleAmount]);


    // helper function to update tipPercentage useState
    const handleTipPercentage = (percentage: string) => {
        setTipPercentage((Number(percentage) / 100).toFixed(2));
        console.log(tipPercentage);
    }


    // helper function to handle resetting all values
    const handleReset = () => {
        setBillAmount('');
        setTipPercentage('0');
        setPeopleAmount('');
        setTipAmount('0.00');
        setTotalAmount('0.00');
    }


    return (
        <div className="grid justify-center items-center">
            {/* Splitter logo */}
            <div className='mt-12 mb-10 lg:mt-40 lg:mb-20'>
                <img className='mx-auto' src={logo.src} alt="logo" />
            </div>

            {/* White Background Container */}
            <div className='bg-white lg:mx-[260px] rounded-t-2xl lg:rounded-3xl'>
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Column One */}
                    <div className='m-8 mb-none lg:m-12 lg:mr-8'>

                        {/* Bill Input Field */}
                        <div className='grid grid-flow-row mb-10 lg:mb-11'>
                            <label className='mb-3  text-grayishCyan' htmlFor="bill">Bill</label>
                            <div className='flex flex-row'>
                                <img className='absolute ' src={dollarIcon.src} alt="dollar icon" />
                                <input value={billAmount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBillAmount(e.target.value)} name='bill' id='bill' className='text-2xl bg-veryLightGrayishCyan text-veryDarkCyan text-right h-12 cursor-pointer hover:border-strongCyan focus:outline-strongCyan hover:border-2 rounded-lg px-4' type="text" placeholder='0' />
                            </div>
                        </div>

                        {/* Button field */}
                        <div className='grid grid-cols-2 lg:grid-cols-3 justify-center gap-4 mb-10 lg:mb-11'>
                            <h1 className='col-span-2 lg:col-span-3  text-grayishCyan'>Select Tip %</h1>
                            <button onClick={() => handleTipPercentage('5')} className='bg-veryDarkCyan  text-white hover:bg-strongCyan hover:text-veryDarkCyan text-xl  h-12 rounded-lg '>5%</button>
                            <button onClick={() => handleTipPercentage('10')} className='bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-veryDarkCyan text-xl  h-12 rounded-lg '>10%</button>
                            <button onClick={() => handleTipPercentage('15')} className='bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-veryDarkCyan text-xl  h-12 rounded-lg '>15%</button>
                            <button onClick={() => handleTipPercentage('25')} className='bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-veryDarkCyan text-xl  h-12 rounded-lg '>25%</button>
                            <button onClick={() => handleTipPercentage('50')} className='bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-veryDarkCyan text-xl  h-12 rounded-lg '>50%</button>
                            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTipPercentage(e.target.value)} name='customTip' id='customTip' className='text-2xl bg-veryLightGrayishCyan text-veryDarkCyan text-right hover:border-strongCyan focus:outline-strongCyan hover:border-2  px-4 rounded-lg cursor-pointer' type="text" placeholder='Custom' />
                        </div>

                        {/* Number of People Input Field */}
                        <div className='grid grid-flow-row '>
                            <label className='lg:mb-2 text-grayishCyan' htmlFor="people">Number of People</label>
                            {/* <img src={personIcon.src} alt="dollar icon" /> */}
                            <input value={peopleAmount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPeopleAmount(e.target.value)} name='people' id='people' className='text-2xl bg-veryLightGrayishCyan text-veryDarkCyan text-right h-12 hover:border-strongCyan focus:outline-strongCyan hover:border-2 rounded-lg px-4 cursor-pointer invalid:outline-orange-400' type="text" placeholder='1' />
                        </div>
                    </div>

                    {/* Column Two - Dark Background Div */}
                    <div className='bg-veryDarkCyan m-6 lg:m-8 p-6 lg:pb-0 lg:ml-[14px] lg:p-10 lg:pt-16 rounded-xl '>
                        <div className='grid grid-cols-2'>
                            {/* Tip Amount */}
                            <div className=''>
                                <h1 className='text-white'>Tip Amount</h1>
                                <p className='text-lightGrayishCyan'>/ person</p>
                            </div>
                            <div className='grid justify-end items-center'>
                                <h1 className='text-3xl text-strongCyan'>${tipAmount}</h1>
                            </div>

                            {/* Spacer Div */}
                            <div className='mb-10 lg:mb-14 col-span-2'></div>

                            {/* Total Amount */}
                            <div className=''>
                                <h1 className='text-white'>Total</h1>
                                <p className='text-lightGrayishCyan'>/ person</p>
                            </div>
                            <div className='flex justify-end items-center'>
                                <h1 className='text-3xl text-strongCyan'>${totalAmount}</h1>
                            </div>

                            {/* Spacer Div */}
                            <div className='mb-10 lg:mb-32'></div>

                            {/* Reset Button */}
                            <div className=' col-span-2'>
                                <button onClick={handleReset} className='w-full bg-resetBackground text-veryDarkCyan hover:bg-buttonBackground hover:text-veryDarkCyan text-xl h-12 rounded-lg '>RESET</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalculatorComponent
