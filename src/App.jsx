import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import photo from './assets/foto.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <div className="text-white py-8 bg-[url('./assets/bg.jpg')]">
          <div className="container mx-auto max-w-7xl flex flex-col items-start lg:flex-row my-12 md:my-12">
            <div className="flex flex-col w-full sticky lg:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <div className="w-full pt-10 max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                  <img className="w-50 mb-3 rounded-lg shadow-lg" src={photo} alt="Photo"/>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Dra. Ada Luz Flores Ortega</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Ingeniera Economista</span>
                  <div className="flex mt-4 space-x-3">
                    <button id="facebook" className="bg-white duration-500 w-12 transform hover:-translate-y-1 h-12 text-2xl rounded-lg hover:bg-rose-400 hover:text-white text-rose-400 ">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button id="whatsapp" className="bg-white duration-500 w-12 h-12 rounded-lg transform hover:-translate-y-1 text-2xl text-rose-400 hover:bg-rose-400 hover:text-white">
                      <i className="fab fa-whatsapp"></i>
                    </button>
                    <button id="linkedin" className="bg-white transform hover:-translate-y-1 w-12 h-12 rounded-lg duration-500 text-rose-400 hover:bg-rose-400 hover:text-white text-2xl">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </div>
                  <div className="w-full my-4 px-6">
                    <div className="max-w-sm p-4 bg-gray-50 border border-gray-200 rounded-xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                      <ul className="space-y-3">
                        <li>
                          <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 group dark:bg-gray-600 dark:text-white">
                            <figcaption className="flex items-center justify-center space-x-5">
                              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#cc99ff"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                              </div>
                              <div className="space-y-0.5 font-medium dark:text-white text-left">
                                  <div>Celular</div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">+51 951532288</div>
                              </div>
                            </figcaption>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 group dark:bg-gray-600 dark:text-white">
                            <figcaption className="flex items-center justify-center space-x-5">
                              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" fill="#78ce96"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                              </div>
                              <div className="space-y-0.5 font-medium dark:text-white text-left">
                                  <div>Ubicación</div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">Puno, Perú</div>
                              </div>
                            </figcaption>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 group dark:bg-gray-600 dark:text-white">
                            <figcaption className="flex items-center justify-center space-x-5">
                              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex items-center justify-center shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#ff5c74"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                              </div>
                              <div className="space-y-0.5 font-medium text-left">
                                  <div>Email</div>
                                  <div className="text-sm text-gray-500">
                                    <p>
                                      <span>adaflores1624 @gmail.com</span>
                                    </p>
                                  </div>
                              </div>
                            </figcaption>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4">
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg hover:bg-rose-400 focus:ring-4 focus:outline-none focus:ring-rose-300">
                      Descargar CV
                      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="p-12 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                    <div>
                      <div className="flex items-center">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Sobre Mi</h5>
                        <div className="w-20 ml-4 h-1 bg-rose-500"></div>
                      </div>
                      <p className="mt-6 font-sans text-lg text-gray-700 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quibusdam iste debitis eveniet magni ipsam odit delectus maxime. Aperiam quisquam hic quod earum saepe numquam magnam quaerat tempora explicabo nostrum!
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Resume</h5>
                        <div className="w-20 ml-4 h-1 bg-rose-500"></div>
                      </div>
                      <div className="container mx-auto max-w-7xl flex flex-col items-start lg:flex-row my-12 md:my-12 space-x-10">
                        <div className="lg:w-1/2">
                          <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512" fill="rgb(251 113 133)"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
                              </div>
                              <div class="flex-1 min-w-0">
                                  <p class="text-lg font-medium text-gray-900 truncate dark:text-white">
                                      Educación
                                  </p>
                              </div>
                          </div>
                          <div class="max-w-sm my-6 p-6 bg-sky-50 border-gray-200 rounded-lg">
                              <p className="text-black text-sm mb-2">
                                2001 - 2003
                              </p>
                              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Docente</h5>
                              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                          </div>
                          <div class="max-w-sm my-6 p-6 bg-orange-50 border-gray-200 rounded-lg">
                              <p className="text-black text-sm mb-2">
                                2001 - 2003
                              </p>
                              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Docente</h5>
                              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                          </div>
                          <div class="max-w-sm my-6 p-6 bg-violet-50 border-gray-200 rounded-lg">
                              <p className="text-black text-sm mb-2">
                                2001 - 2003
                              </p>
                              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Docente</h5>
                              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                          </div>
                        </div>
                        <div className="lg:w-1/2">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 640 512" fill="rgb(251 113 133)"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-lg font-medium text-gray-900 truncate dark:text-white">
                                    Experiencia
                                </p>
                            </div>
                          </div>
                          <div class="max-w-sm my-6 p-6 bg-emerald-50 border-gray-200 rounded-lg">
                              <p className="text-black text-sm mb-2">
                                2001 - 2003
                              </p>
                              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Docente</h5>
                              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                          </div>
                          <div class="max-w-sm my-6 p-6 bg-rose-50 border-gray-200 rounded-lg">
                              <p className="text-black text-sm mb-2">
                                2001 - 2003
                              </p>
                              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Docente</h5>
                              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                          </div>
                          <div class="max-w-sm my-6 p-6 bg-sky-50 border-gray-200 rounded-lg">
                              <p className="text-black text-sm mb-2">
                                2001 - 2003
                              </p>
                              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Docente</h5>
                              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
