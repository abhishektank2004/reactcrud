import React, { useState, useEffect } from 'react'; // Import useState and useEffect
 // Correct path to your CSS file

function Home_page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // useState to manage current image index

  const images = [
    "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg",
    "https://media.istockphoto.com/id/1352083784/photo/cranes-on-the-construction-site-surrounded-by-new-real-estates.jpg?s=612x612&w=0&k=20&c=ycaK6MtLBAbPl8j4q6rqA70e7aurbg_Qzv7WcxRRbPE=",
    "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg",
    "https://media.istockphoto.com/id/1352083784/photo/cranes-on-the-construction-site-surrounded-by-new-real-estates.jpg?s=612x612&w=0&k=20&c=ycaK6MtLBAbPl8j4q6rqA70e7aurbg_Qzv7WcxRRbPE=",
    // Add more images as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]); // Re-run effect if images array length changes

  return (
    <>
      <div className="container-fluid --bs-secondary-color">
        <div className="container">
          <div className="image-slider">
            <img
              src={images[currentImageIndex]} // Dynamically change the image
              alt="Slideshow"
              height={600}
              width={1400}
            />
          </div>
        </div>
        <br/>
        <div className='container-fluid' style={{ backgroundColor: '#CEDDE9FF', height: '200px' }}>
            <br/>
            <h3>
            Plan Your New Dream Home With Us.
            </h3>
            <br/>
            <h4>
            Our Architects that can design an extravagant plan with trending designs along with our Engineers that will implement the
            latest technological advancements and techniques will build you a safe,efficient and luxurious home as economically as possible.
            </h4>
        </div>
      </div>
      <br/>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyCqFWqHVnRgDz3aHD88XmJwkX3ZfzgXjYns4_YFBg2vb3kskfyTIOjv0UxTkimJ1prw&usqp=CAU'  width={390} height={300}/>
                            <h5 className="card-title">Design Your Dream Home</h5>
                            <p className="card-text">Our team of expert architects will work with you to create a
                                custom design that meets your needs and exceeds your expectations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <img src='https://www.shutterstock.com/image-photo/carpenter-cutting-board-hand-saw-260nw-190337963.jpg'  width={390} height={300}/>
                            <h5 className="card-title">Design Your Dream Home</h5>
                            <p className="card-text">Our team of expert architects will work with you to create a
                                custom design that meets your needs and exceeds your expectations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyAEPGfnTbki7R487F0plfHuEEM-k_6ioo8A&s' width={390} height={300}/>
                            <h5 className="card-title">Design Your Dream Home</h5>
                            <p className="card-text">Our team of expert architects will work with you to create a
                                custom design that meets your needs and exceeds your expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <div style={{ width: '100%', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div style={{ width: '30%', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#f4f4f4', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src="https://t3.ftcdn.net/jpg/05/54/56/58/360_F_554565854_ZddX29Ga6LMT7iR1cZSd5AL5zSjDiuj0.jpg"
                    alt="Concrete Developments" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                    <h5 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>CONCRETE DEVELOPMENTS</h5>
                    <p style={{ fontSize: '14px', color: '#666' }}>Be it a simple staircase or a multi-storey building, we do it all. You can count on us to build the best quality of concrete through our experience and deep insight in the division of structural engineering.</p>
                </div>
                </div>

                <div style={{ width: '30%', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#f4f4f4', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src="your-icon-path2.svg" alt="Financial Assistance" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                    <h5 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>FINANCIAL ASSISTANCE</h5>
                    <p style={{ fontSize: '14px', color: '#666' }}>We provide premium payment options to our clients in all our development projects...</p>
                </div>
                </div>

                <div style={{ width: '30%', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#f4f4f4', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src="your-icon-path3.svg" alt="Interior Designing" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                    <h5 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>INTERIOR DESIGNING</h5>
                    <p style={{ fontSize: '14px', color: '#666' }}>Explore our budget-friendly, high-quality, durable design options for your household...</p>
                </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '30%', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#f4f4f4', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src="your-icon-path4.svg" alt="Cost Effective Solutions" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                    <h5 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>COST EFFECTIVE SOLUTIONS</h5>
                    <p style={{ fontSize: '14px', color: '#666' }}>We present our clients with Value Engineering, where the client has several options...</p>
                </div>
                </div>

                <div style={{ width: '30%', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#f4f4f4', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src="your-icon-path5.svg" alt="Smart Builders" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                    <h5 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>SMART BUILDERS</h5>
                    <p style={{ fontSize: '14px', color: '#666' }}>RK Constructions is led by experienced technocrats and engineers that are well-versed...</p>
                </div>
                </div>

                <div style={{ width: '30%', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#f4f4f4', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <img src="your-icon-path6.svg" alt="Quality Infrastructure" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
                    <h5 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>QUALITY INFRASTRUCTURE</h5>
                    <p style={{ fontSize: '14px', color: '#666' }}>You can trust our experienced engineers to produce a quality-based infrastructure...</p>
                </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Home_page;
