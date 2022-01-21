const lectures = [
  'How to init App',
  'How to get a help',
  'Introduction to Solidity',
  'Programing in C++',
  'How to write For Loops',
  'Safe operator',
];

interface Props {
  locked: boolean;
}

function Curriculum({ locked }: Props) {
  const statusClass =
    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full';
  return (
    <section className="max-w-5xl mx-auto">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Section 1
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {lectures.map((lec) => (
                    <tr key={lec}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {lec}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={
                            locked
                              ? `bg-red-100 text-red-800 ${statusClass}`
                              : `bg-green-100 text-green-800 ${statusClass}`
                          }
                        >
                          {locked ? 'Locked' : 'Unlocked'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          {locked ? 'Get Access' : 'Play'}
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
    </section>
  );
}

export default Curriculum;
