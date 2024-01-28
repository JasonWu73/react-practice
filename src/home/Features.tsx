export function Features() {
  return (
    <div className="container flex flex-col gap-4 mx-auto p-4 md:flex-row">
      <div className="flex flex-col gap-4 md:max-w-[50%]">
        <h2 className="text-4xl font-bold">
          What's different about Manage?
        </h2>

        <p className="text-gray-500">
          Manage provides all the functionality your team needs, without the complexity. Our
          software is tailor-made for modern digital product teams.
        </p>
      </div>

      <ul className="space-y-4">
        <li className="flex flex-col gap-2">
          <div className="flex items-center gap-1 rounded-l-2xl rounded-r bg-orange-200 md:bg-transparent">
            <span className="px-2 py-1 rounded-full bg-orange-500 text-white text-sm">01</span>
            <h3 className="text-lg font-semibold">Track company-wide progress</h3>
          </div>

          <p className="text-gray-500">
            See how your day-to-day tasks fit into the wider vision. Go from tracking progress at
            the milestone level all the way done to the smallest of details. Never lose sight of
            the bigger picture again.
          </p>
        </li>

        <li className="flex flex-col gap-2">
          <div className="flex items-center gap-1 rounded-l-2xl rounded-r bg-orange-200 md:bg-transparent">
            <span className="px-2 py-1 rounded-full bg-orange-500 text-white text-sm">01</span>
            <h3 className="text-lg font-semibold">Advanced built-in reports</h3>
          </div>

          <p className="text-gray-500">
            Set internal delivery estimates and track progress toward company goals. Our
            customisable dashboard helps you build out the reports you need to keep key
            stakeholders informed.
          </p>
        </li>

        <li className="flex flex-col gap-2">
          <div className="flex items-center gap-1 rounded-l-2xl rounded-r bg-orange-200 md:bg-transparent">
            <span className="px-2 py-1 rounded-full bg-orange-500 text-white text-sm">01</span>
            <h3 className="text-lg font-semibold">Everything you need in one place</h3>
          </div>

          <p className="text-gray-500">
            Stop jumping from one service to another to communicate, store files, track tasks and
            share documents. Manage offers an all-in-one team productivity solution.
          </p>
        </li>
      </ul>
    </div>
  )
}
