import React from 'react'
import ReactQuill from 'react-quill'

const Content = () => {
  return (
    <div>
    <ReactQuill value={content}  style={{ width:"630px" }}/>
         <Button type="primary" htmlType="submit " className=' mr-4 mt-16'>
          Save
        </Button>
        <Button type="default" onClick={handleCancel} className='ml-88 mt-16'>
          Cancel
        </Button>
    </div>
  )
}

export default Content