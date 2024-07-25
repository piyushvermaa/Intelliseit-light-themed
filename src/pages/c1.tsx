'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { ref, set } from 'firebase/database'
import { auth, provider, database } from '../firebaseConfig'
import { Clock, Video, Users } from 'react-feather'

const storeUserCourseData = (email: any, courseId: any) => {
  const userRef = ref(database, 'users/' + email.replace('.', ',')) // Firebase keys cannot contain '.' so replace it

  set(userRef, {
    courseId: courseId,
    email: email,
  })
    .then(() => {
      console.log('Data saved successfully!')
    })
    .catch((error) => {
      console.error('Error saving data:', error)
    })
}

const CoursePage: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<number | null>(null)
  const [reviews, setReviews] = useState<{ username: string; review: string }[]>([])
  const [newReview, setNewReview] = useState<{
    username: string
    review: string
  }>({
    username: '',
    review: '',
  })

  const handleLessonToggle = (index: number) => {
    setActiveLesson(activeLesson === index ? null : index)
  }

  const handleReviewSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (newReview.review.trim() !== '' && newReview.username.trim() !== '') {
      setReviews([...reviews, newReview])
      setNewReview({ username: '', review: '' })
    }
  }

  // Mock reviews data
  useEffect(() => {
    const mockReviews = [
      { username: 'Aditya', review: 'Wow, what a great course!' },
      {
        username: 'Sushila',
        review: 'Very nice teaching and good way of explaining.',
      },
      {
        username: 'Rahul',
        review: 'Had a very good experience learning. Thank you!',
      },
      {
        username: 'Mahima',
        review: 'Got help in understanding, thank you. Very good.',
      },
      {
        username: 'Sunil',
        review: 'Great course, the best. Wow, what a time!',
      },
    ]

    setReviews(mockReviews)
  }, [])

  return (
    <div className="min-h-screen p-6 text-black">
      <div className="max-w-[1200px] mx-auto overflow-hidden fade-in flex flex-col lg:flex-row">
        <div className="lg:w-2/3 p-6 fade-in  ">
          <h1 className=" text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-[#127C71]">
            Code Mastery: Fullstack Development
          </h1>
          <div className="flex items-center mb-4">
            <span className="text-xl font-semibold text-yellow-400">⭐⭐⭐⭐⭐ (4.8/5)</span>
            <span className="ml-4 text-gray-900">({reviews.length} reviews)</span>
          </div>

          <h2 className="text-xl font-semibold mb-2">Course Overview</h2>
          <p className="mb-4 text-gray-900">
            Master the art of fullstack development with our comprehensive course. Perfect for all levels, our
            curriculum covers front-end, back-end, and everything in between.
          </p>
          <div className="flex justify-around flex-wrap">
            <div className="flex items-center mb-4 text-gray-900">
              <Clock size={20} className="mr-2" />
              <span>Duration: 12 weeks</span>
            </div>
            <div className="flex items-center mb-4 text-gray-900">
              <Video size={20} className="mr-2" />
              <span>Live Lectures: 10</span>
            </div>
            <div className="flex items-center mb-4 text-gray-900">
              <Users size={20} className="mr-2" />
              <span>Students Enrolled: 772</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2 ">Educator</h2>
          <div className="flex items-center mb-4">
            <Image src="/avatar.jpg" alt="Salman Usmani" width={500} height={500} className="rounded-full" />
            <p className="ml-4 text-gray-900 text-justify">
              Led by renowned educator XYZ, who boasts over 20 years of experience in the tech industry, our courses
              provide unparalleled insights. XYZ has mastered various programming languages and has worked globally,
              bringing a wealth of knowledge and expertise to our academy. With a passion for teaching and a commitment
              to excellence, XYZ ensures that every student gains a deep understanding of the material, preparing them
              for successful careers in technology.
            </p>
          </div>
          <h2 className="text-xl font-semibold mb-2 ">Lessons</h2>
          <ul className="mb-4 text-gray-900">
            {[
              'Introduction to Fullstack Development',
              'Front-End Basics',
              'Back-End Basics',
              'Advanced Techniques',
              'Project Development',
            ].map((lesson, index) => (
              <li key={index} className="mb-2 text-white rounded-md shadow-sm">
                <button
                  className="flex items-center justify-between w-full p-2 text-left bg-[#127C71] rounded-md hover:bg-[#FFAF35] transition duration-300"
                  onClick={() => handleLessonToggle(index)}
                >
                  {lesson}
                  <span className="ml-2">{activeLesson === index ? '▲' : '▼'}</span>
                </button>
                {activeLesson === index && (
                  <p className="mt-2 p-2 bg-gray-700 rounded-md text-sm ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum est atque odio quae?
                    Molestias architecto labore impedit officia ducimus dolore maxime fuga. Perspiciatis reiciendis
                    laudantium porro, rerum excepturi iste! {lesson.toLowerCase()}.
                  </p>
                )}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold mb-2 ">Prerequisites</h2>
          <p className="mb-4 text-gray-900">No prior experience required. A passion for coding is all you need.</p>
          {/* Review Form Section */}
          <div className="max-w-6xl mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4 ">Add Your Review</h2>
            <form onSubmit={handleReviewSubmit} className="flex flex-col w-full max-w-md">
              <input
                type="text"
                placeholder="Your Name"
                value={newReview.username}
                onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
                className="w-full p-2 mb-2 border border-gray-700 rounded-md shadow-sm  "
              />
              <textarea
                className="w-full p-2 mb-2 border border-gray-700 rounded-md shadow-sm "
                rows={3}
                placeholder="Add your review..."
                value={newReview.review}
                onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
              ></textarea>
              <button
                type="submit"
                className="bg-[#127C71] text-white px-4 py-2 rounded-lg shadow hover:bg-[#FFAF35] transition duration-300 w-full"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
        <div className="lg:w-1/3 flex flex-col items-center p-6 gap-5">
          <Image
            src="/images/courses/stillness-inmotion-Jh6aQX-25Uo-unsplash.jpg"
            alt="Coding Academy"
            width={300}
            height={300}
            objectFit="cover"
            className="rounded-lg mb-4"
          />
          <div className="p-4 rounded-lg bg-opacity-50 border border-gray-700 shadow-sm">
            <h2 className="text-xl font-semibold mb-2 ">Pricing</h2>
            <p className="mb-4 text-gray-900">
              Rs. 6000/- <br /> One-time payment for lifetime access
            </p>
            <button
              className="bg-[#127C71] text-white px-4 py-2 rounded-lg shadow hover:bg-[#FFAF35] transition duration-300 w-full"
              onClick={() => {
                if (!localStorage.getItem('login')) alert('Login First')
                else {
                  // in firebase put this courseId next to mail
                  storeUserCourseData(localStorage.getItem('userMail'), 'c1')
                }
              }}
            >
              Enroll Now
            </button>
            <p className="mt-2 text-sm text-gray-900 text-center">
              Have questions? Contact us at{' '}
              <a href="tel:+1234567890" className="text-gray-600">
                +1234567890
              </a>
            </p>
          </div>
          {/* Display Reviews Section */}
          <div className="max-w-[300px] p-3 border border-gray-700 shadow-sm rounded-md">
            <h2 className="text-2xl font-semibold">Reviews</h2>
            <ul className="mb-4 text-gray-900">
              {reviews.map((review, index) => (
                <li key={index} className="mb-2">
                  <p className="font-semibold">{review.username}</p>
                  <p className="mb-2 text-black/60 text-sm">{review.review}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePage
