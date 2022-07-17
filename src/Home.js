export default function Home() {
  return (
    <div className="col mt-3">
      <p>
        These are a series of challenges to practice the fundamentals of using fetch.
      </p>
      <p>
        You can switch between the 6 challenges using the top navbar.
        The challenges cover reading, creating, updating and deleting.
      </p>
      <p>
        Look out for the <code>/**** DON'T CHANGE ANYTHING BELOW ****/</code> comment.
      </p>
      <p>
        Each challenge will ask you to correctly communicate with a fake backend that uses
        Mirage.js to intercept fetch requests and give a response as if from a backend.
        Because Mirage.js only fakes a backend, all the data will reset whenever the
        page is refreshed.
      </p>
    </div>
  )
}