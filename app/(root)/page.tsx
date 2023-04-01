import MainSearcher from './MainSearcher'

export default function Page() {
  return (
    <>
      <div className='pt-24pxr'>
        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate px-20pxr text-center"
          data-aos="zoom-y-out"
        >
          <p className="pb-10pxr">Make your website</p>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">가나다라마바사</span>
        </h1>
      </div>

      <div className='text-center pt-20pxr'>
        <MainSearcher></MainSearcher>
      </div>
    </>
  )
}
