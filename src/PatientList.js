const PatientList = ({infos, title}) => {

    return ( 
        <div className="p-10 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto align-left">
                <h1 className="text-base font-semibold leading-6 text-gray-900">{ title }</h1>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                type="button"
                className="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                Add user
                </button>
            </div>
            </div>
            <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">
                            Patient ID
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">
                            Test Item
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">
                            Test Group
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">
                            Result
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">
                            Visit ID
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">
                            Date
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-sm font-semibold text-gray-900">
                            Time
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Edit</span>
                        </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        {infos.map(info => (
                        <tr key={info.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {info.patientId}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.testItem}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.testGroup}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.result}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.visitId}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.date}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{info.time}</td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a href="#" className="text-blue-600 hover:text-blue-900">
                                Edit<span className="sr-only">, {info.patientId}</span>
                            </a>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default PatientList;