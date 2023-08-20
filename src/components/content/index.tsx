import React from 'react'

const ContentSection = () => {
  return (
    <section className="bg-black dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-200 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
            Times de Todo o Mundo
          </h2>
          <p className="mb-4">
            Nós pensamos na plataforma com o objetivo de integrar o Mundo inteiro com diferentes tipo de pessoas e linguagens. Há times completos de desenvolvedores, times de produtos, times de frontend, backend, times mistos, tudo com o objetivo de representar um ambiente verdadeiro de uma empresa de desenvolvimento.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
          <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
      </div>
    </section>
  )
}

export default ContentSection