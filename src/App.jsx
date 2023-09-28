import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import photo from './assets/foto.jpeg'
import cv from './assets/cv.pdf'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <div className="text-white py-8 bg-[url('./assets/bg.jpg')]">
          <div className="container mx-auto max-w-7xl flex flex-col items-start lg:flex-row my-12 md:my-12">
            <div className="flex flex-col w-full lg:w-1/3 mt-2 md:mt-12 px-8">
              <div className="pt-10 px-8 max-w-sm mx-auto bg-white border border-gray-200 rounded-xl shadow">
                <div className="flex flex-col items-center pb-10">
                  <img className="w-50 mb-3 rounded-lg shadow-lg" src={photo} alt="Photo"/>
                  <h5 className="mb-1 text-xl text-center font-medium text-gray-900 dark:text-white">Dra. Ada Luz Flores Ortega</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Ingeniera Economista</span>
                  <div className="flex mt-4 space-x-3">
                    <a href="https://www.facebook.com/adaluz.floresortega" id="facebook" className="bg-white flex items-center justify-center duration-500 w-12 transform hover:-translate-y-1 h-12 text-2xl rounded-lg hover:bg-rose-400 hover:text-white text-rose-400 ">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://wa.link/qx9yj4" id="whatsapp" className="bg-white flex items-center justify-center duration-500 w-12 h-12 rounded-lg transform hover:-translate-y-1 text-2xl text-rose-400 hover:bg-rose-400 hover:text-white">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="mailto:adaflores1624@gmail.com" id="gmail" className="bg-white flex items-center justify-center transform hover:-translate-y-1 w-12 h-12 rounded-lg duration-500 text-rose-400 hover:bg-rose-400 hover:text-white text-2xl">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                  <div className="w-full my-4">
                    <div className="max-w-sm bg-gray-50 border border-gray-200 rounded-xl shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700">
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
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4">
                    <a href={cv} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg hover:bg-rose-400 focus:ring-4 focus:outline-none focus:ring-rose-300">
                      Descargar CV
                      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-2/3">
              <div className="container mx-auto">
                <div className="relative wrap overflow-hidden p-5 sm:p-10 h-full">
                  <div className="p-6 sm:p-12 bg-white border border-gray-200 rounded-xl shadow">
                    <div className="flex items-center">
                      <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Sobre Mi</h5>
                      <div className="w-20 ml-4 h-1 bg-rose-500"></div>
                    </div>
                    <p className="mt-6 font-sans text-lg text-justify text-gray-400 ">
                      Soy Ingeniero Economista, Magister Scientiae en Economía, Mención Proyectos de Inversión y Doctoris Scientiae en Ciencia Tecnología y Medio Ambiente. - Especialista en agro-economía - Docente de la Facultad de Ingeniería Económica de la Universidad Nacional del Altiplano Puno. En la actualidad vengo conduciendo varias trabajos de investigación en equipo multidisciplinario, resultado de ello he publicado varios artículos en revistas científicos como autora y co-autora; así mismo, se han publicado varios libros como autora y co-autora, algunos de ellos son: Economía agraria y alternativas tecnológicas de cultivos andinos, Comunicacion y Extensión Agrícola, Modelo de administración y gestión ambiental campesina, Maca cultivo alternativo en el altiplano. Adicionalmente, he publicado otros textos como guías de estudio: Finanzas públicas, Mercadotecnia, Costos de producción, Cultivo de cereales, Manejo de bosques tropicales, Seminario de la agricultura y otros.
                    </p>
                    <div className="mt-10">
                      <div className="flex items-center">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Información</h5>
                        <div className="w-20 ml-4 h-1 bg-rose-500"></div>
                      </div>
                      <div className="container mx-auto max-w-7xl flex flex-col items-start lg:flex-row my-12 md:my-12 lg:space-x-10">
                        <div className="lg:w-1/2">
                          <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512" fill="rgb(251 113 133)"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                  <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                      Educación
                                  </p>
                              </div>
                          </div>
                          <div className="max-w-sm my-6 p-6 bg-sky-50 border-gray-200 rounded-lg">
                              <p className="text-black text-sm mb-2">
                                2015 - 2017
                              </p>
                              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">2da Especialidad en Didáctica Universitaria</h5>
                              <p className="mb-3 text-justify font-normal text-gray-500 dark:text-gray-400">Programa de formación avanzada dirigido a docentes universitarios para mejorar sus habilidades pedagógicas y enriquecer su práctica educativa en el nivel superior.</p>
                          </div>
                          <div className="max-w-sm my-6 p-6 bg-orange-50 border-gray-200 rounded-lg">
                              <p className="text-black text-sm mb-2">
                                2011 - 2014
                              </p>
                              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Doctorado en Ciencia, Tecnología y Medio Ambiente</h5>
                              <p className="mb-3 text-justify font-normal text-gray-500 dark:text-gray-400">Programa de educación superior que se enfoca en la investigación avanzada de la interacción entre la ciencia, la tecnología y su impacto en el entorno natural y humano.</p>
                          </div>
                          <div className="max-w-sm my-6 p-6 bg-violet-50 border-gray-200 rounded-lg">
                              <p className="text-black text-sm mb-2">
                                2004 - 2006
                              </p>
                              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Maestría en Economía: Proyectos de Inversión</h5>
                              <p className="mb-3 text-justify font-normal text-gray-500 dark:text-gray-400">Programa académico que se centra en la evaluación, planificación y gestión financiera de proyectos económicos, preparando profesionales para la toma de decisiones estratégicas.</p>
                          </div>
                        </div>
                        <div className="lg:w-1/2">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 640 512" fill="rgb(251 113 133)"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                    Experiencia
                                </p>
                            </div>
                          </div>
                          <div className="max-w-sm my-6 p-6 bg-emerald-50 border-gray-200 rounded-lg">
                              <p className="text-black text-sm mb-2">
                                2022 - 2023
                              </p>
                              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Docente de la Universidad Nacional del Altiplano</h5>
                              <p className="mb-3 text-justify font-normal text-gray-500 dark:text-gray-400">Escuela Profesional de Ingeniería Económica - Facultad de Ingeniería Económica.</p>
                          </div>
                          <div className="max-w-sm my-6 p-6 bg-rose-50 border-gray-200 rounded-lg">
                              <p className="text-black text-sm mb-2">
                                2014 - 2019
                              </p>
                              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Docente de la Universidad Privada San Carlos</h5>
                              <p className="mb-3 text-justify font-normal text-gray-500 dark:text-gray-400">Escuela Profesional de Contabilidad y Finanzas - Facultad de Ciencias Contables.</p>
                          </div>
                          <div className="max-w-sm my-6 p-6 bg-sky-50 border-gray-200 rounded-lg">
                              <p className="text-black text-sm mb-2">
                                2018 - 2019
                              </p>
                              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Docente de la Universidad Andina Néstor Cáceres Velásquez</h5>
                              <p className="mb-3 text-justify font-normal text-gray-500 dark:text-gray-400">Escuela Profesional de Economía y Negocios Internacionales - Facultad de Ciencias Contables Financieras.</p>
                          </div>
                          <div className="max-w-sm my-6 p-6 bg-sky-50 border-gray-200 rounded-lg">
                              <p className="text-black text-sm mb-2">
                                2018 - 2019
                              </p>
                              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Docente de la Universidad Peruana Unión</h5>
                              <p className="mb-3 text-justify font-normal text-gray-500 dark:text-gray-400">Escuela Profesional de Administración - Facultad de Ciencias Empresariales.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-black text-center">&copy; Labcet - Copyright 2023</p>
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
