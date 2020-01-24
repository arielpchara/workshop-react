import React, { FC } from 'react'
import { TimeRecord } from '../interfaces'

interface TimeRecordDisplayProps extends TimeRecord {
  onClick: () => void
}

export const TimeRecordDisplay: FC<TimeRecordDisplayProps> = ({
  id,
  time,
  onClick
}) => {
  return (
    <li onClick={onClick}>{id}: {time}</li>
  )
}