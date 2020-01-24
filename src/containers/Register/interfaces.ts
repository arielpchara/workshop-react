export interface TimeRecord {
  id: number
  time: string
}

export interface RegisterContext {
  list: TimeRecord[],
  removeRecord: (id: number) => void
}