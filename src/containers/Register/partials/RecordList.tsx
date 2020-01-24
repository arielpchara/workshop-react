import React, { FC, useContext } from 'react'
import { TimeRecordDisplay } from './TimeRecordDisplay'

import { Context } from '../context'
// export interface RecordListProps {
//   list: TimeRecord[]
// }

export const RecordList: FC = () => {
  const { list, removeRecord } = useContext(Context)
  return (
    <ul>
      {list.map(timeRecord => (
        <TimeRecordDisplay
          onClick={() => removeRecord(timeRecord.id)}
          {...timeRecord}
        />
      ))}
    </ul>
  )
}
