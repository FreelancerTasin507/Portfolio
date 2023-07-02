// const Pdf = () => {
//     return (
//       <div>
//         <a href="../../../public//front end resume2.pdf" download>
//           <button className="btn btn-outline duration-300 ml-4">
//             Download Resume
//           </button>
//         </a>
//       </div>
//     );
//   };
  
//   export default Pdf;
  

const Pdf = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../../public/front end resume2.pdf'; // Path to your resume PDF
    link.download = 'resume.pdf'; // Optional: Set the downloaded file name
    link.click();
  };

  return (
    <button className="btn btn-outline duration-300 ml-4" onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default Pdf;
