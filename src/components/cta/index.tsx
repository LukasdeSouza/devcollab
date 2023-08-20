import React from 'react'

const CTASection = () => {
  return (
    <section className="bg-black dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white dark:text-white">
            Comece já seu teste grátis
          </h2>
          <p className="mb-6 font-light text-gray-300 dark:text-gray-400 md:text-lg">
            Teste a DevCollab por 7 dias. Sem necessidade de cartão de crédito.
          </p>
          <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-70 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
            Testar grátis por 7 dias
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection