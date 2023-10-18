import React, { useEffect, useState } from 'react'
import './DragAndDrop.css'
const DragAndDrop = ({ title = "Select File", onFileDrop }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const onDrop = (files) => {
    const fileList = Object.values(files).map((file)=> {
      return ({
        url: URL.createObjectURL(file),
        data: file
      });
    })
    onFileDrop(fileList);
  }
  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true)
  }
  const onDragLeave = () => {
    setIsDragActive(false)
  }
  return (
    <div onDrop={(e) => {
      e.preventDefault();
      onDrop(e.dataTransfer.files);
    }} onDragOver={onDragOver} onDragLeave={onDragLeave} className={`drag-n-drop-container ${isDragActive && 'drag-input-container-active'} `}>
        <input onChange={(e) => onDrop(e.target.files)} className='drag-drop-input' id='drag-file-input' type='file' title='' multiple />
       <label className={`drap-n-drop-input-label ${isDragActive && 'drag-input-label-active'}`} for="drag-file-input"
      >{title}</label>
    </div>
  )
}

export default DragAndDrop