

export const Table = () => {

    return (
        <>
            <div className='basis-1/2 w-4/5 bg-white mx-auto rounded-lg flex flex-col shadow-lg my-12 bg-gray-200 border border-gray-300 justify-center align-middle'>
                <div className='mx-auto py-4'>
                    <h3 className='text-xl text-[#0220ba]'>Convert US Dollar to Euro</h3>
                </div>
                <table className='table-fixed'>
                    <thead>
                    <tr>
                        <th>USD</th>
                        <th>EUR</th>
                    </tr>
                    </thead>
                    <tbody className='bg-white text-center text-gray-600'>
                    <tr>
                        <td className='py-2'>1 USD</td>
                        <td className='py-2'>0.974020</td>
                    </tr>
                    <tr>
                        <td className='py-2'>5 USD</td>
                        <td className='py-2'>4.740200</td>
                    </tr>
                    <tr>
                        <td className='py-2'>10 USD</td>
                        <td className='py-2'>9.870100</td>
                    </tr>
                    <tr>
                        <td className='py-2'>20 USD</td>
                        <td className='py-2'>19.870100</td>
                    </tr>
                    <tr>
                        <td className='py-2'>50 USD</td>
                        <td className='py-2'>48.701000</td>
                    </tr>
                    <tr>
                        <td className='py-2'>100 USD</td>
                        <td className='py-2'>97.870100</td>
                    </tr>
                    <tr>
                        <td className='py-2'>250 USD</td>
                        <td className='py-2'>243.505100</td>
                    </tr>
                    <tr>
                        <td className='py-2'>500 USD</td>
                        <td className='py-2'>487.010000</td>
                    </tr>
                    <tr>
                        <td className='py-2'>1000 USD</td>
                        <td className='py-2'>974.020000</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}