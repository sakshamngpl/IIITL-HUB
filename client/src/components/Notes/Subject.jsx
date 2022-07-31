import React from 'react'
import { useParams } from 'react-router-dom'


// async function page(){
//   var result = await fetch("/uploadNotes", {
// method: "POST",
// headers: {
//   "Content-Type": "application/json",
// },
// body: JSON.stringify({
//   sem_num, 
//   subject
// }),
// }).then((res) =>{res.body
// }
// );
// }
const Subject = () => {
  
  const { sem_num, subject } = useParams();
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    let fileContent = '';


    reader.addEventListener("load", () => {
      // convert file to base64 string
      file.content = reader.result;
      console.log(file);
      console.log(file.lastModifiedDate.toDateString())



      // const response = await fetch('http://localhost:8082/uploadNotes', {
      //   method: 'POST',
      //   mode: 'cors',
      //   cache: 'no-cache',
      //   credentials: 'same-origin',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   redirect: 'follow',
      //   referrerPolicy: 'no-referrer',
      //   body: JSON.stringify(data)
      // });
      // return response.json();

    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }

  }
  return (
    <div>
      <div>{sem_num + " " + subject}</div>
      <input type="file" name="file" id="file" onChange={onChange} />
    </div>
  )
}

export default Subject