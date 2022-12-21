import React, { useEffect, useState, useRef } from "react";
// import Comment from './Comment';


function ReservasiCobaLagi2() {
   const commentsRef = useRef(null);
   const [comments, setComments] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);


   const addCommentHandler = () => {
      if (commentsRef.current && commentsRef.current.value) {
        const newComment = {
        createdBy: 'Wendy',
        description: commentsRef.current.value,
        userId: 8
      }
      fetch("http://localhost:8010/comments", {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(newComment)
        })
        .then(response => response.json())
        .then(data => {
             let updatedComments = comments;
             updatedComments.push(data)
             setComments([...comments], updatedComments);
        
             setLoading(false);
             setError(null);
        })
        .catch(error => {
       
            setLoading(false);
            setError('Something went wrong, please try again later.');
        });
      }
   }

   useEffect(() => {
      setLoading(false);
      getCommentsAPI();
    }, []);

   const getCommentsAPI = async () => {
        fetch("http://localhost:8010/comments", {
           method: 'GET',
           headers: new Headers({
              'Accept': 'application/json',
              'Content-Type': 'application/json'
           })
        })
        .then(response => response.json())
        .then(data => {
            setComments(data);
            setLoading(false);
            setError(null);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
            setError('Something went wrong, please try again later.');
        });
  }


  return (
       <>
       <div className="container">
           <h2>My Amazing Blog</h2>
           <hr />
           <br />
       
           <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
           <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
      </div>
     
      <br />
      <div className="container">
          <h4>Comments</h4>
          <hr />
          <br />
      </div>
      <div className="container">
          <div className="row justify-content-start">
               <div className="col xl-2 lg-2 md-3 sm-4 xs-4">
                    <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          ref={commentsRef}>
                    </textarea>
                </div>
                <div className="col xl-1 lg-1 md-1 sm-2 xs-2">
                     <button 
                          type="button" 
                          className="btn btn-outline-secondary"  
                          onClick={addCommentHandler}           
                      >
                            Post comment
                      </button>
               </div>
               <div className="col xl-10 lg-10 md-10 sm-6 xs-6">   
               </div>      
           </div>
      </div>

        <br />
        {/* {!loading 
            && !error 
            && comments 
            && comments.length > 0 
            && comments.map((comment, index) => <Comment 
               key={index} 
               name={comment.createdBy} 
               description={comment.description} 
               />
         )}
        {!loading && 
          error && 
             <div className="container">
                 <div className="row justify-content-start">
                    <div className="col xl-2 lg-2 md-3 sm-4 xs-4">
                       <div class="alert alert-danger" role="alert">
                           {error}
                       </div>
                     </div>
                 </div>
              </div>

        } */}
        <br />
        <a href="#"> Back to top </a>
        <br />
         </>
)}

export default ReservasiCobaLagi2;
