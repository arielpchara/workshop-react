import React, { FC, useState } from 'react';
import { Input } from '../../components/Input';
import { TimeRecord } from './interfaces'
import { RecordList } from './partials/RecordList';

import { Context } from './context'
import { defaultContext } from './constants';

export const Register:FC = () => {
  const [list, setList] = useState<TimeRecord[]>([])

  const addTime = (time: string) => {
    setList([
      ...list,
      {
        id: list.length + 1,
        time
      }
    ])
  }

  const removeRecord = (id: number) => {
    setList(list.filter((item)=> item.id !== id))
  }

  return (
    <Context.Provider value={{...defaultContext, list, removeRecord}}>
      <Input defaultValue="00:00" onChange={addTime} />
      <RecordList />
    </Context.Provider> 
  )
}