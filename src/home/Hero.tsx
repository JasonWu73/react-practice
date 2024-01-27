import { GetStarted } from '@/home/GetStarted'

export function Hero() {
  return (
    <section className="container flex flex-col-reverse mx-auto mb-4 p-4 md:flex-row">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">
          Bring everyone together to build better products
        </h1>

        <p className="text-gray-500">
          Manage makes it simple for software teams to plan day-to-day tasks while
          keeping the larger team goals in view.
        </p>

        <div>
          <GetStarted/>
        </div>
      </div>

      <Image/>
    </section>
  )
}

function Image() {
  return (
    <img src="img/illustration-intro.svg" alt="intro" className="md:w-1/3"/>
  )
}
