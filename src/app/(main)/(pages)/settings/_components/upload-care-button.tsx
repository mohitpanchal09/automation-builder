"use client"
import React from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';

type Props = {
    onUpload?:any
}

function UploadCareButton(props:Props) {
  return (
    <div>
    <FileUploaderRegular
       sourceList="local, url, camera, dropbox"
       classNameUploader="uc-gray"
       pubkey="e217c847bcf8070beac0"
    />
  </div>
  )
}

export default UploadCareButton