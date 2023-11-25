import React from 'react'
import Review from '../Review/Review'

const Home = () => {
  return (
    <main>
        <section className="container">
            <div className="title">
                <h2>Review Blog App</h2>
                <div className="underline"></div>
                <Review/>
            </div>
        </section>
    </main>
  )
}

export default Home
