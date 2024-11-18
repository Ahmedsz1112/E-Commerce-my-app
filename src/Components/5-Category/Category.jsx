
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../5-Category/category.css'
import { faArrowLeft, faArrowRight, faCamera, faDesktop, faGamepad, faHeadphones, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons/faStopwatch';
function Category() {
    const data = [
        { img: <FontAwesomeIcon icon={faMobileScreenButton} />, title: "Phones" },
        { img: <FontAwesomeIcon icon={faDesktop} />, title: "Computers" },
        { img: <FontAwesomeIcon icon={faStopwatch} />, title: "SmartWatch" },
        { img: <FontAwesomeIcon icon={faCamera} />, title: "Camera" },
        { img: <FontAwesomeIcon icon={faHeadphones} />, title: "HeadPhones" },
        { img: <FontAwesomeIcon icon={faGamepad} />, title: "Gaming" },
    ];

    return (
        <section className='category '>
            <div className="container">
                <div className='d-flex' >
                    <span className='span-bg'></span>
                    <span className=' align-self-center  fw-bold' style={{ color: "rgb(219, 68, 68)" }}>Categories</span>
                </div>
                <div className='d-flex'>
                    <h2 className='me-5 mt-3 fw-bold'>Browse By Category</h2>
                    <div className='d-flex ms-auto align-self-center' >
                        <span className='arrow-roun me-2'><FontAwesomeIcon icon={faArrowLeft} /></span>
                        <span className='arrow-roun'><FontAwesomeIcon icon={faArrowRight} /></span>
                    </div>
                </div>
                <div className="row g-3 my-5">
                    {data.map((x, index) => {
                        return <div className='col-lg-2 col-md-3 col-sm-6' key={index}>
                            <div className='text-center border rounded '>
                                <p className='fs-3 mt-4'>{x.img}</p>
                                <p className='mb-4'>{x.title}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
};

export default Category;