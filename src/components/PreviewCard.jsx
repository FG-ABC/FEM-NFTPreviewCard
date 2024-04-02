import React from 'react'
import NFT from '../assets/images/image-equilibrium.jpg'
import Portrait from '../assets/images/image-avatar.png'

const PreviewCard = () => {
  return (
    <div className='Card max-w-72 rounded-2xl'>
        <div className='Content p-5 flex flex-col h-full'>
            <div className='NFT rounded-2xl aspect-square grid grid-cols-1 grid-rows-1'>
                <img className='rounded-xl h-full col-start-1 row-start-1 z-0' src={NFT}></img>
                <div id='NFThover' className='rounded-xl opacity-0 hover:opacity-100 flex justify-center items-center w-full h-full row-start-1 col-start-1 z-10'>
                    <svg className='opacity-100' width="48" height="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h48v48H0z"/><path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z" fill="#FFF" fill-rule="nonzero"/></g></svg>
                </div>
            </div>
            <h1 className='pt-5 pb-3 text-lg'>Equillibrium #3429</h1>
            <p className='text-sm opacity-75 pb-3'>Our Equilibrium collection promotes balance and calm</p>
            <div id='PT' className='text-sm pb-3 w-full flex justify-between'>
                <div id='P' className='flex justify-center items-center'>
                    <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg>
                    <h2 className='pl-1.5 font-medium'>0.041 ETH</h2>
                </div>
                <div id='T' className='flex justify-center items-center'>
                    <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg>
                    <p className='pl-1.5'>3 days left</p>
                </div>   
            </div>
            <hr className='pt-3 opacity-10'/>
            <div id='Creator' className='flex items-center'>
                <img className='aspect-square w-8 border rounded-full' src={Portrait}></img>
                <p className='text-sm pl-3'>Creation of </p>
                <h3 className='text-sm pl-1'>Jules Wyvern</h3>
            </div>
        </div>
        

    </div>
  )
}

export default PreviewCard