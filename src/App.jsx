
import './App.css'

function App() {


  return (
    <>
<h1 className='bg-blue-400 text-center font-semiBold text-4xl'>Book vibe</h1>
{/* banner */}
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZklEwaE_xg7ITKcik7vY9jDDwJ73GvPbHw&s"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </>
  )
}

export default App
