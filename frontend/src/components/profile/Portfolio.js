import React from 'react';

const Portfolio = () => {
  // Sample data for portfolio items
  const portfolioItems = [
    {
      title: 'Project 1',
      image: 'path/to/project1-image.jpg',
      description: 'Description of project 1...',
      link: 'https://project1-link.com',
    },
    // Add more items as needed
  ];

  return (
    // <div className="mb-5">
    //   <h2>Portfolio</h2>
    //   <div className="row">
    //     {portfolioItems.map((item, index) => (
    //       <div className="col-md-4 mb-4" key={index}>
    //         <Card>
    //           <Card.Img variant="top" src={item.image} />
    //           <Card.Body>
    //             <Card.Title>{item.title}</Card.Title>
    //             <Card.Text>{item.description}</Card.Text>
    //             <Button variant="primary" href={item.link} target="_blank">
    //               View Project
    //             </Button>
    //           </Card.Body>
    //         </Card>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <h1>Portfolio</h1>
  );
};

export default Portfolio;
