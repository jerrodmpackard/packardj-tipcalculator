'use client'
import React, { useEffect, useState } from 'react'
import dollarIcon from '../../../images/icon-dollar.svg'
import personIcon from '../../../images/icon-person.svg'

const CalculatorComponent = () => {

    const [billAmount, setBillAmount] = useState<string>('');
    const [tipPercentage, setTipPercentage] = useState<number>(0);
    const [peopleAmount, setPeopleAmount] = useState<string>('');
    const [tipAmount, setTipAmount] = useState<string>('$0.00');
    const [totalAmount, setTotalAmount] = useState<string>('$0.00');

    // User will enter a bill amount, select a tip percentage, and optionally enter a number of people
    // tip amount will be obtained from multiplying the tip percentage from the bill amount ($24.67 * 0.2 = $4.93)
    // total amount will be obtained from adding the tip amount with the bill amount
    // if a people amount is entered, divide the tip amount and the total amount by the number entered

    // const calculateTipAmount = () => {
    //     setTipAmount((Number(billAmount) * tipPercentage / Number(peopleAmount)).toFixed(2));
    // }

    // const calculateTotalAmount = () => {
    //     setTotalAmount(((Number(tipAmount) + Number(billAmount)) / Number(peopleAmount)).toFixed(2));
    // }








    // useEffect(() => {
        const calculateTipAmount = () => {
            return (Number(billAmount) * tipPercentage / Number(peopleAmount)).toFixed(2);
        }

        const calculateTotalAmount = () => {
            return ((Number(tipAmount) + Number(billAmount)) / Number(peopleAmount)).toFixed(2);
        }

        // if (billAmount && tipPercentage && peopleAmount) {
        //     setTipAmount(calculateTipAmount());
        //     setTotalAmount(calculateTotalAmount());
        // }
    // }, [billAmount, tipPercentage, peopleAmount]);

    const handleTipPercentage = (percentage: number) => {
        setTipPercentage(percentage / 100);
        setTipAmount(calculateTipAmount());
        setTotalAmount(calculateTotalAmount());
    }















    const updateTotals = () => {
        console.log('-----------');
        console.log('Bill: $' + billAmount);
        console.log('Tip: ' + tipPercentage);
        console.log('Tip Amount: ' + tipAmount);
        console.log('Total Amount: ' + totalAmount);
        // console.log(peopleAmount);

        setTipAmount(prevTipAmount => (Number(billAmount) * tipPercentage / Number(peopleAmount)).toFixed(2));
        setTotalAmount(prevTotalAmount => ((Number(tipAmount) + Number(billAmount)) / Number(peopleAmount)).toFixed(2));

    }


    const handle5Percent = () => {
        setTipPercentage(0.05);
        updateTotals();
    }
    const handle10Percent = () => {
        setTipPercentage(0.1);
        updateTotals();
    }
    const handle15Percent = () => {
        setTipPercentage(0.15);
        updateTotals();
    }
    const handle25Percent = () => {
        setTipPercentage(0.25);
        updateTotals();
    }
    const handle50Percent = () => {
        setTipPercentage(0.5);
        updateTotals();
    }

    const handleCustomPercent = (percentage: number) => {
        setTipPercentage(percentage / 100);
        updateTotals();
    }

    const handleReset = () => {
        setBillAmount('');
        setTipPercentage(1);
        setPeopleAmount('1');
        setTipAmount('$0.00');
        setTotalAmount('$0.00');
    }


    return (
        <div className="grid justify-center items-center">
            {/* Splitter top text */}
            <div className='mt-12 mb-10 lg:mt-40 lg:mb-20'>
                <h1 className="flex justify-center text-2xl text-grayishCyan tracking-widest">SPLI</h1>
                <h1 className="flex justify-center text-2xl text-grayishCyan tracking-widest">TTER</h1>
            </div>

            {/* White Background Container */}
            <div className='bg-white lg:mx-[260px] rounded-t-2xl lg:rounded-2xl'>
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Column One */}
                    <div className='m-8 mb-none lg:m-12'>

                        {/* Bill Input Field */}
                        <div className='grid grid-flow-row mb-10 lg:mb-11'>
                            <label className='mb-3  text-grayishCyan' htmlFor="bill">Bill</label>
                            <div className='grid grid-flow-row'>
                                <img className='absolute' src={dollarIcon.src} alt="dollar icon" />
                                <input value={billAmount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBillAmount(e.target.value)} name='bill' id='bill' className='text-2xl bg-veryLightGrayishCyan text-veryDarkCyan text-right h-12 cursor-pointer hover:border-strongCyan focus:outline-strongCyan hover:border-2 rounded-lg px-4' type="text" placeholder='0' />
                            </div>
                        </div>

                        {/* Button field */}
                        <div className='grid grid-cols-2 lg:grid-cols-3 justify-center gap-4 mb-10 lg:mb-11'>
                            <h1 className='col-span-2 lg:col-span-3  text-grayishCyan'>Select Tip %</h1>
                            <button onClick={() => handleTipPercentage(5)} className='bg-veryDarkCyan  text-white hover:bg-strongCyan hover:text-veryDarkCyan text-xl  h-12 rounded-lg '>5%</button>
                            <button onClick={() => handleTipPercentage(10)} className='bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-veryDarkCyan text-xl  h-12 rounded-lg '>10%</button>
                            <button onClick={() => handleTipPercentage(15)} className='bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-veryDarkCyan text-xl  h-12 rounded-lg '>15%</button>
                            <button onClick={() => handleTipPercentage(25)} className='bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-veryDarkCyan text-xl  h-12 rounded-lg '>25%</button>
                            <button onClick={() => handleTipPercentage(50)} className='bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-veryDarkCyan text-xl  h-12 rounded-lg '>50%</button>
                            <input className='text-2xl bg-veryLightGrayishCyan text-veryDarkCyan text-right hover:border-strongCyan focus:outline-strongCyan hover:border-2  px-4 rounded-lg cursor-pointer' type="text" placeholder='Custom' />
                        </div>

                        {/* Number of People Input Field */}
                        <div className='grid grid-flow-row mb-11'>
                            <label className='lg:mb-3 text-grayishCyan' htmlFor="people">Number of People</label>
                            {/* <img src={personIcon.src} alt="dollar icon" /> */}
                            <input value={peopleAmount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPeopleAmount(e.target.value)} name='people' id='people' className='text-2xl bg-veryLightGrayishCyan text-veryDarkCyan text-right h-12 hover:border-strongCyan focus:outline-strongCyan hover:border-2 rounded-lg px-4 cursor-pointer invalid:outline-orange-400' type="text" placeholder='1' />
                        </div>
                    </div>

                    {/* Column Two - Dark Background Div */}
                    <div className='bg-veryDarkCyan m-6 lg:m-8 p-6 lg:p-8 rounded-xl '>
                        <div className='grid grid-cols-2'>
                            {/* Tip Amount */}
                            <div className=''>
                                <h1 className='text-white'>Tip Amount</h1>
                                <p className='text-lightGrayishCyan'>/ person</p>
                            </div>
                            <div className='grid justify-end items-center'>
                                <h1 className='text-3xl text-strongCyan'>{tipAmount}</h1>
                            </div>

                            {/* Spacer Div */}
                            <div className='mb-10 lg:mb-14 col-span-2'></div>

                            {/* Total Amount */}
                            <div className=''>
                                <h1 className='text-white'>Total</h1>
                                <p className='text-lightGrayishCyan'>/ person</p>
                            </div>
                            <div className='flex justify-end items-center'>
                                <h1 className='text-3xl text-strongCyan'>{totalAmount}</h1>
                            </div>

                            {/* Spacer Div */}
                            <div className='mb-10 lg:mb-32'></div>

                            {/* Reset Button */}
                            <div className=' col-span-2'>
                                <button onClick={handleReset} className='w-full bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-veryDarkCyan text-xl h-12 rounded-lg '>RESET</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalculatorComponent
