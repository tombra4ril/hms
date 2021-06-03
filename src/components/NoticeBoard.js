import React from 'react'
import SectionTitle from './SectionTitle'

const NoticeBoard = ({title, icon}) => {
  return (
    <div className="noticeboard-section">
        <SectionTitle title={title} icon={icon} />
    </div>
  )
}

export default NoticeBoard
