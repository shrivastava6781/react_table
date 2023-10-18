import React, { useRef, useState } from 'react'
import './Carousel.css'
const defaultFunction = () => { }
const Carousel = ({ imageList = [], onDelete = defaultFunction, defaultImage = "", onSave = defaultFunction, circleCount = 5, imageWidth = 100 }) => {
    const [page, setPage] = useState(0)
    const carouselRef = useRef();
    const scrollToRight = () => {
        const nextPage = page + 1;
        if (imageList.length > nextPage) {
           carouselRef.current.children[nextPage].scrollIntoView()
           window.scrollTo(0,0);
            setPage(nextPage);
        }
    }
    const scrollToLeft = () => {
        const prevPage = page - 1;
        if (prevPage >= 0) {
            carouselRef.current.children[prevPage].scrollIntoView();
            window.scrollTo(0,0);
            setPage(prevPage);
        }
    }
    const handleOnDelete = () => {
        onDelete(imageList.filter((img, index) => index !== page));
        setPage(0)
    }
    const handleOnSave = () => {
        onSave(imageList[page]);
    }
    const imageWidthMap = {
        100: "carousel-image-width-100",
        90:"carousel-image-width-90"
    }
    return (
        <div className='carousel-box'>
            <div className='carousel-container'>
                {
                    <>
                        <div ref={carouselRef} className='image-container'>
                            {
                                imageList.length > 0
                                    ? (
                                        imageList.map((image, index) => {
                                            return <img className={`carousel-image ${imageList.length > 1 && imageWidthMap[imageWidth]}`} src={image.url} key={index} />
                                        })
                                    ) : (
                                        <img src={defaultImage} alt='No images' />
                                    )
                            }
                        </div>
                        {
                            imageList.length > 0 && (<>
                                {
                                    page > 0 && (<div className='carousel-arrow carousel-left-arrow' onClick={scrollToLeft}> &lt; </div>)
                                }
                                {
                                    page < imageList.length - 1 && (<div className='carousel-arrow carousel-right-arrow' onClick={scrollToRight}> &gt; </div>)
                                }
                                
                                
                                <div className='carousel-circle-container'>
                                    {
                                        imageList.slice(0, circleCount).map((img, index) => {
                                            return <div key={index} className={`carousel-circle ${page === index && ('carousel-circle-active')}`}>

                                            </div>
                                        })
                                    }
                                </div>
                            </>)
                        }
                        
                    </>
                }
            </div>
            {
                imageList.length > 0 && <div className='carousel-btn-container'>
                <button onClick={handleOnDelete} className='carousel-save-btn carousel-del-btn'>Delete</button>
                <button onClick={handleOnSave} className='carousel-save-btn'>Save</button>
                </div>
            }
        </div>
    )
}

export default Carousel