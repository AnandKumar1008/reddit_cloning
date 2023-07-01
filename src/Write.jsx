import React, { useRef, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateIcon from '@mui/icons-material/Create';
import './write.css';

export default function Write(props) {
  const textareaRef = useRef(null);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [images, setImages] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [newid,setnewid]=useState(21);

  const handleTextareaInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  const handleImagesChange = (event) => {
    setImages(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: newid,
      title: title,
      content: contents,
      imageUrl: imageUrl,
      votingNumber: 0,
      commentNumber: 0
    };
    props.fun(newPost);
    setTitle('');
    setContents('');
    setImageUrl('');
    setnewid((prev)=>prev+1);
   
  };

  const handleImagePreview = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='write'>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <CreateIcon style={{ border: '2px solid black', borderRadius: '100px', padding: '5px' }} />
            <p>Add New Post</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='writedetail'>
              <form id="details" onSubmit={handleSubmit}>
                <input type='text' placeholder='Title of Post' id="title" value={title} onChange={handleTitleChange} />
                <textarea
                  rows={1}
                  cols={5}
                  placeholder='Write maximum 500 Words..'
                  id="areatext"
                  ref={textareaRef}
                  onInput={handleTextareaInput}
                  value={contents}
                  onChange={handleContentsChange}
                />
                <input type='file' id="imginput" value={images} onChange={handleImagePreview} />
                <img src={imageUrl} alt=''  id="preview"/>
                <div className='btngroup'>
                  <button type='button' className='btngroupbtn' id="draftbtn">Draft</button>
                  <button type='submit' className='btngroupbtn' id="postbtn">Post</button>
                </div>
              </form>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
