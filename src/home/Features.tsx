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

      <div>
        <ul>
          <li className="flex items-center gap-2 rounded-l-2xl rounded-r bg-orange-200 md:bg-transparent">
            <span className="px-2 py-1 rounded-full bg-orange-500 text-white">01</span>
            <h3 className="text-lg font-semibold">Track company-wide progress</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}
