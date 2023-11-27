import React, { useState } from "react"
import style from './style.module.scss'
import Header from "../../components/ui/hyper/header"
import { Table } from 'antd'

const Home: React.FC<unknown> = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Array<React.Key>>([])

const dataSource = [
  {
    key: 1,
    name: 'Mike',
    age:32,
    address: '10 Downing Street'
  },
  {
    key: 3,
    name: 'John',
    age:42,
    address: '10 Downing Street'
  },
  {
    key: 2,
    name: 'John',
    age:42,
    address: '10 Downing Street'
  },
  {
    key: 4,
    name: 'John',
    age:42,
    address: '10 Downing Street'
  },
  {
    key: 5,
    name: 'John',
    age:42,
    address: '10 Downing Street'
  },
  {
    key: 6,
    name: 'John',
    age:42,
    address: '10 Downing Street'
  },
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
]

const rowSelection = {
  selectedRowKeys,
  onChange: (selectedRows: React.Key[]) => {
    console.log('000',selectedRows)
    setSelectedRowKeys(selectedRows)
  }
};

const button = () => {
  setSelectedRowKeys(dataSource.map(item => item.key))
}
  return (
    <>
      <div className={style.container}>
        <Header />
        <button type="button" onClick={button}>asdasdasdasd</button>
        <Table dataSource={dataSource} columns={columns} rowSelection={rowSelection}/>
      </div>
    </>
  )
}

export default Home