import { GetStarted } from '@/home/GetStarted'

export function Testimonials() {
  return (
    <>
      <ul className="container flex flex-col gap-4 mx-auto p-4 md:flex-row">
        <li className="md:w-1/3">
          <div className="w-20 mx-auto">
            <img src="/img/avatar-anisha.png" alt="Avatar"/>
          </div>

          <div className="space-y-2 -mt-6 bg-gray-50 text-center">
            <h3 className="text-lg font-bold pt-10">Anisha Li</h3>
            <p className="p-4 text-gray-500">
              Manage has supercharged our team's workflow. The ability
              to maintain visibility on
              larger milestones at all times keeps everyone motivated.
            </p>
          </div>
        </li>

        <li className="hidden md:inline-block md:w-1/3">
          <div className="w-20 mx-auto">
            <img src="/img/avatar-ali.png" alt="Avatar"/>
          </div>

          <div className="space-y-2 -mt-6 bg-gray-50 text-center">
            <h3 className="text-lg font-bold pt-10">Ali Bravo</h3>
            <p className="p-4 text-gray-500">
              We have been able to cancel so many other subscriptions since using Manage. There is
              no
              more cross-channel confusion and everyone is much more focused.
            </p>
          </div>
        </li>

        <li className="hidden md:inline-block md:w-1/3">
          <div className="w-20 mx-auto">
            <img src="/img/avatar-richard.png" alt="Avatar"/>
          </div>

          <div className="space-y-2 -mt-6 bg-gray-50 text-center">
            <h3 className="text-lg font-bold pt-10">Richard Watts</h3>
            <p className="p-4 text-gray-500">
              Manage has supercharged our team's workflow. The ability to maintain visibility on
              larger milestones at all times keeps everyone motivated.
            </p>
          </div>
        </li>
      </ul>

      <div className="mb-8 text-center">
        <GetStarted/>
      </div>
    </>
  )
}
