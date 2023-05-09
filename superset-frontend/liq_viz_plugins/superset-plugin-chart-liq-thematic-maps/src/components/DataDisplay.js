import React, { useEffect, useState } from 'react';
import { Divider, List, Typography, Table } from 'antd';
import { Descriptions } from 'antd';

export default function DataDisplay(props) {
  const {
    data
  } = props;

  // Dynamically allocate columns as keys of data objects
  const columns = data.length === 0 ? [] : Object.keys(data[0]).map(c => {
    return {
      title: c,
      dataIndex: c,
      key: c
    }
  });

  const [isEmpty, setIsEmpty] = useState(false); // Flag to check if data props is empty
  const [newData, setNewData] = useState([]);

  // Need to add a key value for each data object which will just be its index
  useEffect(() => {
    let nD = [];
    data.map((d, i) => {
      let row = {key: i};
      Object.keys(d).map(k => {
        row[k] = d[k].toString();
      });
      nD.push(row);
    });
    console.log(nD);
    setNewData([...nD]);
    setIsEmpty(data.length === 0);
  }, [data])

  return (
    <>
      {/*isEmpty ? 'No Data' : <Table columns={columns} dataSource={newData} />*/}
      {isEmpty ? 'No Data' : newData.map((d, i) => (
        <>
          <Descriptions 
            title={'tenantname' in d ? d['tenantname'] : 'name' in d ? d['name'] : ''}
            layout='horizontal'
            key={i}
            bordered
            column={1}
          >
            {Object.keys(d).map(o => !(o === 'key' || o === 'zoom') && (
              <Descriptions.Item label={o}>{d[o]}</Descriptions.Item>
            ))}
          </Descriptions>
          <Divider />
        </>
      ))}
    </>
  )
}
