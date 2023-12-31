'use client'
import styles from './mask.module.scss'
import { motion } from 'framer-motion'
import useMousePosition from '@/utils/useMousePositions'
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const [maskScale, setMaskScale] = useState(50)
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const { x, y } = useMousePosition()
  const size = isHovered ? maskScale * 10 : maskScale

  const handleMouseToggle = (scale: number, hover: boolean) => {
    setMaskScale(scale)
    setIsHovered(hover)
  }

  const handleNext = () => {
    setPositionIndexes((prev) => {
      const updatedIndexes = prev.map((item) => (item + 1) % 5 );
      return updatedIndexes;
    })
  }

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <>
      <main className="w-full h-full select-none">
        <motion.div
          className={`${styles.mask} w-full flex flex-col items-center justify-center`}
          animate={{
            WebkitMaskPosition: `${Number(x) - size / 2}px ${
              Number(y) - size / 2 - 96
            }px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        >
          <section className="h-[calc(100vh_-_96px)] flex flex-col justify-center gap-2">
            <div className="flex flex-col">
              <p className="text-xl">João Pedro</p>
              <h1
                onMouseEnter={() => handleMouseToggle(50, true)}
                onMouseLeave={() => handleMouseToggle(50, false)}
                className="text-8xl font-light"
              >
                I&apos;m also a UI & UX enthusiast
              </h1>
              <div className="flex justify-end w-full gap-4 mt-4">
                <div className="w-2 h-2 rounded-full bg-black-pallete"></div>
                <div className="w-2 h-2 rounded-full bg-black-pallete"></div>
                <div className="w-2 h-2 rounded-full bg-black-pallete"></div>
                <div className="w-20 h-2 rounded-full bg-black-pallete"></div>
              </div>
            </div>
          </section>
          <section
            onMouseEnter={() => handleMouseToggle(80, true)}
            onMouseLeave={() => handleMouseToggle(50, false)}
            className="w-full h-screen flex justify-center pt-24"
          >
            <div className="relative max-w-2xl mx-24 h-full flex flex-col gap-32 bg-red-pallete border-r border-l border-t border-black-pallete">
              <h1 className=" bg-red-pallete text-black-pallete p-8 mt-20 text-8xl font-light">
                Creating Unique Experiences With Unique Skills
              </h1>
              <a
                href="https://github.com/7cass"
                target="_blank"
                rel="noopener"
                className="text-red-pallete bg-black-pallete w-full flex items-center justify-end gap-4 px-8 cursor-pointer"
              >
                <small className="text-xl">Check my Github</small>
                <ArrowRight weight="thin" size={40} />
              </a>
            </div>
            <div className="w-full mr-24 mb-36 bg-black-pallete text-red-pallete">
              <div className="relative p-8 flex items-center justify-center w-full h-full">
              </div>
            </div>
          </section>
        </motion.div>
        <div className="w-full flex flex-col items-center justify-center">
          <section
            id="hero"
            className="h-[calc(100vh_-_96px)] flex flex-col justify-center gap-2"
          >
            <p className="text-xl">João Pedro</p>
            <h1 className="text-8xl font-light">
              I&apos;m a Software Developer
            </h1>
            <div className="self-end flex gap-4 mt-4">
              <div className="w-2 h-2 rounded-full bg-red-pallete"></div>
              <div className="w-2 h-2 rounded-full bg-red-pallete"></div>
              <div className="w-2 h-2 rounded-full bg-red-pallete"></div>
              <div className="w-20 h-2 rounded-full bg-red-pallete"></div>
            </div>
          </section>

          <section
            id="projects"
            className="w-full h-screen flex bg-red-pallete text-black-pallete pt-24"
          >
            <div className="max-w-2xl mx-24 h-full flex flex-col gap-32 bg-black-pallete">
              <h1 className=" bg-black-pallete text-red-pallete p-8 mt-20 text-8xl font-light">
                Transforming Concepts Into Exceptional Software
              </h1>
              <a
                href="https://github.com/7cass"
                target="_blank"
                rel="noopener"
                className="text-black-pallete bg-red-pallete w-full flex items-center justify-end gap-4 px-8 cursor-pointer"
              >
                <small className="text-xl">Check my Github</small>
                <ArrowRight weight="thin" size={40} />
              </a>
            </div>
            <div className="w-full mr-24 mb-36 bg-black-pallete text-red-pallete">
              <div className="p-8 flex items-center justify-center w-full h-full">
                
                <div style={{ WebkitMask: 'linear-gradient(90deg,#00081400,#000814 4% 96%,#00081400)'}} className="relative overflow-hidden flex items-center justify-center h-full w-full p-20">
                <ArrowLeft
                  className="z-10 absolute left-8 cursor-pointer"
                  size={40}
                  weight="thin"
                  onClick={handleBack}
                />
                  {[0, 1, 2, 3, 4].map((item, index) => (
                    <motion.div
                     initial="center"
                     animate={positions[positionIndexes[index]]}
                     variants={imageVariants}
                     transition={{ duration: 0.5}}
                     key={index}
                     className={`${positionIndexes[index] !== 0 ? 'blur' : ''} w-1/2 absolute items-center border border-red-pallete bg-black-pallete text-red-pallete h-[90%] p-12`}>
                      <a
                        href="https://github.com/7Cass/Rentx"
                        target="_blank"
                        className="flex items-center justify-center gap-4 cursor-pointer border border-red-pallete rounded-md py-2 px-4"
                      >
                        <h2 className="text-2xl">Rentx</h2>
                        <GithubLogo width={24} height={24} />
                      </a>
                      <div className="w-full flex gap-2 my-8">
                        <div className="h-px w-full flex-1 bg-red-pallete"></div>
                        <div className="h-px w-px rounded-full bg-red-pallete"></div>
                        <div className="h-px w-px rounded-full bg-red-pallete"></div>
                        <div className="h-px w-px rounded-full bg-red-pallete"></div>
                        <div className="h-px w-full flex-1 bg-red-pallete"></div>
                      </div>
                      <p>
                        A REST renting cars API, following best practices and
                        design patterns. <br />
                        Was developed when I was studying some introduction about
                        Backend development and applying for jobs in late 2021.{' '}
                        <br />
                        I&apos;ve spent some good weeks working on this and
                        learned so much about clean architecture and APIs.
                      </p>
                      <div className="w-full flex gap-2 my-8">
                        <div className="h-px w-full flex-1 bg-red-pallete"></div>
                        <div className="h-px w-px rounded-full bg-red-pallete"></div>
                        <div className="h-px w-px rounded-full bg-red-pallete"></div>
                        <div className="h-px w-px rounded-full bg-red-pallete"></div>
                        <div className="h-px w-full flex-1 bg-red-pallete"></div>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        <small className="text-xs border border-red-pallete p-1.5 w-20 text-center">
                          Typescript
                        </small>
                        <small className="text-xs border border-red-pallete p-1.5 w-20 text-center">
                          Node
                        </small>
                        <small className="text-xs border border-red-pallete p-1.5 w-20 text-center">
                          Express
                        </small>
                        <small className="text-xs border border-red-pallete p-1.5 w-20 text-center">
                          Postgres
                        </small>
                        <small className="text-xs border border-red-pallete p-1.5 w-20 text-center">
                          Clean Code
                        </small>
                        <small className="text-xs border border-red-pallete p-1.5 w-20 text-center">
                          REST
                        </small>
                      </div>
                  </motion.div>
                  ))}
                  <div className="z-20 absolute right-8 cursor-pointer">
                  <ArrowRight size={36} weight="thin" onClick={handleNext} />
                </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="w-full h-screen flex bg-black-pallete text-red-pallete"
          >
            <div className="max-w-xl mx-24 h-full flex mt-24"></div>
          </section>
        </div>
      </main>
    </>
  )
}
