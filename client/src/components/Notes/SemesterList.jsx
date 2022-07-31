import React from 'react'
import { Link } from 'react-router-dom'
import './semester_list.css'

const Semester = () => {
  return (
    <section>
      <div class="container py-4">
        <h1 class="h1 text-center" id="pageHeaderTitle">CHOOSE SEMESTER</h1>

        <article class="postcard dark blue">
          <Link class="postcard__img_link" to="/notes/sem1">
            <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" /></Link>
          <div class="postcard__text">
            <h1 class="postcard__title blue"><Link to="/notes/sem1">SEMESTER ONE</Link></h1>
            <div class="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i class="fas fa-calendar-alt mr-2"></i>DECEMBER 2021 - APRIL 2022
              </time>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">For the First Semester, you will learn subjects like The Basics of Computers, computational thinking and programming via C language, Web Development to start your development experience, Database Management System to introduce you to the complexity to handle data, Professional Communication to enhance your communication skills and Sports as it is an integral part of life.</div>
            <ul class="postcard__tagbox">
              <li class="tag__item play blue">
                <a href="#"><i class="fas fa-play mr-2"></i>Let's Explore</a>
              </li>
            </ul>
          </div>
        </article>
        <article class="postcard dark blue">
        <Link class="postcard__img_link" to="/notes/sem2">
            <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" /></Link>
          <div class="postcard__text">
            <h1 class="postcard__title blue"><Link to="/notes/sem2">SEMESTER TWO</Link></h1>
            <div class="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i class="fas fa-calendar-alt mr-2"></i>APRIL 2022 - AUGUST 2022
              </time>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">For the Second Semester, we learn the subject OOPS in Java, Data Structure to build a base for algorithms using C or C++, Computer Organization and Architecture to understand how computers work, Professional Communication to enhance our speaking skills and for interview preparation and Sports to stay fit.</div>
            <ul class="postcard__tagbox">
              <li class="tag__item play blue">
                <a href="#"><i class="fas fa-play mr-2"></i>Let's Explore</a>
              </li>
            </ul>
          </div>
        </article>
        <article class="postcard dark blue">
        <Link class="postcard__img_link" to="/notes/sem3">
            <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" /></Link>
          <div class="postcard__text">
            <h1 class="postcard__title blue"><Link to="/notes/sem3">SEMESTER THREE</Link></h1>
            <div class="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i class="fas fa-calendar-alt mr-2"></i>AUGUST 2022 - DECEMBER 2022
              </time>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">For the Third Semester, you will learn subjects like The Basics of Computers, computational thinking and programming via C language, Web Development to start your development experience, Database Management System to introduce you to the complexity to handle data, Professional Communication to enhance your communication skills and Sports as it is an integral part of life</div>
            <ul class="postcard__tagbox">
              <li class="tag__item play blue">
                <a href="#"><i class="fas fa-play mr-2"></i>Let's Explore</a>
              </li>
            </ul>
          </div>
        </article>
        <article class="postcard dark blue">
        <Link class="postcard__img_link" to="/notes/sem4">
            <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" /></Link>
          <div class="postcard__text">
            <h1 class="postcard__title blue"><Link to="/notes/sem4">SEMESTER FOUR</Link></h1>
            <div class="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i class="fas fa-calendar-alt mr-2"></i>DECEMBER 2021 - APRIL 2022
              </time>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">For the Fourth Semester, we learn the subject OOPS in Java, Data Structure to build a base for algorithms using C or C++, Computer Organization and Architecture to understand how computers work, Professional Communication to enhance our speaking skills and for interview preparation and Sports to stay fit.</div>
            <ul class="postcard__tagbox">
              <li class="tag__item play blue">
                <a href="#"><i class="fas fa-play mr-2"></i>Let's Explore</a>
              </li>
            </ul>
          </div>
        </article>
        <article class="postcard dark blue">        <Link class="postcard__img_link" to="/notes/sem5">
            <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" /></Link>
          <div class="postcard__text">
            <h1 class="postcard__title blue"><Link to="/notes/sem5">SEMESTER FIVE</Link></h1>
            <div class="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i class="fas fa-calendar-alt mr-2"></i>DECEMBER 2021 - APRIL 2022
              </time>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">For the Fifth Semester, you will learn subjects like The Basics of Computers, computational thinking and programming via C language, Web Development to start your development experience, Database Management System to introduce you to the complexity to handle data, Professional Communication to enhance your communication skills and Sports as it is an integral part of life</div>
            <ul class="postcard__tagbox">
              <li class="tag__item play blue">
                <a href="#"><i class="fas fa-play mr-2"></i>Let's Explore</a>
              </li>
            </ul>
          </div>
        </article>
        <article class="postcard dark blue">
        <Link class="postcard__img_link" to="/notes/sem6">
            <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" /></Link>
          <div class="postcard__text">
            <h1 class="postcard__title blue"><Link to="/notes/sem6">SEMESTER SIX</Link></h1>
            <div class="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i class="fas fa-calendar-alt mr-2"></i>DECEMBER 2021 - APRIL 2022
              </time>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">For the Sixth Semester, we learn the subject OOPS in Java, Data Structure to build a base for algorithms using C or C++, Computer Organization and Architecture to understand how computers work, Professional Communication to enhance our speaking skills and for interview preparation and Sports to stay fit.</div>
            <ul class="postcard__tagbox">
              <li class="tag__item play blue">
                <a href="#"><i class="fas fa-play mr-2"></i>Let's Explore</a>
              </li>
            </ul>
          </div>
        </article>
        <article class="postcard dark blue">
        <Link class="postcard__img_link" to="/notes/sem7">
            <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" /></Link>
          <div class="postcard__text">
            <h1 class="postcard__title blue"><Link to="/notes/sem7">SEMESTER SEVEN</Link></h1>
            <div class="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i class="fas fa-calendar-alt mr-2"></i>DECEMBER 2021 - APRIL 2022
              </time>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">For the Seventh Semester, you will learn subjects like The Basics of Computers, computational thinking and programming via C language, Web Development to start your development experience, Database Management System to introduce you to the complexity to handle data, Professional Communication to enhance your communication skills and Sports as it is an integral part of life</div>
            <ul class="postcard__tagbox">
              <li class="tag__item play blue">
                <a href="#"><i class="fas fa-play mr-2"></i>Let's Explore</a>
              </li>
            </ul>
          </div>
        </article>
        <article class="postcard dark blue">
        <Link class="postcard__img_link" to="/notes/sem8">
            <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" /></Link>
          <div class="postcard__text">
            <h1 class="postcard__title blue"><Link to="/notes/sem8">SEMESTER EIGHT</Link></h1>
            <div class="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <i class="fas fa-calendar-alt mr-2"></i>DECEMBER 2021 - APRIL 2022
              </time>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">For the Eight Semester, we learn the subject OOPS in Java, Data Structure to build a base for algorithms using C or C++, Computer Organization and Architecture to understand how computers work, Professional Communication to enhance our speaking skills and for interview preparation and Sports to stay fit.</div>
            <ul class="postcard__tagbox">
              <li class="tag__item play blue">
                <a href="#"><i class="fas fa-play mr-2"></i>Let's Explore</a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Semester
