import React from 'react'
import { footerData } from './footer-data' // Asegúrate de ajustar la ruta según tu estructura de proyecto

const Footer = () => {
  return (
    <div className="py-14 px-6">
      <div className="flex xl:flex-row flex-col-reverse w-full">
        <div className="xl:w-1/6 gap-3 md:gap-5 xl:gap-0 flex flex-col md:flex-row xl:flex-col justify-center items-center xl:items-start xl:justify-start">
          <div className="xl:w-3/4 flex justify-center xl:justify-start">
            <img src={footerData.logo.src} alt={footerData.logo.alt} className="h-10 px-6 my-2" />
          </div>
          <div className="flex gap-6 py-4 px-5 md:gap-2 md:py-1">
            {footerData.socialMedia.map((icon) => (
              <img key={icon.id} src={icon.src} alt={icon.alt} className="w-7 h-7" loading="lazy" />
            ))}
          </div>
        </div>
        <div className="xl:w-5/6 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {footerData.sections.map((section) => (
            <div key={section.id} className="w-full p-4">
              <div className="pb-4">
                <strong>{section.title}</strong>
              </div>
              <ul className="text-[#31343E] text-sm space-y-1">
                {section.items.map((item) => (
                  <li key={item.id} className="hover:underline cursor-pointer">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        {footerData.languages.map((language, index) => (
          <React.Fragment key={language.id}>
            {language.name}
            {index < footerData.languages.length - 1 && <span className="mx-2">|</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="text-center mt-2">{footerData.copyright}</div>
    </div>
  )
}

export default Footer
